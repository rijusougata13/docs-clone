import "../../styles/editorSection/EditorToolbar.css";
import UTurnLeftIcon from "@mui/icons-material/UTurnLeft";
import SpellcheckOutlinedIcon from "@mui/icons-material/SpellcheckOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import ImagesearchRollerOutlinedIcon from "@mui/icons-material/ImagesearchRollerOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { useState } from "react";
import FormatItalicOutlinedIcon from "@mui/icons-material/FormatItalicOutlined";
import FormatUnderlinedOutlinedIcon from "@mui/icons-material/FormatUnderlinedOutlined";
import FormatColorTextOutlinedIcon from "@mui/icons-material/FormatColorTextOutlined";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { EditorToolbarProps } from "../../types/propTypes";
import { GoBold } from "react-icons/go";
import { EditorState, RichUtils } from "draft-js";

function EditorToolbar({
  toolbarOpen,
  setToolbarOpen,
  editorState,
  setEditorState,
}: EditorToolbarProps) {
  const [fontSize, setFontSize] = useState<string>("11");

  return (
    <header className="editorToolbar">
      <div className="editorToolbar__tools">
        <div className="editorToolbar__left">
          <div
            className="editorToolbar__tool"
            onClick={() => setEditorState(EditorState.undo)}
          >
            <UTurnLeftIcon
              style={{
                transform: "rotate(90deg)",
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div
            className="editorToolbar__tool"
            onClick={() => setEditorState(EditorState.redo)}
          >
            <UTurnLeftIcon
              style={{
                transform: "rotate(-90deg) rotateY(180deg)",
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div className="editorToolbar__tool" onClick={() => print()}>
            <LocalPrintshopOutlinedIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div className="editorToolbar__tool">
            <SpellcheckOutlinedIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div className="editorToolbar__tool">
            <ImagesearchRollerOutlinedIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div className="editorToolbar__tool editorToolbar__tool_multi-child">
            <p className="editorToolbar__tool_text">100%</p>
            <ArrowDropDownOutlinedIcon fontSize={"small"} />
          </div>
          <div className="editorToolbar__partition"></div>
          <div className="editorToolbar__tool editorToolbar__tool_multi-child">
            <p className="editorToolbar__tool_text">Normal text</p>
            <ArrowDropDownOutlinedIcon fontSize={"small"} />
          </div>
          <div className="editorToolbar__partition"></div>
          <div
            className="editorToolbar__tool editorToolbar__tool_multi-child"
            style={{ width: 85 }}
          >
            <p className="editorToolbar__tool_text">Arial</p>
            <ArrowDropDownOutlinedIcon fontSize={"small"} />
          </div>
          <div className="editorToolbar__partition"></div>
          <div className="editorToolbar__tool">
            <RemoveOutlinedIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <input
            type="text"
            value={fontSize}
            className="editorToolbar__fontSize"
            onChange={(e) => setFontSize(e.target.value)}
            onFocus={(e) => e.target.select()}
            onBlur={() => (fontSize === "" ? setFontSize("11") : "")}
          />
          <div className="editorToolbar__tool">
            <AddOutlinedIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div className="editorToolbar__partition"></div>
          <div
            className="editorToolbar__tool"
            onClick={() => {
              setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
              console.log(RichUtils.getCurrentBlockType(editorState));
            }}
          >
            <GoBold
              style={{
                color: "#444444",
                fontSize: 15,
              }}
            />
          </div>
          <div
            className="editorToolbar__tool"
            onClick={() => {
              setEditorState(
                RichUtils.toggleInlineStyle(editorState, "ITALIC")
              );
            }}
          >
            <FormatItalicOutlinedIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div
            className="editorToolbar__tool"
            onClick={() => {
              setEditorState(
                RichUtils.toggleInlineStyle(editorState, "UNDERLINE")
              );
            }}
          >
            <FormatUnderlinedOutlinedIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div className="editorToolbar__tool">
            <FormatColorTextOutlinedIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div className="editorToolbar__tool">
            <BorderColorIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div className="editorToolbar__partition"></div>
          <div className="editorToolbar__tool">
            <MoreVertIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
        </div>

        <div className="editorToolbar__right">
          <div className="editorToolbar__tool">
            <EditOutlinedIcon
              style={{
                color: "#444444",
                fontSize: 18,
                marginLeft: 4,
                marginRight: 7,
              }}
            />
            <ArrowDropDownOutlinedIcon fontSize={"small"} />
          </div>
          <div className="editorToolbar__partition"></div>
          <div
            className="editorToolbar__tool"
            onClick={() => setToolbarOpen(!toolbarOpen)}
          >
            {toolbarOpen ? (
              <ExpandLessOutlinedIcon
                style={{
                  color: "#444444",
                  fontSize: 18,
                }}
              />
            ) : (
              <ExpandMoreOutlinedIcon
                style={{
                  color: "#444444",
                  fontSize: 18,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default EditorToolbar;
