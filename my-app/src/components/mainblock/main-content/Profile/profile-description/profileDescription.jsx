import React from 'react';
import description from './style/profiledescription.module.css'


const ProfileDescription = () => {
    return (
        <div className={description.main_content__profile}>
            <div className={description.profile__img}>
                <img src="https://i.pinimg.com/564x/24/33/0b/24330b259cfe7429541beddee43f4cea.jpg" alt='avatar' />
            </div>
            <div className={description.profile__description_user}>
                <h1 className={description.profile__name_user}>Sictor Vemashka</h1>
            </div>
        </div>
    )
}

export default ProfileDescription;