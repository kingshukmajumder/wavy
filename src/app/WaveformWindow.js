import React from 'react';
import PropTypes from 'prop-types';
import { createElement } from 'react';
function onScroll(obj) {
    return (event) => {
        obj.setState({
            scrollTop: event.currentTarget.scrollTop
        })
    }
};
export default class WaveformWindow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollTop: 0,
        }
        this.canvasRef = React.createRef();
        this.names = [];
        this.redrawn = false;
    }

    drawWaveformWindow() {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        for (let i = 0; i < this.props.wave_values.length; i++) {
            let wave = this.props.wave_values[i];
            drawBinaryWave(ctx, 0, 30 + i * 50, wave)
        }
    }

    componentDidUpdate() {
        console.log('canvas redrawn.');
        this.drawWaveformWindow();
        this.redrawn = true;
    }
    componentDidMount() {
        console.log('canvas redrawn.');
        this.drawWaveformWindow();
        this.redrawn = true;
    }

    render() {
        const style = {
            position: 'absolute',
            top: `${this.props.top}px`,
            left: `${this.props.left}px`,
            height: `${this.props.height}px`,
            width: `${this.props.width}px`,
            border: '1px solid black',
            backgroundColor: 'blue',
        }
        const wave_wndw_style = {
            position: 'absolute',
            width: `${this.props.width * 0.7}px`,
            height: `${this.props.height}px`,
            left: `${this.props.width * 0.05}px`,
            border: '1px solid black',
            overflow: 'scroll',
        }
        const canvas_style = { backgroundColor: 'black', border: '0px solid #19077a' }

        const name_wndw_style = {
            position: "absolute",
            width: `${this.props.width * 0.05}px`,
            height: `${this.props.height}px`,
            border: "1px solid black",
            overflow: "hidden"
        }

        const inner_name_wndw_style = {
            backgroundColor: "grey",
            width: `${this.props.width * 0.25}px`,
            height: "1000px",
            top: `-${this.state.scrollTop}px`,
            position: "absolute",
            border: "0px solid black"
        }




        //console.log(`scrollTop: ${this.state.scrollTop}px`)
        if (this.names.length == 0) {
            for (let i = 0; i < this.props.wave_names.length; i++) {
                const lbl_style = {
                    position: 'absolute',
                    top: `${20 + 50 * i}px`,
                    left: '10px',
                }

                const lbl = <label style={lbl_style} key={`k${i}`}> {this.props.wave_names[i]}</label >
                this.names.push(lbl)
                //       console.log(`signal: ${this.props.wave_names[i]} `)
            }
        }

        const wndw = this;
        const Names = (props) => {
            return React.memo(<div
                style={inner_name_wndw_style}>
                {this.names}
            </div>);
        }

        return <div style={style}>
            < div style={wave_wndw_style}
                onScroll={onScroll(wndw)}>
                <canvas id="wave_wndw" width="1000px" height="1000px" style={canvas_style}
                    overflow='auto' ref={this.canvasRef}>
                    Unsupported browser.
                </canvas>
            </div >

            <div style={name_wndw_style}>
                <div
                    style={inner_name_wndw_style}>
                    <NameListMemo />
                </div>
            </div>
        </div >;
    }
}

function NameList(props) {
    const inner_name_wndw_style = {
        width: `$150px`,
        height: "1000px",
    }
    return <div
        style={inner_name_wndw_style}>
        <label style={{ top: '100px' }}>cclk</label>
    </div>;
}
let NameListMemo = React.memo(NameList);

WaveformWindow.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    wave_values: PropTypes.arrayOf(PropTypes.array).isRequired,
    wave_names: PropTypes.arrayOf(PropTypes.string)
}

// Default Props for our Component 
WaveformWindow.defaultProps = {
    width: 600,
    height: 400,
    left: 100,
    top: 100,
    wave_values: [[0, 1, 0, 1], [0, 1, 1, 0]],
    wave_names: ['clk', 'rst'],
}

function drawBinaryWave(ctx, x, y, values) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    let prev = 0
    for (let i = 0; i < values.length; i++) {
        let val = values[i];
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