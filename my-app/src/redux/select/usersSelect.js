//users: state.usersPage.users,
    // pageSize: state.usersPage.pageSize,
    // totalUserCount: state.usersPage.totalUserCount,
    // currentPage: state.usersPage.currentPage,
    // isLoadingPage: state.usersPage.isLoadingPage,
    // followProgress: state.usersPage.followProgress,

    import {createSelector} from 'reselect'

    export const getUsers=(state)=>{
        return state.usersPage.users
    }
    export const users=createSelector(getUsers,(user)=>{
        return user.filter(u=>true)
    })    
    export const pageSize=(state)=>{
        return state.usersPage.pageSize
    }
    export const totalUserCount=(state)=>{
        return state.usersPage.totalUserCount
    }
    export const currentPage=(state)=>{
        return state.usersPage.currentPage
    }
    export const isLoadingPage=(state)=>{
        return state.usersPage.isLoadingPage
    }
    export const followProgress=(state)=>{
        return state.usersPage.followProgress
    }

