import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalCount,
  toogleIsFethcing,
  toogleIsProgress,
} from "../../../../redux/usersReduser";
import Users from "./users";
import Preloader from "../../../common/preloader";
import { usersAPI } from "../../../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toogleIsFethcing(true);
    usersAPI
      .getUsers(this.props.numberPage, this.props.pageSize)
      .then((data) => {
        this.props.toogleIsFethcing(false);
        this.props.setUsers(data.items);
        this.props.setTotalCount(data.totalCount);
      });
  }
  onPageChenged = (numberPage) => {
    this.props.setCurrentPage(numberPage);
    this.props.toogleIsFethcing(true);
    usersAPI.getUsers(numberPage, this.props.pageSize).then((data) => {
      this.props.toogleIsFethcing(false);
      this.props.setUsers(data.items);
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
          followProgress={this.props.followProgress}
          toogleIsProgress={this.props.toogleIsProgress}
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
  setUsers,
  setCurrentPage,
  setTotalCount,
  toogleIsFethcing,
  toogleIsProgress,
})(UsersContainer);
