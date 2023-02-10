import React from 'react';
import Dialogs from './Dialogs/dialogs';
import Profile from './Profile/profile';
import main_content from './style/maincontent.module.css';
import { Route, Routes } from 'react-router-dom'
import UsersContainer from './Users/usersContainer';

const MainContent = () => {
    return (
       
        <div className={main_content.main_content}>
            <Routes>
                <Route path='/profile/*' element={<Profile />} />
                <Route path='/dialogs/*' element={<Dialogs />} />
                <Route path='/users/*' element={<UsersContainer />} />
            </Routes>
        </div>
)
}

export default MainContent;