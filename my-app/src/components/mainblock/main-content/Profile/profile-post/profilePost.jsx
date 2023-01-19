import React from 'react';
import Posts from './posts/posts';
import profilepost from "./style/profilepost.module.css"



const ProfilePost = (props) => {
    let postItem = props.postData.map(p=><Posts message ={p.message} likesCount={p.likesCount}/>);
    let newPost = React.createRef();

    let addingPost =()=>{
        debugger;
        let text = newPost.current.value;

        props.addPost(text);
    }

    return (
        <div className={profilepost.main_content__my_post}>
            <h2 className={profilepost.my_post__title}>Posts</h2>
            <div className={profilepost.my_post__form}>
              <textarea className={profilepost.form__textarea_my_post} ref={newPost}></textarea>
              <button className={profilepost.form__button_my_post} onClick={addingPost}>Запостить</button> 
            </div>
        {postItem}
        </div>
    )
}

export default ProfilePost;