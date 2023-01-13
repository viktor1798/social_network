import React from 'react';
import side_bar from "./style/sidebar.module.css"

const SideBar = () => {
    return (

        <aside className={side_bar.sidebar}>
            <nav className={side_bar.sidebar__nav}>
                <div className={side_bar.idebar__nav__block_item}>
                    <a className={side_bar.sidebar__nav_item} href="">Profile</a>
                </div>
                <div className={side_bar.idebar__nav__block_item}>
                    <a className={side_bar.sidebar__nav_item} href="">Massege</a>
                </div>
                <div className={side_bar.idebar__nav__block_item}>
                    <a className={side_bar.sidebar__nav_item} href="">Friends</a>
                </div>
            </nav>
        </aside>
    )
}

export default SideBar;