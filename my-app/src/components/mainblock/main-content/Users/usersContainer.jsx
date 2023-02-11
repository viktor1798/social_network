import React from "react";
import { connect } from "react-redux";
import {
  followActionCreater,
  setUsersActionCreater,
  unfollowActionCreater,
  setCurrentPageActionCreater,
  setTotalCountActionCreater,
  toogleIsFethcingActionCreater,
} from "../../../../redux/usersReduser";
import Axios from "axios";
import Users from "./users";
import Preloader from "../../../common/preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleFethcing(true)
    Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
      (response) => {
        this.props.toggleFethcing(false);
        this.props.setUser(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      }
    );
  }
  onPageChenged = (numberPage) => {
    this.props.setCurrentPage(numberPage);
    this.props.toggleFethcing(true)
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`
    ).then((response) => {
      this.props.toggleFethcing(false);
      this.props.setUser(response.data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isLoadingPage ? <Preloader /> : null}

        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUserCount={this.props.totalUserCount}
          currentPage={this.props.currentPage}
          onPageChenged={this.onPageChenged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreater(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreater(userId));
    },
    setUser: (users) => {
      dispatch(setUsersActionCreater(users));
    },
    setCurrentPage(numberPage) {
      dispatch(setCurrentPageActionCreater(numberPage));
    },
    setTotalCount(totalCount) {
      dispatch(setTotalCountActionCreater(totalCount));
    },
    toggleFethcing(isLoadingPage) {
      dispatch(toogleIsFethcingActionCreater(isLoadingPage));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isLoadingPage: state.usersPage.isLoadingPage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
