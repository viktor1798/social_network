import React from 'react';
import dialogMF from "./style/dialogMessageForm.module.css"





const DialogMessageForm = (props) => {
    let newMessage = React.createRef();
    
    let sendingMessage =()=>{
        props.sendMessage();
        newMessage.current.value = '';
    }


    let newSymbols=()=>{
        let text = newMessage.current.value;
        props.newSymbolsMessage(text);
    }

    return (
        <div className={dialogMF.message__form_write}>
            <textarea className={dialogMF.form_write__text_area} name="" id="" ref={newMessage} onChange={newSymbols}></textarea>
            <button className={dialogMF.form_write__send_message}onClick={sendingMessage}>Отправить</button>
        </div>

    )
}

export default DialogMessageForm;