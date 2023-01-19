import React from 'react';
import Message from './message/Message';
import dialogM from "./style/dialogMessage.module.css"
import DialogMessageForm from './write-message-form/dialogMessageForm';

const DialogMessage = (props) => {
    let messageItem = props.messageData.map(m => <Message message={m.message} />)
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