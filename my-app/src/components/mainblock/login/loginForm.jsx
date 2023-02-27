import React from "react";
import { useForm } from "react-hook-form";

const LoginForm=(props)=>{
  const {
    register,
//    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)

  };

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            id=""
          />
          {props.errorMessage.length>0 && <div>{props.errorMessage}</div>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            id=""
          />
          {props.errorMessage.length>0 && <div>{props.errorMessage}</div>}
        </div>
        <div>
          <span>
            <input
              type="checkbox"
              {...register("rememberMe")}
              id=""
            />
            Запомнить меня
          </span>
        </div>
        <div>
          <input type="submit" value="Войти" />
        </div>
      </form>
  )
}
export default LoginForm;