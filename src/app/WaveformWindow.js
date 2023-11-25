import React from 'react';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import PropTypes from 'prop-types';

//TODO: 
// Merge drawBinaryWave with drawIntegerWave. 
// Only the drawValue function should be different. 
export default class WaveformWindow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollTop: 0,
        }
        this.canvasRef = React.createRef();
        this.canvasOuterRef = React.createRef();
        this.nameRef = React.createRef();
        this.names = [];
        this.redrawn = false;
        this.onScroll = (event) => {
            console.log('onScroll called.')
            this.setState({ scrollTop: event.currentTarget.scrollTop });
        }
        this.wave_wndw_style = {
            position: 'absolute',
            width: `${this.props.width * 0.85}px`,
            height: `${this.props.height}px`,
            left: `${this.props.width * 0.15}px`,
            border: '1px solid black',
            overflow: 'auto',
            backgroundColor: 'black',
        }
        this.style = {
            position: 'absolute',
            top: `${this.props.top}px`,
            left: `${this.props.left}px`,
            height: `${this.props.height}px`,
            width: `${this.props.width}px`,
            border: '1px solid black',
            backgroundColor: 'blue',
        }

        this.name_wndw_style = {
            position: "absolute",
            width: `${this.props.width * 0.15}px`,
            height: `${this.props.height}px`,
            border: "1px solid black",
            overflow: "auto"
        }

        this.inner_name_wndw_style = {
            backgroundColor: "grey",
            width: `${this.props.width * 0.25}px`,
            height: "1000px",
            position: "absolute",
            border: "0px solid black"
        }
        this.value_lbls = [];
    }
    drawBinaryWave(ctx, x, y, values) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        let prev = 0
        for (let i = 0; i < values.length; i++) {
            let val = values[i];
            if (val > 1)
                throw new Error('Not a binary wave.');
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
        ctx.strokeStyle = 'green'
        ctx.stroke();
    }

    drawValue(ctx, val, reps, x, y) {
        y = y - 10;
        ctx.moveTo(x, y);
        ctx.lineTo(x + 3, y - 10);
        ctx.lineTo(x + 17 + reps * 20, y - 10);
        ctx.lineTo(x + (reps + 1) * 20, y);
        ctx.moveTo(x, y);
        ctx.lineTo(x + 3, y + 10);
        ctx.lineTo(x + 17 + reps * 20, y + 10);
        ctx.lineTo(x + (reps + 1) * 20, y);
        const e = document.createElement('label')
        const textwidth = 14 + reps * 20;
        e.style = `color:white;position:absolute; left:${x + 3}px; top:${y - 10}px; width:${textwidth}px;overflow:hidden; text-align:center`
        e.innerHTML = `${val.toString(2)}`;
        ctx.outerRef.current.prepend(e);
        this.value_lbls.push(e);
    }

    drawIntegerWave(ctx, x, y, values) {
        ctx.beginPath();
        for (let i = 0; i < values.length; i++) {
            let val = values[i];
            let reps = 0
            while ((i + reps + 1 < values.length) && values[i + reps + 1] == val) {
                reps += 1
            }
            this.drawValue(ctx, val, reps, x + 20 * i, y);
            i = i + reps
        }
        ctx.strokeStyle = 'green'
        ctx.stroke();
    }


    drawWaveformWindow() {
        const canvas = this.canvasRef.current;
        if (canvas == null)
            return
        console.log('canvas redrawn.');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        for (let i = 0; i < this.value_lbls.length; i++) {
            this.value_lbls[i].remove();
        }
        ctx.outerRef = this.canvasOuterRef;
        for (let i = 0; i < this.props.waves.length; i++) {
            let wave = this.props.waves[i];
            if (wave.width == 1)
                this.drawBinaryWave(ctx, 0, 30 + i * 50, wave.values)
            else
                this.drawIntegerWave(ctx, 0, 30 + i * 50, wave.values)
        }

    }

    componentDidUpdate() {
        this.drawWaveformWindow();
    }
    handleScroll(event) {
        console.log(`wheel event detected.`)
        return false
    };
    componentDidMount() {
        this.drawWaveformWindow();
    }



    render() {
        if (this.names.length == 0) {
            for (let i = 0; i < this.props.waves.length; i++) {
                const lbl_style = {
                    position: 'absolute',
                    top: `${20 + 50 * i}px`,
                    left: '10px',
                }

                const lbl = <label style={lbl_style} key={`k${i}`}> {this.props.waves[i].name}</label >
                this.names.push(lbl)
            }
        }

        return <ScrollSync><div style={this.style} >
            <ScrollSyncPane>
                < div style={this.wave_wndw_style} >
                    < Canvas canvasRef={this.canvasRef} outerRef={this.canvasOuterRef} />
                </div >
            </ScrollSyncPane>
            <ScrollSyncPane>
                <div style={this.name_wndw_style} >
                    <div
                        style={this.inner_name_wndw_style}>
                        {this.names}
                    </div>
                </div>
            </ScrollSyncPane>
        </div >
        </ScrollSync>;
    }
}

function Canvas(props) {
    console.log(`Canvas rendered.`)
    return <div ref={props.outerRef}>
        <canvas width="20000px" height="1000px"
            overflow='auto' ref={props.canvasRef}>
            Unsupported browser.
        </canvas>
    </div>
};

WaveformWindow.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    waves: PropTypes.array.isRequired,
}

function getDefaultWaves({ ncycles, nwaves }) {
    let clk = [];
    for (let i = 0; i < 2 * ncycles; i++) {
        clk.push(i % 2);
    }
    let rst = [];
    for (let i = 0; i < ncycles; i++) {
        if (4 < i % 128 && i % 128 < 10) {
            rst.push(1);
            rst.push(1);
        }
        else {
            rst.push(0);
            rst.push(0);
        }
    }
    let waves = [{ name: 'clk', values: clk, width: 1 }, { name: 'rst', values: rst, width: 1 }]
    for (let n = 0; n < nwaves; n++) {
        let wave = []
        const width = n % 5 + 1
        for (let i = 0; i < ncycles; i++) {
            const v = Math.round((2 ** width - 1) * Math.random());
            wave.push(v);
            wave.push(v);
        }
        waves.push({ name: `wave${n}`, values: wave, width: width })
    }

    return waves;
}

// Default Props for our Component 
WaveformWindow.defaultProps = {
    width: 1400,
    height: 600,
    left: 10,
    top: 40,
    waves: getDefaultWaves({ ncycles: 249 * 2, nwaves: 17 }),
}

