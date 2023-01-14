import React from 'react';
import ProfileDescription from './profile-description/profileDescription';
import ProfilePost from './profile-post/profilePost';



const Profile = () => {
    return (
        <div className="main_content__profile-block">
            <ProfileDescription />
            <ProfilePost />
        </div>
    )
}

export default Profile;