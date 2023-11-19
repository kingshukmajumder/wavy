function onScroll(obj, id) {
    e = document.getElementById(id)
    e.style.top = `${400 - obj.scrollTop}px`
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
    ctx.stroke();
}



function drawWaveformWindow(id) {
    const c = document.getElementById(id);
    const ctx = c.getContext("2d");
    values = []
    for (let i = 0; i < 100; i++) {
        values.push(i % 2)
    }
    for (let i = 0; i < 15; i++) {
        drawBinaryWave(ctx, 0, 20 + i * 50, values)
    }
}

