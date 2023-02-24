import dialogReduser from "./dialogReduser";
import profileReduser from "./profileReduser";


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
            wordMessageInTextareaMessage: '',


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
        // let state = this._state;
        this._state.dialogsPage = dialogReduser(this._state.dialogsPage, action);
        this._state.profilePage = profileReduser(this._state.profilePage, action)
        this.rerenderAllTree(this._state);


    }

}


// export const sendMessageActionCreater = () => {
//     return {
//         type: SEND_MESSAGE,
//     }
// }
// export const newSymbolsPostActionCreater = (text) => {
//     return {
//         type: TEXT_IN_TEXTAREA,
//         symbolsPost: text,
//     }
// }


// export const addingPostActionCreater = () => {
//     return {
//         type: ADD_POST,
//     }
// }
// export const newSymbolsMessageActionCreater = (text) => {
//     return {
//         type: WORD_MESSAGE_IN_TEXTAREA,
//         symbolsMessage: text,
//     }
// }


export default store;