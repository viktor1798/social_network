import React from 'react';
import description from './style/profiledescription.module.css'
import defaultPImg from '../../../../../assets/profileDefault.jpg'


const ProfileDescription = (props) => {
    let profileImg=props.profile.photos.large;
    return (
        <div className={description.main_content__profile}>
            <div className={description.profile__img}>
                <img src={profileImg != null ? profileImg : defaultPImg} alt='avatar' />
            </div>
            <div className={description.profile__description_user}>
                <h1 className={description.profile__name_user}>{props.profile.fullName}</h1>
                <div className={description.status_profile} ></div>
            </div>
        </div>
    )
}

export default ProfileDescription;