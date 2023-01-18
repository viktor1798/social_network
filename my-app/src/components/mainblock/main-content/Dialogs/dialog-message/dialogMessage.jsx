import React from 'react';
import Message from './message/Message';
import dialogM from "./style/dialogMessage.module.css"
import DialogMessageForm from './write-message-form/dialogMessageForm';

const DialogMessage = () => {
    return (
        <div className={dialogM.content_dialog__message}>
            <div className={dialogM.message_box}>
                <Message message="Hi"/>
                <Message message="Go dota2"/>
                <Message message="or go to run"/>
                <Message message="FY"/>
            </div>
            <DialogMessageForm />
        </div>
    )
}

export default DialogMessage;