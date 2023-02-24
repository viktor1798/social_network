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
                    ...action.data,
                    isAuth:true
                }
            }
            default:
               return state;
    }
}

export const getAuthData=()=>{
    return (dispatch)=>{
        AuthAPI.me()
        .then(response => {
          if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data;
            dispatch(setUserAuthData(id, login, email));
          }
        });
    }
}

export const setUserAuthData = (id,login,email) => {
    return {
        type:SET_USER_AUTH,
        data:{id,login,email}
    }
}

    

export default authReduser;