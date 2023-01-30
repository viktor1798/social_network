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
            case 'ADD-POST':
                let newPost = {
                    id: 3,
                    message: this._state.profilePage.newTextInTexteraePost,
                    likesCount: 0,
                }
                this._state.profilePage.postData.push(newPost);
                this.rerenderAllTree(this._state);
                break;
            case 'TEXT-IN-TEXTAREA':
                this._state.profilePage.newTextInTexteraePost = action.symbols;
                this.rerenderAllTree(this._state);
                break;

            default:
                break;
        }
    }

}

export default store;