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
import { currentPage, followProgress, isLoadingPage, pageSize, totalUserCount, users } from "../../../../redux/select/usersSelect";
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
    users: users(state),
    pageSize: pageSize(state),
    totalUserCount: totalUserCount(state),
    currentPage: currentPage(state),
    isLoadingPage: isLoadingPage(state),
    followProgress: followProgress(state),
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
