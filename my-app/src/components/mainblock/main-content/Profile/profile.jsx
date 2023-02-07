import React from 'react';
import ProfileDescription from './profile-description/profileDescription';
import ProfilePostContainer from './profile-post/profilePostContainer';



const Profile = (props) => {
    return (
        <div className="main_content__profile-block">
            <ProfileDescription />
            <ProfilePostContainer />
        </div>
    )
}

export default Profile;