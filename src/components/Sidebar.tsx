import "../styles/Sidebar.css";
import CalendarIcon from "../assets/images/calendar.png";
import KeepIcon from "../assets/images/keep.png";
import TasksIcon from "../assets/images/tasks.png";
import ContactsIcon from "../assets/images/contacts.png";
import MapsIcon from "../assets/images/maps.png";
import { IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";

interface AppsType {
  icon: string;
  title: string;
  link?: string;
}

const apps: AppsType[] = [
  {
    icon: CalendarIcon,
    title: "Calendar",
    link:"https://calendar.google.com/calendar/u/0/r",
  },
  {
    icon: KeepIcon,
    title: "Keep",
    link:"https://keep.google.com/u/0/",

  },
  {
    icon: TasksIcon,
    title: "Tasks",
    link:"https://play.google.com/store/apps/details?id=com.google.android.apps.tasks&hl=en&gl=US",

  },
  {
    icon: ContactsIcon,
    title: "Contacts",
    link:"https://contacts.google.com/",

  },
  {
    icon: MapsIcon,
    title: "Maps",
    link:"https://maps.google.com/",

  },
];

function Sidebar() {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <aside className="sidebar" style={{ width: open ? 58.5 : 0 }}>
      {apps.map((app: AppsType) => (
        <div className="sidebar__icon" style={{ width: open ? 36 : 0 }}>
          <IconButton>
            <Tooltip title={app.title} onClick={()=>window.open(app.link)}>
              <img src={app.icon} alt={app.title} />
            </Tooltip>
          </IconButton>
        </div>
      ))}
      <div className="sidebar__divider" style={{ width: open ? 20 : 0 }}></div>
      {open ? (
        <IconButton>
          <Tooltip title={"Get Add-ons"}>
            <AddIcon style={{ color: "black" }} />
          </Tooltip>
        </IconButton>
      ) : (
        <></>
      )}
      <div
        className={`${"sidebar__toggle"}${
          !open ? " sidebar__toggle__close" : ""
        }`}
        style={{
          backgroundColor: open ? "#f8fbfd" : "white",
          boxShadow: !open ? "1px 1px 2px 1px lightgrey" : "none",
          right: open ? 0 : -20,
        }}
      >
        <Tooltip title={`${open ? "Show" : "Hide"} side panel`}>
          <IconButton onClick={() => setOpen(!open)}>
            {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Tooltip>
      </div>
    </aside>
  );
}

export default Sidebar;
