import React from 'react';
import dialogNU from "./style/dialogNameUser.module.css"
import {NavLink} from 'react-router-dom'


const DialogsNameUsers = () => {
    let activeStyle = {
        color: "gray",
    };

    return (
        <div className={dialogNU.content_dialog__name_users}>
            <div className={dialogNU.name_users__item}>
            <NavLink to="/dialogs/1" style={({ isActive }) => isActive ? activeStyle : undefined}>Victor</NavLink>
                </div>
            <div className={dialogNU.name_users__item}>
              <NavLink to="/dialogs/2" style={({ isActive }) => isActive ? activeStyle : undefined}>Oleg</NavLink>
                </div>
            <div className={dialogNU.name_users__item}>
                <NavLink to="/dialogs/3" style={({ isActive }) => isActive ? activeStyle : undefined}>Sasha</NavLink>
                </div>
            <div className={dialogNU.name_users__item}>
                <NavLink to="/dialogs/4" style={({ isActive }) => isActive ? activeStyle : undefined}>Marina</NavLink>
            </div>
        </div>


    )
}

export default DialogsNameUsers;