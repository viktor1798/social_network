import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapDispatchToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withAuthRedirect = (Component) => {
  let RedirectComponent = (props) => {
    if (!props.isAuth) return <Navigate to="/login" />;
    return <Component {...props} />;
  };
  let ConnectAuthRedirect = connect(mapDispatchToProps)(RedirectComponent)

  return ConnectAuthRedirect;
};
