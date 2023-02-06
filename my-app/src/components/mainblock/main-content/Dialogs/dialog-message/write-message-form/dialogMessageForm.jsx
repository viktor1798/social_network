import React from 'react';
import dialogMF from "./style/dialogMessageForm.module.css"





const DialogMessageForm = (props) => {
    let newMessage = React.createRef();
    
    let sendMessage =()=>{
        props.sandingMassege();
        newMessage.current.value = '';
    }


    let newSymbolsMessage=()=>{
        let text = newMessage.current.value;
        props.newSymbl(text);
    }

    return (
        <div className={dialogMF.message__form_write}>
            <textarea className={dialogMF.form_write__text_area} name="" id="" ref={newMessage} onChange={newSymbolsMessage}></textarea>
            <button className={dialogMF.form_write__send_message}onClick={sendMessage}>Отправить</button>
        </div>

    )
}

export default DialogMessageForm;