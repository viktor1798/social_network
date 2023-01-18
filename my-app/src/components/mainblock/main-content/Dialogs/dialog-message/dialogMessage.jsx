import React from 'react';
import Message from './message/Message';
import dialogM from "./style/dialogMessage.module.css"
import DialogMessageForm from './write-message-form/dialogMessageForm';

const DialogMessage = () => {

    let messageData =[
        {id:1, message:'Hi'},
        {id:2, message:'Go dota2'},
        {id:3, message:'or go to run'},
        {id:4, message:'FY'}
    ]
    return (
        <div className={dialogM.content_dialog__message}>
            <div className={dialogM.message_box}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
            </div>
            <DialogMessageForm />
        </div>
    )
}

export default DialogMessage;