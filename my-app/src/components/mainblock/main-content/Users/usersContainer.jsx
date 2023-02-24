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

        <Users
        
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUserCount={this.props.totalUserCount}
          currentPage={this.props.currentPage}
          onPageChenged={this.onPageChenged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followProgress={this.props.followProgress}
          toogleIsProgress={this.props.toogleIsProgress}
          followThunk={this.props.followThunk}
          unfollowThunk={this.props.unfollowThunk}
        />
      </>
    );
  }
}

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
})(UsersContainer);
