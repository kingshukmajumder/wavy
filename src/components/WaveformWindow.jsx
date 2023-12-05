import React from "react";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
import PropTypes from "prop-types";

function bin2hex(v) {
  if (isNaN(v)) return v;
  const hex = parseInt(Number(v), 2).toString(16);
  return hex;
}
export default class WaveformWindow extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.canvasOuterRef = React.createRef();
    this.nameRef = React.createRef();
    this.names = [];
    this.redrawn = false;

    this.canvasWidth = this.props.width * 0.85 - 5;
    this.canvasHeight = this.props.height - 5;

    this.wave_wndw_style = {
      position: "absolute",
      width: `${this.canvasWidth + 5}px`,
      height: `${this.props.height}px`,
      left: `${this.props.width * 0.15 + 5}px`,
      border: "1px solid black",
      overflow: "auto",
      backgroundColor: "black",
    };
    this.style = {
      position: "absolute",
      top: `${this.props.top}px`,
      left: `${this.props.left}px`,
      height: `${this.props.height}px`,
      width: `${this.props.width}px`,
      backgroundColor: "black",
    };

    this.name_wndw_style = {
      position: "absolute",
      width: `${this.props.width * 0.15}px`,
      height: `${this.canvasHeight}px`,
      overflow: "auto",
    };

    this.inner_name_wndw_style = {
      width: `${this.props.width * 0.15}px`,
      position: "absolute",
      border: "1px solid blue",
    };

    this.value_lbls = [];
    this.max_nwaves = 199;
  }

  drawBinaryValue(ctx, val, duration, time, y, lastValue = false) {
    const x = time * 20;
    const width = duration * 20;
    const height = 20;
    if (val > 1 || val < 0) {
      throw "Expected binary value.";
    }

    ctx.moveTo(x, y);
    if (val == 1) {
      ctx.lineTo(x, y - height);
      ctx.lineTo(x + width, y - height);
      if (!lastValue) ctx.lineTo(x + width, y);
    } else {
      ctx.lineTo(x + width, y);
    }
  }

  drawValue(ctx, val, duration, time, y) {
    const x = time * 20;
    const width = duration * 20;
    const height = 20;

    y = y - height / 2;
    ctx.moveTo(x, y);
    ctx.lineTo(x + 3, y - height / 2);
    ctx.lineTo(x + width - 3, y - height / 2);
    ctx.lineTo(x + width, y);

    ctx.moveTo(x, y);
    ctx.lineTo(x + 3, y + height / 2);
    ctx.lineTo(x + width - 3, y + height / 2);
    ctx.lineTo(x + duration * 20, y);

    const e = document.createElement("label");
    const textwidth = width - 6;
    if (x + width > this.canvasWidth) return;

    e.style = `color:white;position:absolute; left:${x + 3}px; top:${
      y - height / 2
    }px; width:${textwidth}px;overflow:hidden; text-align:center`;
    e.innerHTML = bin2hex(val);
    ctx.outerRef.current.prepend(e);
    this.value_lbls.push(e);
  }

  drawWave(ctx, x, y, { waveform, width }, { time_scale, sim_end_time }) {
    ctx.beginPath();
    sim_end_time = sim_end_time / time_scale;
    for (let i = 0; i < waveform.length; i++) {
      let { time, value } = waveform[i];
      //Normalize time.
      time = time / time_scale;
      if (time * 20 >= this.canvasWidth) break;
      //Do not simulate longer than sim_end_time.
      if (time >= sim_end_time) break;
      let duration = sim_end_time - time;
      if (i + 1 < waveform.length) {
        duration = waveform[i + 1].time / time_scale - time;
      }
      if (width == 1) {
        this.drawBinaryValue(
          ctx,
          value,
          duration,
          time,
          y,
          i == waveform.length - 1
        );
      } else {
        this.drawValue(ctx, value, duration, time, y);
      }
    }
    ctx.strokeStyle = "green";
    ctx.stroke();
  }

  drawNames() {
    if (this.props.data == null) return;
    this.names = [];
    for (let n = 0; n < this.props.data.signals.length; n++) {
      if (n * 50 + 100 >= this.canvasHeight) break;

      const lbl_style = {
        position: "absolute",
        top: `${10 + 50 * n}px`,
        left: "10px",
      };

      const lbl = (
        <label style={lbl_style} key={`k${n}`}>
          {" "}
          {`${this.props.data.signals[n].name}`}
        </label>
      );
      this.names.push(lbl);
    }
  }

  drawWaveformWindow() {
    if (this.props.data == null) return;
    const canvas = this.canvasRef.current;
    if (canvas == null) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < this.value_lbls.length; i++) {
      this.value_lbls[i].remove();
    }
    ctx.outerRef = this.canvasOuterRef;
    for (let n = 0; n < this.props.data.signals.length; n++) {
      if (n * 50 + 100 >= this.canvasHeight) break;
      let wave = this.props.data.signals[n];
      this.drawWave(ctx, 0, 30 + n * 50, wave, this.props.data);
    }
  }

  componentDidMount() {
    this.drawWaveformWindow();
    console.log("mounted.");
  }

  componentDidUpdate() {
    this.drawWaveformWindow();
    console.log("updated.");
  }

  render() {
    //if (this.props.data == null)
    //return <div style={this.style}>Right click to select a file or url.</div>;

    if (this.props.data != null) {
      this.canvasWidth =
        (20 * this.props.data.sim_end_time) / this.props.data.time_scale + 40;
      this.canvasWidth = Math.min(this.canvasWidth, 15000);

      this.canvasHeight = 50 * this.props.data.signals.length + 100;
      this.canvasHeight = Math.min(this.canvasHeight, 10000);
    }
    const height = `${this.canvasHeight}px`;
    this.drawNames();

    return (
      <ScrollSync>
        <div style={this.style}>
          <ScrollSyncPane>
            <div style={this.name_wndw_style}>
              <div style={{ ...this.inner_name_wndw_style, height }}>
                {this.names}
              </div>
            </div>
          </ScrollSyncPane>

          <ScrollSyncPane>
            <div style={this.wave_wndw_style}>
              <Canvas
                canvasRef={this.canvasRef}
                outerRef={this.canvasOuterRef}
                canvasWidth={this.canvasWidth}
                canvasHeight={this.canvasHeight}
              />
            </div>
          </ScrollSyncPane>
        </div>
      </ScrollSync>
    );
  }
}

