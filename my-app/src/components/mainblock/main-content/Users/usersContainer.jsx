import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  toogleIsProgress,
  getUsers,
  followThunk,
  unfollowThunk,
} from "../../../../redux/usersReduser";
import Users from "./users";
import Preloader from "../../../common/preloader";
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from "../../../../hoc/withAuthRedirect";
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.numberPage, this.props.pageSize);
  }
  onPageChenged = (currentNum) => {
    this.props.getUsers(currentNum, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isLoadingPage ? <Preloader /> : null}

        <Users {...this.props} />
      </>
    );
  }
}


let AuthRedirectComponent = withAuthRedirect(UsersContainer)

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isLoadingPage: state.usersPage.isLoadingPage,
    followProgress: state.usersPage.followProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  toogleIsProgress,
  getUsers,
  followThunk,
  unfollowThunk,
})(AuthRedirectComponent);
