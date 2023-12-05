import {
  Menu,
  Item,
  Separator,
  Submenu,
  useContextMenu,
} from "react-contexify";
import "react-contexify/dist/ReactContexify.css";

const handleItemClick = ({ id, event, props }) => {
  console.log("clicked: ", id);
};

export default function ContextMenu(props) {
  return (
    <Menu id={props.menu_id}>
      <Item id="open-file" onClick={props.onClick}>
        Open File
      </Item>
      <Item id="paste-url" onClick={props.onClick}>
        Paste URL
      </Item>
    </Menu>
  );
}
