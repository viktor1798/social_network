import React from 'react';
import messageStyle from "./style/Message.module.css"

const Message = (props) => {
    return (<div className={messageStyle.message__message_container_item}>
        <div className={messageStyle.message__user_avatar}>
            <img src='https://i.pinimg.com/564x/24/33/0b/24330b259cfe7429541beddee43f4cea.jpg' alt='avatar'/>
        </div>
        <div className={messageStyle.message__user_message}>
            <p>{props.message}</p>
        </div>
    </div>
    )
}


export default Message;