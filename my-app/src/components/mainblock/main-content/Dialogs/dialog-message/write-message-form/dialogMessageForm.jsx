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
      {/* 
      <textarea
        className={dialogMF.form_write__text_area}
        name=""
        id=""
        ref={newMessage}
        onChange={newSymbols}
      ></textarea>
      <button
        className={dialogMF.form_write__send_message}
        onClick={sendingMessage}
      >
        Отправить
      </button> */}
    </div>
  );
};
// export default function App() {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const onSubmit = data => console.log(data);
//     console.log(errors);

//     return (
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input type="textarea" placeholder="message" {...register("message", {required: true, maxLength: 150})} />

//         <input type="submit" />
//       </form>
//     );
//   }

export default DialogMessageForm;
