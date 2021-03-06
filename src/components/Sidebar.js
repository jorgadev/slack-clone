import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { useStateValue } from "../contexts/StateProvider";
import db from "../contexts/firebase";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();
  const [channelsExpand, setChannelsExpand] = useState(false);

  useEffect(() => {
    // Run when sidebar component loads
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Slack Clone</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & User Groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File Browser" />
      <hr />
      <SidebarOption
        Icon={channelsExpand ? ExpandLessIcon : ExpandMoreIcon}
        title="Channels"
        expand={setChannelsExpand}
        addChannelOption
      />
      <hr />
      <div
        className="sidebar__channels"
        style={{ display: channelsExpand ? "block" : "none" }}
      >
        {channels.map((channel) => (
          <SidebarOption
            key={channel.id}
            title={channel.name}
            id={channel.id}
          />
        ))}
      </div>
      <hr style={{ display: channelsExpand ? "block" : "none" }} />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
    </div>
  );
}

export default Sidebar;
