import React from 'react';
import './Sidebar.css';
import { Button } from '@material-ui/core';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import { IconButton } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
// import Avatar from '@material-ui/core';
import { useDispatch } from "react-redux";
import { openSendMessage } from './features/mailSlice';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';


import PersonIcon from '@material-ui/icons/Person';
function Sidebar() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <div className="sidebar">
            <div className="sidebar1">
                <Button className="sidebar__compose" onClick={() => dispatch(openSendMessage())}>
                    <img className="compose__button" src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"/>
                    Compose
                </Button>
                <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
                <SidebarOption Icon={StarIcon} title="Starred" number={18}/>
                <SidebarOption Icon={ WatchLaterIcon} title="Snoozed" number={12}/>
                <SidebarOption Icon={ LabelImportantIcon} title="Snoozed" number={42}/>
                <SidebarOption Icon={SendIcon} title="Sent" number={128}/>
                <SidebarOption Icon={InsertDriveFileIcon} title="Drafts" number={23}/>
                <SidebarOption Icon={ExpandMoreIcon} title="More" />
            </div>
            <div className="sidebar2">
                <h4>Meet</h4>
                <SidebarOption Icon={VideocamIcon} title="New Meeting" />
                <SidebarOption Icon={KeyboardIcon} title="Join a meeting" />
            </div>
            <div className="sidebar3">
                <h4>Hangouts</h4>
                <div className="hangouts">
                    <div className="main">
                        <SidebarOption src={user?.photoUrl} title={user?.displayName}/>
                        <ArrowDropDownIcon className="arrowDown"/>
                    </div>
                    <div className="plusIcon">
                        <IconButton>
                            <AddIcon/>
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>

                </div>
            </div>
        </div>
    )
}

export default Sidebar
