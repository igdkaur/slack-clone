import React,{useState} from 'react'
import SidebarOption from './SidebarOption'
import "../Styles/Sidebar.css"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import CreateIcon from "@material-ui/icons/Create"
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import AppsIcon from '@material-ui/icons/Apps';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMoreIcon';
// import ExpandLessIcon from '@material-ui/icons/ExpandLessIcon';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase'




function Sidebar() {
  const[channel, useChannels] = useState([]);

useEffect(() => {
 db.collection('rooms').onSnapshot( snapshot => )
})

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
        <h2> Dummy </h2>
          <h3>
            <FiberManualRecordIcon />
            Gagan Deep Kaur
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & User groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File" browser />
      {/* <SidebarOption Icon={ExpandMoreIcon} title="Show More" /> */}
      {/* <SidebarOption Icon={ExpandLessIcon} title="CHANNELS" /> */}
      <SidebarOption Icon={AddIcon} title="Add Channel" />


      <hr />
    </div>
  )
}

export default Sidebar

