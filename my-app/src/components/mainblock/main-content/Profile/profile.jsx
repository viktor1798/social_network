import React from 'react';
import ProfileDescription from './profile-description/profileDescription';
import ProfilePost from './profile-post/profilePost';



const Profile = (props) => {
    return (
        <div className="main_content__profile-block">
            <ProfileDescription />
            <ProfilePost postData={props.postData} />
        </div>
    )
}

export default Profile;