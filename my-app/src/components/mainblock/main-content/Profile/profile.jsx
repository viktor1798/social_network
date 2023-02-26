import React from 'react';
import ProfileDescription from './profile-description/profileDescription';
import ProfilePostContainer from './profile-post/profilePostContainer';
import Preloader from "../../../common/preloader";



const Profile = (props) => {
    if(!props.profile){
        return <Preloader/>
      } 
    return (
        <div className="main_content__profile-block">
            <ProfileDescription profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <ProfilePostContainer />
        </div>
    )
}

export default Profile;