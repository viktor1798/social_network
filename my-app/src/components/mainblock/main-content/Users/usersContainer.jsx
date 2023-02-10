import { connect } from "react-redux";
import {
  followActionCreater,
  setUsersActionCreater,
  unfollowActionCreater,
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
    }
  };
};
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
