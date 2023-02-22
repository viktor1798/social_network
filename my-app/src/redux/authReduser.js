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



export const setUserAuthData = (id,login,email) => {
    return {
        type:SET_USER_AUTH,
        data:{id,login,email}
    }
}

    

export default authReduser;