import * as headerParser from "./vcd_header.pegjs";
import * as bodyParser from "./vcd_body.pegjs";
import { gcd } from "mathjs";
function splitAt(text, token) {
  const pos = text.search(token);
  const before = text.slice(0, pos);
  const after = text.slice(pos + token.length);
  return { before, after };
}

function parseElement(key, text) {
  if (!text.startsWith("$" + key))
    throw `Expected string to start with '${key}':\n ${text}`;

  text = text.slice(key.length);
  const pos = text.search("$");
  if (pos < 0) throw `Parsing error. Could not find match $end. Text:\n${text}`;
  const next_text = text.slice(pos);

  if (next_text.startsWith("$end"))
    return {
      parseResult: { [key]: text.slice(0, pos) },
      remaining: next_text.slice(4),
    };

  text = next_text;
}
function parseHeader(text) {
  header = {};
  nextpos = text.search("$");
  while (nextpos >= 0) {
    text = text.slice(nextpos);
    if (text.startsWith("$date")) {
      header.date, (text = parseDate(text));
    }
  }
  return header;
}
function matchHeader(text) {
  const regex1 = /\$enddefinitions *\$end/g;
  regex1.test(text);
  let header = text.slice(0, regex1.lastIndex);
  header = headerParser.parse(header);
  return { header, remaining: text.slice(regex1.lastIndex) };
}
function parse(parser, text) {
  return parser.parse(text);
  // catch (e) {
  //  const error_text = text.slice(e.location.start.line, e.location.end.line);
  //  console.log(
  //    `Error at line ${e.location.start.line} to ${e.location.end.line}.\n Text:\n ${text}`
  //  );
  //  throw e;
  //}
}

function matchInit(text) {
  const pos1 = text.search(/\$dumpvars/);
  if (pos1 < 0) return { init: null, body: text };

  text = text.slice(pos1 + 9);
  const pos2 = text.search(/\$end/);
  let init = null;
  init = parse(bodyParser, text.slice(0, pos2));

  return { init, body: text.slice(pos2 + 4) };
}
function parseVCD(text) {
  text = text.trimStart();
  let { header, remaining } = matchHeader(text);
  let { init, body } = matchInit(remaining);
  body = bodyParser.parse(body);
  return { header, init, body };
}

export function getVCDObject(text, vcdFileName) {
  let obj = parseVCD(text, vcdFileName);
  console.log(obj);
  let sim_end_time = 0;
  let waveforms = {};
  if (obj.init != null) {
    const init_region = obj.init[0];
    for (let i = 0; i < init_region.rows.length; i++) {
      const row = init_region.rows[i];
      waveforms[row.ref] = [{ time: 0, value: row.value }];
    }
  }

  let time_scale = null;
  for (let t = 0; t < obj.body.length; t++) {
    const region = obj.body[t];
    sim_end_time = Math.max(sim_end_time, region.time);
    if (time_scale == null && region.time > 0) time_scale = region.time;
    if (time_scale != null) {
      try {
        time_scale = gcd(time_scale, region.time);
      } catch (e) {
        console.log(time_scale, region.time);
        throw e;
      }
    }
    for (let i = 0; i < region.rows.length; i++) {
      const row = region.rows[i];
      if (!(row.ref in waveforms)) waveforms[row.ref] = [];
      waveforms[row.ref].push({ time: region.time, value: row.value });
    }
  }

  let out = { sim_end_time, timescale: obj.timescale, time_scale, signals: [] };
  console.log("time_scale", out.time_scale);
  function insertSignals(scope, prefix = "") {
    if (prefix != "") prefix = prefix + ".";
    for (let i = 0; i < scope.vars.length; i++) {
      let v = scope.vars[i];
      const name = `${prefix}${scope.name}.${v.name}`;
      out.signals.push({
        ...v,
        name,
        waveform: waveforms[v.ref],
      });
    }
    for (let i = 0; i < scope.scopes.length; i++) {
      insertSignals(scope.scopes[i], `${prefix}${scope.name}`);
    }
  }

  for (let i = 0; i < obj.header.scopes.length; i++) {
    insertSignals(obj.header.scopes[i]);
  }

  return out;
}