class Canvas extends React.Component {
  render() {
    console.log(`Canvas rendered.`);
    return (
      <div ref={this.props.outerRef}>
        <canvas
          width={`${this.props.canvasWidth}px`}
          height={`${this.props.canvasHeight}px`}
          overflow="auto"
          ref={this.props.canvasRef}
          style={{ position: "absolute", left: "0px", border: "1px solid red" }}
        >
          Unsupported browser.
        </canvas>
      </div>
    );
  }
}

WaveformWindow.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
};

function getDefaultsignals({ sim_end_time, nsignals }) {
  let signals = [];
  for (let n = 0; n < nsignals; n++) {
    let waveform = [];
    const width = (n % 5) + 1;
    let reps = 0;
    for (let t = 0; t < sim_end_time; ) {
      const v = Math.round((2 ** width - 1) * Math.random());
      waveform.push({ time: t, value: v });
      t += Math.ceil(10 * Math.random());
    }
    signals.push({ name: `wave${n}`, waveform, width });
  }

  return { sim_end_time, signals, timescale: "1ns" };
}

// Default Props for our Component
WaveformWindow.defaultProps = {
  width: 1400,
  height: 600,
  left: 10,
  top: 40,
  data: getDefaultsignals({ sim_end_time: 200, nsignals: 10 }),
};
