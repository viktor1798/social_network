import React from 'react';
import posts from'./style/posts.module.css';


const Posts = (props) => {
    return (

        <div className={posts.my_post__posts}>
            <div className={posts.posts__img_profile}>
                <img src="https://i.pinimg.com/564x/24/33/0b/24330b259cfe7429541beddee43f4cea.jpg" alt="" />
            </div>
            <div className={posts.posts__text}>
                {props.message} 
                <div className={posts.posts__like}>
                    <span>{props.likesCount} Мне нравится</span>
                </div>
            </div>
        </div>

    )
}

export default Posts;