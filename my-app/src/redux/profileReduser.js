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
                let newPost = {
                    id: 6,
                    message: state.newTextInTexteraePost,
                    likesCount: 0,
                }
                state.postData.push(newPost);
                break;
            case TEXT_IN_TEXTAREA:
                state.newTextInTexteraePost = action.symbolsPost;
                break;
            default:
                break;
    }

    return state;
}

export const addingPostActionCreater = () => {
    return {
        type: ADD_POST,
    }
}
export const newSymbolsPostActionCreater = (text) => {
    return {
        type: TEXT_IN_TEXTAREA,
        symbolsPost: text,
    }
}

export default profileReduser;