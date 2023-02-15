const ADD_POST = 'ADD_POST';
const TEXT_IN_TEXTAREA = 'TEXT_IN_TEXTAREA';

let initialState ={
    postData: [{ id: 1, message: 'Привет всем', likesCount: 20 },
    { id: 2, message: 'Кто,Я?', likesCount: 22 },
    ],
    newTextInTexteraePost: ' ',
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

export default profileReduser;