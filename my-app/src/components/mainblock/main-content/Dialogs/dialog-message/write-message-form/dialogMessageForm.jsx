import React from 'react';
import dialogMF from "./style/dialogMessageForm.module.css"



const DialogMessageForm = () => {
    return (
        <div className={dialogMF.message__form_write}>
            <textarea className={dialogMF.form_write__text_area} name="" id=""></textarea>
            <button className={dialogMF.form_write__send_message}>Отправить</button>
        </div>

    )
}

export default DialogMessageForm;