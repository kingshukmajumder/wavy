class Waveform {
    constructor(name, values) {
        this.name = name;
        this.values = values;
    }
}
class State {
    constructor() {
        this.waves = []
    }
    addWaveform(waveform) {
        this.waves.push(waveform);
    }
}