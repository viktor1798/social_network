import { AuthAPI } from "../api/api";

const SET_USER_AUTH = 'SET_USER_AUTH';


let initialState ={
    id:null,
    login:null,
    email:null,
    isAuth:false,
}

const authReduser = (state=initialState, action) => {
    switch (action.type) {
            case SET_USER_AUTH:{
                return{
                    ...state,
                    ...action.payload
                }
            }
            default:
               return state;
    }
}

export const setUserAuthData = (id,login,email,isAuth) => {
    return {
        type:SET_USER_AUTH,
        payload:{id,login,email,isAuth}
    }
}


export const getAuthData=()=>{
    return (dispatch)=>{
        AuthAPI.me()
        .then(response => {
          if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data;
            dispatch(setUserAuthData(id, login, email, true));
          }
        });
    }
}
export const login=(email,password,rememberMe)=>{
    return (dispatch)=>{
        AuthAPI.login(email,password,rememberMe)
        .then(response => {
          if (response.data.resultCode === 0) {
            dispatch(getAuthData());
          }
        });
    }
}
export const logout=()=>{
    return (dispatch)=>{
        AuthAPI.logout()
        .then(response => {
          if (response.data.resultCode === 0) {
            dispatch(setUserAuthData(null, null,null,false));
          }
        });
    }
}


    

export default authReduser;