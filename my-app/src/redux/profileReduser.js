const ADD_POST = 'ADD_POST';
const TEXT_IN_TEXTAREA = 'TEXT_IN_TEXTAREA';
const SET_PROFILE_USER = 'SET_PROFILE_USER';

let initialState ={
    postData: [{ id: 1, message: 'Привет всем', likesCount: 20 },
    { id: 2, message: 'Кто,Я?', likesCount: 22 },
    ],
    newTextInTexteraePost: ' ',
    profile:null
}

const profileReduser = (state=initialState, action) => {
    switch (action.type) {
            case ADD_POST:
            let textBody = state.newTextInTexteraePost;
                return{
                ...state,
                newTextInTexteraePost:'',
                postData:[
                    ...state.postData, {id:3, message:textBody,likesCount:0}
                ]
            }
                
            case TEXT_IN_TEXTAREA:
               return{
                ...state,
                newTextInTexteraePost:action.text,
               }
            case SET_PROFILE_USER:
               return{
                ...state,
                profile:action.profile,
               }
            default:
               return state;
    }
}

export const addPost = () => {
    return {
        type: ADD_POST,
    }
}
export const newSymbol = (text) => {
    return {
        type: TEXT_IN_TEXTAREA,
        text,
    }
}
export const setProfile = (profile) => {
    return {
        type: SET_PROFILE_USER,
        profile,
    }
}

export default profileReduser;