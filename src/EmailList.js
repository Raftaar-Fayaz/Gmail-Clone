import React, { useEffect, useState } from 'react';
import './EmailList.css';
import { Checkbox, IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import Section from "./Section";
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';
import LocalOfferSharpIcon from '@material-ui/icons/LocalOfferSharp';
import RefreshIcon from '@material-ui/icons/Refresh';
import EmailRow from './EmailRow';
import { db } from './firebase';
function EmailList() {
    const [emails, setEmails] = useState([]);
    useEffect(() => {
            db.collection('emails').orderBy('timestamp', 'desc').onSnapshot(snapshot => setEmails(snapshot.docs.map(doc => ({
                id: doc.id,
                data:doc.data(),
                }))
            )
        );
    }, [])

    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={InboxIcon} title="Primary" color="red" selected />
                <Section Icon={PeopleAltSharpIcon} title="Social" color="#1A73E8" />
                <Section Icon={LocalOfferSharpIcon} title="Promotions" color="green" />
            </div>
            <div className="emailList__list">
                {emails.map(({id, data: { to, subject, message, timestamp}}) => (
                    <EmailRow
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                ))}
                <EmailRow title="Twitch"
                          subject="This Is My New Page!!"
                          description="This IS Just A Test Not a Real Mail"
                          time="10:00PM"
                />
                <EmailRow title="Twitch"
                          subject="This Is My New Page!!"
                          description="This IS Just A Test Not a Real Mail"
                          time="10:00PM"
                />
                <EmailRow title="Twitch"
                          subject="This Is My New Page!!"
                          description="This IS Just A Test Not a Real Mail"
                          time="10:00PM"
                />
                <EmailRow title="Twitch"
                          subject="This Is My New Page!!"
                          description="This IS Just A Test Not a Real Mail"
                          time="10:00PM"
                />
                <EmailRow title="Twitch"
                          subject="This Is My New Page!!"
                          description="This IS Just A Test Not a Real Mail"
                          time="10:00PM"
                />
                <EmailRow title="Twitch"
                          subject="This Is My New Page!!"
                          description="This IS Just A Test Not a Real Mail"
                          time="10:00PM"
                />
                <EmailRow title="Twitch"
                          subject="This Is My New Page!!"
                          description="This IS Just A Test Not a Real Mail"
                          time="10:00PM"
                />
                <EmailRow title="Twitch"
                          subject="This Is My New Page!!"
                          description="This IS Just A Test Not a Real Mail"
                          time="10:00PM"
                />
                <EmailRow title="Twitch"
                          subject="This Is My New Page!!"
                          description="This IS Just A Test Not a Real Mail"
                          time="10:00PM"
                />
                <EmailRow title="Twitch"
                          subject="This Is My New Page!!"
                          description="This IS Just A Test Not a Real Mail"
                          time="10:00PM"
                />
                <EmailRow title="Twitch"
                          subject="This Is My New Page!!"
                          description="This IS Just A Test Not a Real Mail"
                          time="10:00PM"
                />
                <EmailRow title="Twitch"
                          subject="This Is My New Page!!"
                          description="This IS Just A Test Not a Real Mail"
                          time="10:00PM"
                />
            </div>
        </div>
    )
};
export default EmailList;
