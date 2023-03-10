import React from 'react';
import DialogMessageContainer from './dialog-message/dialogMessageContainer';
import DialogsNameUsersContainer from './dialogs-name-user/dialogNameUserContainer';
import dialogs from "./style/dialogs.module.css"



const Dialogs = (props) => {
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