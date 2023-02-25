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
import { withAuthRedirect } from "../../../../hoc/withAuthRedirect";
import { compose } from "redux";
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

        <Users {...this.props} onPageChenged={this.onPageChenged} />
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

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    toogleIsProgress,
    getUsers,
    followThunk,
    unfollowThunk,
  }),
  withAuthRedirect
)(UsersContainer);
