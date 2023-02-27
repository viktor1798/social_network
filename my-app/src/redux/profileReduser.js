import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_PROFILE_USER = "SET_PROFILE_USER";
const SET_STATUS = "SET_STATUS";

let initialState = {
  postData: [
    { id: 1, message: "Привет всем", likesCount: 20 },
    { id: 2, message: "Кто,Я?", likesCount: 22 },
  ],
  profile: null,
  status: "",
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postData: [
          ...state.postData,
          { id: 3, message: action.valueText, likesCount: 0 },
        ],
      };
  case SET_PROFILE_USER:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const addPost = (valueText) => {
  return {
    type: ADD_POST,
    valueText
  };
};
export const setProfile = (profile) => {
  return {
    type: SET_PROFILE_USER,
    profile,
  };
};
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const getProfileUser = (userId) => {
  return (dispatch) => {
    profileAPI.getProfileUsers(userId).then((response) => {
      dispatch(setProfile(response.data));
    });
  };
};
export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};
export default profileReduser;
