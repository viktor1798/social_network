import React from 'react';
import DialogMessage from './dialog-message/dialogMessage';
import DialogsNameUsers from './dialogs-name-user/dialogNameUser';
import dialogs from "./style/dialogs.module.css"



const Dialogs = () => {
    return (
        <div className={dialogs.main_content__dialog_block}>
            <h2 className={dialogs.dialog_block}>Dialogs</h2>
            <div className={dialogs.dialog_block__content_dialog}>
                <DialogsNameUsers/>
                <DialogMessage/>
            </div>
        </div>
    )
}

export default Dialogs;