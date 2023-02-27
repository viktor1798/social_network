import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../../redux/authReduser";
import LoginForm from "./loginForm";

const Login = (props) => {
  
  if(props.isAuth) return <Navigate to={`/profile`}/>

  return (
    <div>
      <h1>Login</h1>
      <LoginForm {...props} login={props.login} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
 errorMessage:state.auth.errorMessage,
});

export default connect(mapStateToProps, {
  login,
})(Login);
