import React from 'react';
import Dialogs from './Dialogs/dialogs';
import Profile from './Profile/profile';
import main_content from './style/maincontent.module.css';
import { Route, Routes } from 'react-router-dom'

const MainContent = (props) => {
    debugger;
    return (
       
        <div className={main_content.main_content}>
            <Routes>
                <Route path='/profile/*' element={<Profile postData={props.profilePage.postData}/>} />
                <Route path='/dialogs/*' element={<Dialogs dialogUserData={props.dialogsPage.dialogUserData} messageData={props.dialogsPage.messageData} />} />
            </Routes>
        </div>
)
}

export default MainContent;