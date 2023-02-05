import React from 'react';
import { newSymbolsMessageActionCreater, sendMessageActionCreater } from '../../../../../../redux/dialogReduser';
import DialogMessageForm from './dialogMessageForm';





const DialogMessageFormContainer = (props) => {
    let newMessage = React.createRef();
    
    let sendMessage =()=>{
        props.dispatch(sendMessageActionCreater());
        newMessage.current.value = '';
    }


    let newSymbolsMessage=()=>{
        let text = newMessage.current.value;
        props.dispatch(newSymbolsMessageActionCreater(text));
    }

    return (
        <DialogMessageForm />
    )
}

export default DialogMessageFormContainer;