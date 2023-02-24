import React from "react";
import Header from "./header";
import Axios from "axios";
import { getAuthData } from "./../../redux/authReduser";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthData();
  }
  
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { getAuthData })(HeaderContainer);
