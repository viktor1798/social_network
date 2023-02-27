import React from "react";
import dialogMF from "./style/dialogMessageForm.module.css";
import { useForm } from "react-hook-form";

const DialogMessageForm = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (value) => {
    console.log(value.message);
    props.sendMessage(value.message);
  };

  return (
    <div className={dialogMF.message__form_write}>
      <form
        className={dialogMF.message__form_write}
        onSubmit={handleSubmit(onSubmit)}
      >
        <textarea
          className={dialogMF.form_write__text_area}
          placeholder="Write message"
          {...register("message")}
        ></textarea>
        <button className={dialogMF.form_write__send_message}>Отправить</button>
      </form>
    </div>
  );
};


export default DialogMessageForm;