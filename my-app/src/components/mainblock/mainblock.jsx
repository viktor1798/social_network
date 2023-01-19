import React from 'react';
import MainContent from './main-content/maincontent';
import SideBar from './sidebar/sicdebar';
import main_block from "./style/mainblok.module.css"


const MainBlock = (props) => {
    return (
        <main className={main_block.mainblock}>
            <SideBar/>
            <MainContent postData={props.postData} dialogUserData={props.dialogUserData} messageData={props.messageData}/>
        </main>
    )
}

export default MainBlock;