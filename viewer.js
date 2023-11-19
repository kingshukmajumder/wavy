function onScroll(obj, id) {
    e = document.getElementById(id)
    e.style.top = `${-obj.scrollTop}px`
}

function drawNameWindow(id, state) {
    const wndw = document.getElementById(id);
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

function loadWaveform(wave_wndw_id, name_wndw_id, state) {
    state.addWaveform(new Waveform("wave1", [1, 0, 1, 0, 1, 0]))
    state.addWaveform(new Waveform("wave2", [1, 0, 1, 1, 1, 0]))
    state.addWaveform(new Waveform("wave3", [0, 1, 1, 0, 1, 0]))
    state.addWaveform(new Waveform("wave4", [0, 1, 1, 0, 1, 1]))
    drawWaveformWindow(wave_wndw_id, state)
    drawNameWindow(name_wndw_id, state)
}



