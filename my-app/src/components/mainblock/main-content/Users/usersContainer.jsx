import { connect } from "react-redux";
import {
  followActionCreater,
  setUsersActionCreater,
  unfollowActionCreater,
  setCurrentPageActionCreater,
  setTotalCountActionCreater
} from "../../../../redux/usersReduser";
import Users from "./users";

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreater(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreater(userId));
    },
    setUser: (users)=>{
        dispatch(setUsersActionCreater(users));
    },
    setCurrentPage(numberPage){
      dispatch(setCurrentPageActionCreater(numberPage))
    },
    setTotalCount(totalCount){
      dispatch(setTotalCountActionCreater(totalCount))
    }
  };
};
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
