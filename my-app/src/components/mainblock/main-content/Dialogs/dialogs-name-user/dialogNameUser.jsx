import React from 'react';
import dialogNU from "./style/dialogNameUser.module.css"
import DialogItem from './dialog-item/dialogItem';


const DialogsNameUsers = () => {
    
    return (
        <div className={dialogNU.content_dialog__name_users}>
            <DialogItem name="Victor" id="1"/>
            <DialogItem name="Lesha" id="2"/>
            <DialogItem name="Kolya" id="3"/>
            <DialogItem name="Evdokia" id="4"/>
        </div>


    )
}

export default DialogsNameUsers;