import React from 'react';
import dialogI from "./style/dialogItem.module.css"
import { NavLink } from 'react-router-dom'


const DialogItem = (props) => {
    let activeStyle = {
        color: "gray",
    };

    return (

        <div className={dialogI.name_users__item}>
            <NavLink to={`/dialogs/${props.id}`} style={({ isActive }) => isActive ? activeStyle : undefined}>{props.name}</NavLink>
        </div>

    )
}

export default DialogItem;