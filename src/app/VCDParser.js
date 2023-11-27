function splitAt(text, token) {
    const pos = text.search(token);
    const before = text.slice(0, pos);
    const after = text.slice(pos + token.length);
    return { before, after };
}

function parseElement(key, text) {
    if (!text.startsWith('$' + key))
        throw `Expected string to start with '${key}':\n ${text}`;

    text = text.slice(key.length);
    const pos = text.search('$');
    if (pos < 0)
        throw `Parsing error. Could not find match $end. Text:\n${text}`
    const next_text = text.slice(pos);

    if (next_text.startsWith('$end'))
        return { parseResult: { [key]: text.slice(0, pos) }, remaining: next_text.slice(4) };

    text = next_text;


}
function parseHeader(text) {
    header = {}
    nextpos = text.search('$');
    while (nextpos >= 0) {
        text = text.slice(nextpos);
        if (text.startsWith('$date')) {
            header.date, text = parseDate(text);
        }
    }
    return header;
}
export function parseVCD(text) {
    text = text.trimStart();

}