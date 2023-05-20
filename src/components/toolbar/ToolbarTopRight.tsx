import { Avatar, IconButton, Tooltip } from "@mui/material";
import LockIcon from "@mui/icons-material/LockOutlined";
import "../../styles/toolbar/ToolbarTopRight.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MeetOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";

function ToolbarTopRight() {
  return (
    <div className="toolbarTopRight">
      <Tooltip title="Open comment history (⌘+Option+Shift+A)">
        <IconButton style={{ marginRight: 8 }}>
          <CommentOutlinedIcon
            fontSize={"medium"}
            style={{ color: "#444746" }}
          />
        </IconButton>
      </Tooltip>
      <Tooltip title="Join a call here or present this tab to the call">
        <IconButton style={{ borderRadius: 21, marginRight: 10 }}>
          <MeetOutlinedIcon
            fontSize={"medium"}
            style={{ color: "#444746", fontSize: 30 }}
          />
          <ArrowDropDownIcon fontSize={"medium"} style={{ color: "#444746" }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Private to only me">
        <button className="toolbarTopRight__share">
          <LockIcon
            fontSize={"small"}
            style={{ fontSize: 18, marginRight: 8 }}
          />
          <p className="toolbarTopRight__share_text">Share</p>
        </button>
      </Tooltip>
      <Tooltip title="username@gmail.com">
        <Avatar
          style={{ cursor: "pointer" }}
          sx={{ width: 36, height: 36 }}
          alt="User avatar"
        />
      </Tooltip>
    </div>
  );
}

export default ToolbarTopRight;
