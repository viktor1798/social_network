import React from "react";
import { useForm } from "react-hook-form";

import profilepost from "./../style/profilepost.module.css";

const ProfilePostForm = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (value) => {
    props.addPost(value.message);
  };

  return (
    <div>
      <form
        className={profilepost.my_post__form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <textarea
          className={profilepost.form__textarea_my_post}
          placeholder="Write message post"
          {...register("message")}
        ></textarea>
        <button className={profilepost.form__button_my_post}>Отправить</button>
      </form>
    </div>
  );
};
export default ProfilePostForm;
