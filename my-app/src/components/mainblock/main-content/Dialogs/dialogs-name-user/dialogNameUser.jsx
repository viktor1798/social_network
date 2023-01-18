import React from 'react';
import dialogNU from "./style/dialogNameUser.module.css"
import DialogItem from './dialog-item/dialogItem';


const DialogsNameUsers = () => {
    let dialogUserData =[
        {id:1, name:'Victor'},
        {id:2, name:'Lesha'},
        {id:3, name:'Kolya'},
        {id:4, name:'Evdokia'}
    ]
    
    let dialogItem = dialogUserData.map(d=><DialogItem name={d.name} id={d.id}/>)

    return (
        <div className={dialogNU.content_dialog__name_users}>
            {dialogItem}
            
        </div>


    )
}

export default DialogsNameUsers;