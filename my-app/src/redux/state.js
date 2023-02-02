const ADD_POST = 'ADD_POST';
const TEXT_IN_TEXTAREA = 'TEXT_IN_TEXTAREA';
const WORD_MESSAGE_IN_TEXTAREA = 'WORD_MESSAGE_IN_TEXTAREA';
const SEND_MESSAGE = 'SEND_MESSAGE';


let store = {
    _state: {
        dialogsPage: {
            messageData: [{ id: 1, message: 'Hi' },
            { id: 2, message: 'Go dota2' },
            { id: 3, message: 'or go to run' },
            { id: 4, message: 'FY' },
            { id: 5, message: 'test' },
            ],
            dialogUserData: [
                { id: 1, name: 'Victor' },
                { id: 2, name: 'Lesha' },
                { id: 3, name: 'Kolya' },
                { id: 4, name: 'Evdokia' },
            ],
            wordMessageInTextareaMessage:'',


        },
        profilePage: {
            postData: [{ id: 1, message: 'Привет всем', likesCount: 20 },
            { id: 2, message: 'Кто,Я?', likesCount: 22 },
            ],
            newTextInTexteraePost: ' ',
        }

    },
    callbackToIndex(observer) {
        this.rerenderAllTree = observer;
    },
    getState() {
        return this._state;
    },
    rerenderAllTree() {

    },
    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 6,
                    message: this._state.profilePage.newTextInTexteraePost,
                    likesCount: 0,
                }
                this._state.profilePage.postData.push(newPost);
                this.rerenderAllTree(this._state);
                break;
            case TEXT_IN_TEXTAREA:
                this._state.profilePage.newTextInTexteraePost = action.symbolsPost;
                this.rerenderAllTree(this._state);
                break;
            case SEND_MESSAGE:
                
                let newMessage = {
                    id: 3,
                    message: this._state.dialogsPage.wordMessageInTextareaMessage,
                }

                this._state.dialogsPage.messageData.push(newMessage);
                this.rerenderAllTree(this._state);
                break;
            case WORD_MESSAGE_IN_TEXTAREA:
                this._state.dialogsPage.wordMessageInTextareaMessage = action.symbolsMessage;
                this.rerenderAllTree(this._state);
                break;

            default:
                break;
        }
    }

}


export  const sendMessageActionCreater= () =>{
    return{
        type:SEND_MESSAGE,
    }
}
export const newSymbolsPostActionCreater = (text) =>{
    return{
        type:TEXT_IN_TEXTAREA,
        symbolsPost:text,
    }
}


export  const addingPostActionCreater= () =>{
    return{
        type:ADD_POST,
    }
}
export const newSymbolsMessageActionCreater = (text) =>{
    return{
        type:WORD_MESSAGE_IN_TEXTAREA,
        symbolsMessage:text,
    }
}


export default store;