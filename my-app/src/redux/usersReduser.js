import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_STATE = "SET_STATE";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const TOGGLE_FETHCING = "TOGGLE_FETHCING";
const TOGGLE_PROGRESS = "TOGGLE_PROGRESS";

let initialState = {
  users: [],
  totalUserCount: 0,
  pageSize: 5,
  currentPage: 1,
  isLoadingPage: true,
  followProgress: [],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_STATE:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_USER_COUNT: {
      return {
        ...state,
        totalUserCount: action.totalUserCount,
      };
    }
    case TOGGLE_FETHCING: {
      return {
        ...state,
        isLoadingPage: action.isLoadingPage,
      };
    }
    case TOGGLE_PROGRESS: {
      return {
        ...state,
        followProgress: action.isLoadingPage
          ? [...state.followProgress, action.userId]
          : state.followProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

export const follow = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollow = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setUsers = (users) => {
  return {
    type: SET_STATE,
    users,
  };
};
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};
export const setTotalCount = (totalUserCount) => {
  return {
    type: SET_TOTAL_USER_COUNT,
    totalUserCount,
  };
};
export const toogleIsFethcing = (isLoadingPage) => {
  return {
    type: TOGGLE_FETHCING,
    isLoadingPage,
  };
};
export const toogleIsProgress = (isLoadingPage, userId) => {
  return {
    type: TOGGLE_PROGRESS,
    isLoadingPage,
    userId,
  };
};

export const getUsers = (currentNum, numberPage, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(currentNum));
    dispatch(toogleIsFethcing(true));
    usersAPI.getUsers(currentNum,numberPage, pageSize).then((data) => {
      dispatch(toogleIsFethcing(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalCount(data.totalCount));
    });
  };
};
export const followThunk = (userId) => {
  return (dispatch) => {
    dispatch(toogleIsProgress(true, userId));
    usersAPI.follow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(follow(userId));
      }
    });
    dispatch(toogleIsProgress(false, userId));
  };
};
export const unfollowThunk = (userId) => {
  return (dispatch) => {
    dispatch(toogleIsProgress(true, userId));
    usersAPI.unfollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollow(userId));
      }
    });
    dispatch(toogleIsProgress(false, userId));
  };
};

export default usersReduser;
