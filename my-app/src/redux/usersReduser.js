const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_STATE = 'SET_STATE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_FETHCING = 'TOGGLE_FETHCING';


let initialState ={
    users:[],
    totalUserCount:0,
    pageSize:5,
    currentPage:1,
    isLoadingPage:false,
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
                users:[...action.usersItem]
               }
            case SET_CURRENT_PAGE:{
                return{
                    ...state,
                    currentPage: action.currentPageItem
                }
            }
            case SET_TOTAL_USER_COUNT:{
                return{
                    ...state,
                    totalUserCount: action.totalCountItem
                }
            }
            case TOGGLE_FETHCING:{
                return{
                    ...state,
                    isLoadingPage: action.isLoadingPage
                }
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
export const setCurrentPageActionCreater = (currentPage) => {
    return {
        type:SET_CURRENT_PAGE,
        currentPageItem:currentPage

    }
}
export const setTotalCountActionCreater = (totalUserCount) => {
    return {
        type:SET_TOTAL_USER_COUNT,
        totalCountItem:totalUserCount
    }
}
export const toogleIsFethcingActionCreater = (isLoadingPage) => {
    return {
        type:TOGGLE_FETHCING,
        isLoadingPage
    }
}

    

export default usersReduser;