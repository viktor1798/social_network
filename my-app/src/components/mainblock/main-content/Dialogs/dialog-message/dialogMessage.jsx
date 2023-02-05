import React from 'react';
import Message from './message/Message';
import dialogM from "./style/dialogMessage.module.css"
import DialogMessageFormContainer from './write-message-form/dialogMessageFormContainer';

const DialogMessage = (props) => {
    let messageItem = props.messageData.map(m => <Message key={m.id} message={m.message} />)
    return (
        <div className={dialogM.content_dialog__message}>
            <div className={dialogM.message_box} >
                {messageItem}
            </div>
            <DialogMessageFormContainer dispatch={props.dispatch}/>
        </div>
    )
}

export default DialogMessage; 