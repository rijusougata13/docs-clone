import "../styles/Toolbar.css";
import { ToolbarProps } from "../types/propTypes";
import ToolbarTopLeft from "./toolbar/ToolbarTopLeft";
import ToolbarTopRight from "./toolbar/ToolbarTopRight";

function Toolbar({ toolbarOpen }: ToolbarProps) {
  return (
    <header
      className="toolbar"
      style={{ display: toolbarOpen ? "flex" : "none" }}
    >
      <ToolbarTopLeft />
      <ToolbarTopRight />
    </header>
  );
}

export default Toolbar;
