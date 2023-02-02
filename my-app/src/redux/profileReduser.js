const ADD_POST = 'ADD_POST';
const TEXT_IN_TEXTAREA = 'TEXT_IN_TEXTAREA';



const profileReduser = (state, action) => {
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

export default profileReduser;