import React from 'react';
import MainContent from './main-content/maincontent';
import SideBar from './sidebar/sicdebar';
import main_block from "./style/mainblok.module.css"


const MainBlock = (props) => {
    return (
        <main className={main_block.mainblock}>
            <SideBar/>
            <MainContent profilePage={props.state.profilePage} dialogsPage={props.state.dialogsPage} />
        </main>
    )
}

export default MainBlock;