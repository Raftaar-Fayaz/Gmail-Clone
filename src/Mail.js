import React from 'react';
import './Mail.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton, Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LaunchIcon from '@material-ui/icons/Launch';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ReplyIcon from '@material-ui/icons/Reply';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ClearIcon from '@material-ui/icons/Clear';
import { selectOpenMail } from './features/mailSlice';

function Mail() {
    const history = useHistory();
    const selectedMail = useSelector(selectOpenMail);
    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={() => history.push("/")}>
                        <ArrowBackIcon/>
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon/>
                    </IconButton>
                    <IconButton>
                        <ErrorOutlineIcon/>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <EmailIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton>
                        <LabelImportantIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="mail__toolsRight">
                    <IconButton>
                        {/* <UnfoldMoreIcon /> */}
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <div className="mail__bodyHeaderLeft">
                        <h2>{selectedMail?.subject}</h2>
                        <div className="mail__bodyHeaderLeftInbox">
                            <p>Inbox | </p><ClearIcon/>
                        </div>
                    </div>
                    <div className="mail__bodyHeaderRight">
                        <IconButton>
                            <PrintIcon />
                        </IconButton>
                        <IconButton>
                            <LaunchIcon/>
                        </IconButton>
                    </div>
                </div>
                <div className="mail__bodyTitle">
                    <div className="mail__bodyTitleLeft">
                        <Avatar />
                        <p className="mail__bodyTittleLeftP">{selectedMail?.title}</p>
                    </div>
                    <div className="mail__bodyTitleRight">
                        <p className="mail__time">{selectedMail?.time}</p>
                        <IconButton>
                            <StarBorderIcon/>
                        </IconButton>
                        <IconButton>
                            <ReplyIcon/>
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon/>
                        </IconButton>
                    </div>
                </div>
                    {/* <LabelImportantIcon className="mail__important"/> */}
                <div className="mail__message"><p>{selectedMail?.description}</p></div>
            </div>
        </div>
    )
}

export default Mail;
