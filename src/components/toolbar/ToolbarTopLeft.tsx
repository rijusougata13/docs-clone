import { IconButton, Tooltip } from "@mui/material";
import "../../styles/toolbar/ToolbarTopLeft.css";
import logo from "../../assets/images/logo.png";
import UnStar from "@mui/icons-material/GradeOutlined";
import { createRef, useEffect, useState } from "react";

const defaultTitle = "Untitled document";
const toolBarOptions = [
  "File",
  "Edit",
  "View",
  "Insert",
  "Format",
  "Tools",
  "Extensions",
  "Help",
];

function ToolbarTopLeft() {
  const spanRef = createRef<HTMLSpanElement>();
  const [title, setTitle] = useState<string>(defaultTitle);
  const [width, setWidth] = useState<number | undefined>(
    spanRef.current?.offsetWidth
  );

  useEffect(() => {
    setWidth(title === defaultTitle ? 156 : spanRef.current?.offsetWidth);
  }, [title]);

  return (
    <section className="toolbarTop__left">
      <div className="toolbarTop__logo">
        <Tooltip title={"Docs home"}>
          <img src={logo} alt="logo" />
        </Tooltip>
      </div>
      <div className="toolbarTop__title_and_tools">
        <div className="toolbarTop__title">
          <span ref={spanRef} className="hide">
            {title}
          </span>
          <Tooltip title={"Rename"}>
            <input
              id="title"
              type="text"
              name="title"
              value={title}
              style={{ width }}
              onFocus={(e) => e.target.select()}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={(_) => (title === "" ? setTitle(defaultTitle) : "")}
            />
          </Tooltip>
          <IconButton style={{ padding: 4 }}>
            <Tooltip title={"Star"}>
              <UnStar fontSize={"small"} />
            </Tooltip>
          </IconButton>
        </div>
        <div className="toolbarTop__tools">
          {toolBarOptions.map((toolBarOption) => (
            <div className="toolbarTop__tool">{toolBarOption}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToolbarTopLeft;
