import React from 'react';
import { Navigate } from 'react-router-dom';
import DialogMessageContainer from './dialog-message/dialogMessageContainer';
import DialogsNameUsersContainer from './dialogs-name-user/dialogNameUserContainer';
import dialogs from "./style/dialogs.module.css"



const Dialogs = (props) => {
    if(!props.isAuth) return <Navigate to='/login'/>
    return (
        <div className={dialogs.main_content__dialog_block}>
            <h2 className={dialogs.dialog_block}>Dialogs</h2>
            <div className={dialogs.dialog_block__content_dialog}>
                <DialogsNameUsersContainer/>
                <DialogMessageContainer />
            </div>
        </div>
    )
}

export default Dialogs;