import React from 'react';
import './SendMail.css';
import MinimizeIcon from '@material-ui/icons/Minimize';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core'
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import LinkIcon from '@material-ui/icons/Link';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ImageIcon from '@material-ui/icons/Image';
import LockIcon from '@material-ui/icons/Lock';
import CreateIcon from '@material-ui/icons/Create';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase';
function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (formData) => {
        console.log(formData);
        db.collection('emails').add(
            {
                to: formData.to,
                subject: formData.subject,
                message: formData.message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            }
        );
        dispatch(closeSendMessage());
    };

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <div className="sendMail__headerIcons">
                    <MinimizeIcon onClick={() => dispatch(closeSendMessage())} className="sendMail__close" />
                    <AspectRatioIcon className="sendMail__close" />
                    <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMail__close" />
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="to"
                    placeholder="To"
                    type="email"
                    ref={register({ required: true })}
                    />
                    {errors.to && <p className="sendMessage__error">Mail Not Valid!!</p>}
                <input
                    name="subject"
                    placeholder="Subject"
                    type="text"
                    ref={register({ required: true })}
                    />
                    {errors.subject && (<p className="sendMessage__error">Subject Field is Required!!</p>)}
                <input
                    name="message"
                    className="sendMail__message"
                    type="text"
                    ref={register({ required: true })}
                    />
                    {errors.message && (<p className="sendMessage__error">This field cannot leave to be Empty!!</p>)}
                <div className="sendMail__options">
                    <div className="sendMail__option1">
                        <Button className="sendMail__send" variant="contained" color="primary" type="submit">Send</Button>
                        <div className="sendMail__emoji">
                            <FormatColorTextIcon />
                            <AttachFileIcon />
                            <LinkIcon />
                            <SentimentVerySatisfiedIcon />
                            <SaveAltIcon />
                            <ImageIcon />
                            <LockIcon />
                            <CreateIcon />
                        </div>
                    </div>
                    <div className="sendMail__option2">
                        <MoreVertIcon className="sendMail__emoji2"/>
                        <DeleteIcon className="sendMail__emoji2"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SendMail
