import React from 'react';
import side_bar from "./style/sidebar.module.css"
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    // стиль для навлинка
    let activeStyle = {
        color: "gray",
    };


    return (

        <aside className={side_bar.sidebar}>
            <nav className={side_bar.sidebar__nav}>
                <div className={side_bar.sidebar__nav_item}>
                    <NavLink to="/profile/" style={({ isActive }) => isActive ? activeStyle : undefined}>Profile</NavLink>
                </div>
                <div className={side_bar.sidebar__nav_item}>
                    <NavLink to="/dialogs/" style={({ isActive }) => isActive ? activeStyle : undefined}>Massege</NavLink>
                </div>
                <div className={side_bar.sidebar__nav_item}>
                    <NavLink to="/friends" style={({ isActive }) => isActive ? activeStyle : undefined}>Friends</NavLink>

                </div>
            </nav>
        </aside>
    )
}

export default SideBar;