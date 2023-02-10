const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_STATE = 'SET_STATE';


let initialState ={
    users:[
        // { id: 1, followed: false, fullName: 'Kostya', status: 'pogoda top', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 2, followed: true, fullName: 'Kirill', status: '+1', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 3, followed: false, fullName: 'Alina', status: 'na samom dele pogoda tak sebe', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 4, followed: true, fullName: 'Vanya', status: 'vozmoshno', location: { city: 'Minsk', country: 'Belarus' } }
]
}

const usersReduser = (state=initialState, action) => {
    switch (action.type) {
            case FOLLOW:
                return{
                    ...state,
                    users: state.users.map(u=>{
                        if(u.id ===action.userId){
                            return{...u, followed:true}
                        }
                        return u;
                    })
                }
            
                
            case UNFOLLOW:
               return{
                ...state,
                users: state.users.map(u=>{
                    if(u.id ===action.userId){
                        return{...u, followed:false}
                    }
                    return u;
                })
            }
                
            case SET_STATE:
               return{
                ...state,
                users:[...state.users,...action.usersItem]
               }
            default:
               return state;
    }
}

export const followActionCreater = (userId) => {
    return { 
        type: FOLLOW,
        userId 
    }
}
export const unfollowActionCreater = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersActionCreater = (users) => {
    return {
        type:SET_STATE,
        usersItem:users
    }
}

    

export default usersReduser;
