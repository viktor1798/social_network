import React from 'react';
import Message from './message/Message';
import dialogM from "./style/dialogMessage.module.css"
import DialogMessageForm from './write-message-form/dialogMessageForm';

const DialogMessage = () => {

    let messageData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Go dota2' },
        { id: 3, message: 'or go to run' },
        { id: 4, message: 'FY' }
    ]
    let messageItem = messageData.map(m => <Message message={m.message} />)
    return (
        <div className={dialogM.content_dialog__message}>
            <div className={dialogM.message_box}>
                {messageItem}
            </div>
            <DialogMessageForm />
        </div>
    )
}

export default DialogMessage;