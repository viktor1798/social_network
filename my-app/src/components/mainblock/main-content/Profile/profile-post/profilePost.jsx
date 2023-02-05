import React from 'react';
import { addingPostActionCreater,newSymbolsPostActionCreater } from '../../../../../redux/profileReduser';

import Posts from './posts/posts';
import profilepost from "./style/profilepost.module.css"



const ProfilePost = (props) => {
    let postItem = props.postData.map(p=><Posts key={p.id} message ={p.message} likesCount={p.likesCount}/>);
    let newPost = React.createRef();

    let addingPost =()=>{
        props.dispatch(addingPostActionCreater());
        newPost.current.value = '';
    }
    
    let newSymbols=()=>{
        let text = newPost.current.value;
        props.dispatch(newSymbolsPostActionCreater(text));
    }
    return (
        <div className={profilepost.main_content__my_post} >
            <h2 className={profilepost.my_post__title}>Posts</h2>
            <div className={profilepost.my_post__form}>
              <textarea className={profilepost.form__textarea_my_post} ref={newPost} onChange={newSymbols}/>
              <button className={profilepost.form__button_my_post} onClick={addingPost}>Запостить</button> 
            </div>
           {postItem}
        </div>
    )
}

export default ProfilePost;