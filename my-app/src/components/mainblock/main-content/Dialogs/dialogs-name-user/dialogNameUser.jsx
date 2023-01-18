import React from 'react';
import dialogNU from "./style/dialogNameUser.module.css"
import DialogItem from './dialog-item/dialogItem';


const DialogsNameUsers = () => {
    let dialogData =[
        {id:1, name:'Victor'},
        {id:2, name:'Lesha'},
        {id:3, name:'Kolya'},
        {id:4, name:'Evdokia'}
    ]
    
    return (
        <div className={dialogNU.content_dialog__name_users}>
            <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
            <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
            <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
            <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
        </div>


    )
}

export default DialogsNameUsers;