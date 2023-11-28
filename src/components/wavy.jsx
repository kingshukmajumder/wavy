import React from 'react';
import WaveformWindow from './WaveformWindow'
import ContextMenu from './ContextMenu';
import { useContextMenu } from "react-contexify";
import { loadVCDFromFile } from './VCDReader'

const MENU_ID = "menu-id";
export default class Wavy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            waveforms: [],
        };
    }
    render() {

        return <div><WavyUI /></div>
    }

}

function loadData({ id }) {
    if (id == 'open-file') {
        loadVCDFromFile().then(parsedData => {
            console.log(parsedData);
        });
    }
}

function WavyUI(props) {
    const { show } = useContextMenu({
        id: MENU_ID,
    });
    function displayMenu(e) {
        show({
            event: e,
        });
    }

    return <div>
        <div onContextMenu={displayMenu}>
            <WaveformWindow />
            <ContextMenu menu_id={MENU_ID} onClick={loadData} />
        </div>

    </div>
}