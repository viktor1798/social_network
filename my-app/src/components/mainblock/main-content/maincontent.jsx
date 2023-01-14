import React from 'react';
import Dialogs from './Dialogs/dialogs';
import Profile from './Profile/profile';
import main_content from'./style/maincontent.module.css';


const MainContent = () => {
    return (

        <div className={main_content.main_content}>
           {/* <Profile/> */}
           <Dialogs/>
        </div>
    )
}

export default MainContent;