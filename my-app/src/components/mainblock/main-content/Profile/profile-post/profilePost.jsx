import React from 'react';
import Posts from './posts/posts';
import profilepost from "./style/profilepost.module.css"



const ProfilePost = () => {
    let postData =[
        {id:1, message:'Привет всем', likesCount:20},
        {id:2, message:'Кто,Я?', likesCount:22}
    ]
    let postItem = postData.map(p=><Posts message ={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={profilepost.main_content__my_post}>
            <h2 className={profilepost.my_post__title}>Posts</h2>
            <div className={profilepost.my_post__form}>
              <textarea className={profilepost.form__textarea_my_post} name="" id="" cols="30" rows="10"></textarea>
              <button className={profilepost.form__button_my_post}>Запостить</button> 
            </div>
        {postItem}
        </div>
    )
}

export default ProfilePost;