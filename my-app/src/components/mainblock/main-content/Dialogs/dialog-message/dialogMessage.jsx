import React from 'react';
import dialogM from "./style/dialogMessage.module.css"
import DialogMessageForm from './write-message-form/dialogMessageForm';



const DialogMessage = () => {
    return (
        <div className={dialogM.content_dialog__message}>
            <div className={dialogM.message_box}>
                <div className={dialogM.message__message_container_item}>
                    <div className={dialogM.message__user_avatar}>
                        <img src='https://i.pinimg.com/564x/24/33/0b/24330b259cfe7429541beddee43f4cea.jpg' />
                    </div>
                    <div className={dialogM.message__user_message}>
                        <p>Hello</p>
                    </div>
                </div>
                <div className={dialogM.message__message_container_item}>
                    <div className={dialogM.message__user_avatar}>
                        <img src='https://i.pinimg.com/564x/24/33/0b/24330b259cfe7429541beddee43f4cea.jpg' />
                    </div>
                    <div className={dialogM.message__user_message}>
                        <p>How ary you?</p>
                    </div>
                </div>
                <div className={dialogM.message__message_container_item}>
                    <div className={dialogM.message__user_avatar}>
                        <img src='https://i.pinimg.com/564x/24/33/0b/24330b259cfe7429541beddee43f4cea.jpg' />
                    </div>
                    <div className={dialogM.message__user_message}>
                        <p>Go Dota 2</p>
                    </div>
                </div>
            </div>
            <DialogMessageForm/>
        </div>
    )
}

export default DialogMessage;