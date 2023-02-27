import React from "react";

import Posts from "./posts/posts";
import ProfilePostForm from "./profiePostForm/profilePostForm";
import profilepost from "./style/profilepost.module.css";

const ProfilePost = (props) => {
  let state = props.profilePage;

  let postItem = state.postData.map((p) => (
    <Posts key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className={profilepost.main_content__my_post}>
      <h2 className={profilepost.my_post__title}>Posts</h2>
      <ProfilePostForm addPost={props.addPost} />
      {postItem}
    </div>
  );
};



export default ProfilePost;