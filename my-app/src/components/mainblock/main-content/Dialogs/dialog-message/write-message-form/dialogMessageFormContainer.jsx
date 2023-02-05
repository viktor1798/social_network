import React from 'react';
import { newSymbolsMessageActionCreater, sendMessageActionCreater } from '../../../../../../redux/dialogReduser';
import DialogMessageForm from './dialogMessageForm';





const DialogMessageFormContainer = (props) => {

    let state = props.store.getState();
    
    let sendMessage =()=>{
        props.store.dispatch(sendMessageActionCreater());
    }


    let newSymbolsMessage=(text)=>{
        props.store.dispatch(newSymbolsMessageActionCreater(text));
    }

    return (
        <DialogMessageForm sandingMassege={sendMessage} newSymbl={newSymbolsMessage} state={state}/>
    )
}

export default DialogMessageFormContainer;