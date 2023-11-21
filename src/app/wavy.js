import React from 'react';
import WaveformWindow from './WaveformWindow.js'
export default class Wavy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            waveforms: [],
            wave_file: null
        };
    }
    render() {
        return <div>
            <WaveformWindow />
        </div>
    }
}
