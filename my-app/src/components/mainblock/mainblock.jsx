import React from 'react';
import MainContent from './main-content/maincontent';
import SideBar from './sidebar/sicdebar';
import main_block from "./style/mainblok.module.css"


const MainBlock = (props) => {
    return (
        <main className={main_block.mainblock}>
            <SideBar/>
            <MainContent 
                store={props.store} 
            />
        </main>
    )
}

export default MainBlock;