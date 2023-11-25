import { parseVCD } from './VCDParser'

function readFile(file, pos, nbytes) {
    const reader = new FileReader();
    if (pos) {
        if (nbytes == null)
            nbytes = file.size - pos - 1;
        file = file.slice(pos, pos + nbytes);
    }
    reader.readAsText(file);
    return new Promise((resolve, reject) => {
        reader.onload = (event) => {
            resolve(event.target.result);
        }
        reader.onerror = (event) => reject();
    });
}

export function loadVCDFromFile() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = '.vcd'
    return new Promise((resolve, reject) => {
        const parseAndResolve = (text) => { resolve(parseVCD(text)); };
        input.onchange = _ => {
            let file = Array.from(input.files)[0];
            readFile(file).then(parseAndResolve).catch(reject);
        }
        input.click();
    });
}