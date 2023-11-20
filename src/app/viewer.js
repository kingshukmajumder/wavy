function onScroll(obj, state) {
    nameWndw = document.getElementById(state.nameWndwID)
    nameWndw.style.top = `${-obj.scrollTop}px`
}

function drawNameWindow(id, state) {
    const wndw = document.getElementById(id);
    wndw.replaceChildren();
    for (let i = 0; i < state.waves.length; i++) {
        wave = state.waves[i];
        lbl = document.createElement('label')
        lbl.innerHTML = wave.name
        lbl.style = `position: absolute; top: ${10 + 50 * i}px; left: 10px;`
        wndw.appendChild(lbl)
    }
}

function drawWaveformWindow(id, state) {
    const c = document.getElementById(id);
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height)
    for (let i = 0; i < state.waves.length; i++) {
        wave = state.waves[i];
        drawBinaryWave(ctx, 0, 30 + i * 50, wave.values)
    }
}

function drawBinaryWave(ctx, x, y, values) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    prev = 0
    for (let i = 0; i < values.length; i++) {
        val = values[i];
        if (prev == 1 && val == 0) {
            y = y + 20;
            ctx.lineTo(x, y);
        } else if (prev == 0 && val == 1) {
            y = y - 20;
            ctx.lineTo(x, y)
        }
        x += 20
        ctx.lineTo(x, y);
        prev = val
    }
    ctx.strokeStyle = '#2eb82e'
    ctx.stroke();
}
function parseWaveform(text, state) {
    json = JSON.parse(text)
    state.clear();
    for (let i = 0; i < json.waves.length; i++) {
        wav = json.waves[i];
        wave = new Waveform(wav.name, wav.values);
        state.addWaveform(wave);
    }
}

function loadVCDFromURL(url, state) {
    document.getElementById('url_error').hidden = true;
    fetch(url.value)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(text => {
            parseWaveform(text, state)
            loadWaveform(state);
        })
        .catch(error => {
            document.getElementById('url_error').hidden = false;
            console.error(`Bad URL:${url.value}\n${error}`);
        });
}
function loadVCDFromFile(input, state) {
    const reader = new FileReader();
    reader.readAsText(input.files[0]);
    reader.onload = (event) => {
        console.log(`file ${input.files[0].name} loaded.`)
        let text = event.target.result;
        parseWaveform(text, state)
        loadWaveform(state);
    };
}
function loadWaveform(state) {
    //state.addWaveform(new Waveform("wave1", [1, 0, 1, 0, 1, 0]))
    //state.addWaveform(new Waveform("wave2", [1, 0, 1, 1, 1, 0]))
    //state.addWaveform(new Waveform("wave3", [0, 1, 1, 0, 1, 0]))
    //state.addWaveform(new Waveform("wave4", [0, 1, 1, 0, 1, 1]))
    drawWaveformWindow(state.waveWndwID, state)
    drawNameWindow(state.nameWndwID, state)
}



