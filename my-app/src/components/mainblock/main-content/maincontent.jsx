import React from 'react';
import main_content from './style/maincontent.module.css';
import { Route, Routes } from 'react-router-dom'
import UsersContainer from './Users/usersContainer';
import ProfileContainer from './Profile/profileContainer';
import DialogsContainer from './Dialogs/dialogsContainer';
import Login from '../login/login';

const MainContent = () => {
    return (
       
        <div className={main_content.main_content}>
            <Routes>
                <Route path='/profile/:userId?' element={<ProfileContainer/>} />
                <Route path='/dialogs/*' element={<DialogsContainer/>} />
                <Route path='/users/*' element={<UsersContainer />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
)
}

export default MainContent;