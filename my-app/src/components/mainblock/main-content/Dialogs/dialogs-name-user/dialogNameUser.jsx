import React from 'react';
import dialogNU from "./style/dialogNameUser.module.css"
import DialogItem from './dialog-item/dialogItem';


const DialogsNameUsers = (props) => {
   
    let dialogItem = props.dialogUserData.map(d=><DialogItem key={d.id} name={d.name} id={d.id}/>)

    return (
        <div className={dialogNU.content_dialog__name_users} >
            {dialogItem}
        </div>


    )
}

export default DialogsNameUsers;