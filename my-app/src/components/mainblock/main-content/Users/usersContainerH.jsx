import React, { useEffect } from "react";
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


const UsersContainerH= (props)=>{
  let onPageChenged = (currentNum) => {
    props.getUsers(currentNum, props.pageSize);
  };

  useEffect(()=>{
    props.getUsers(props.numberPage,props.pageSize);
  },[])

  return (
    <>
      {props.isLoadingPage ? <Preloader /> : null}

      <Users {...props} onPageChenged={onPageChenged} />
    </>
  );
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
)(UsersContainerH);
