import { getAuthData } from "./authReduser";

const INIT_SUCSESS = "INIT_SUCSESS";

let initialState = {
  initApp: false

};
const appReduser = (state = initialState, action) => {

  switch (action.type) {
    case INIT_SUCSESS:
      return {
        ...state,
        initApp:true
      };
    default:
      return state;
  }
};

export const initSucsess = () => {
  return {
    type: INIT_SUCSESS,
  };
};

export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuthData());

    Promise.all([promise]).then(()=>{
      dispatch(initSucsess());
    })
  };
};


export default appReduser;