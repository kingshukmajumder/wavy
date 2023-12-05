import React from "react";
import WaveformWindow from "./WaveformWindow";
import ContextMenu from "./ContextMenu";
import { useContextMenu } from "react-contexify";
import { openFilePicker } from "./FileReader";
import { getVCDObject } from "./VCDParser";

const MENU_ID = "menu-id";
export default class Wavy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waveforms: [],
    };
  }
  render() {
    return (
      <div>
        <WavyUI />
      </div>
    );
  }
}

function WavyUI(props) {
  const { show } = useContextMenu({
    id: MENU_ID,
  });

  let [data, setData] = React.useState(null);

  function displayMenu(e) {
    show({
      event: e,
    });
  }

  function loadData({ id }) {
    if (id == "open-file") {
      openFilePicker(".vcd").then((file) => setData(getVCDObject(file)));
    }
  }

  return (
    <div>
      <div onContextMenu={displayMenu}>
        <WaveformWindow data={data} />
        <ContextMenu menu_id={MENU_ID} onClick={loadData} />
      </div>
    </div>
  );
}
