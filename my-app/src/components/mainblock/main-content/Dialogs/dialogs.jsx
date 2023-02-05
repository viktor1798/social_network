import React from 'react';
import DialogMessage from './dialog-message/dialogMessage';
import DialogsNameUsers from './dialogs-name-user/dialogNameUser';
import dialogs from "./style/dialogs.module.css"



const Dialogs = (props) => {
    return (
        <div className={dialogs.main_content__dialog_block}>
            <h2 className={dialogs.dialog_block}>Dialogs</h2>
            <div className={dialogs.dialog_block__content_dialog}>
                <DialogsNameUsers state={props.store.getState()}/>
                <DialogMessage  store={props.store}/>
            </div>
        </div>
    )
}

export default Dialogs;