const WORD_MESSAGE_IN_TEXTAREA = 'WORD_MESSAGE_IN_TEXTAREA';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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


}

const dialogReduser = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:

        let newMessage = {
            id: 6,
            message: state.wordMessageInTextareaMessage,
        }

        state.messageData.push(newMessage);

        break;
    case WORD_MESSAGE_IN_TEXTAREA:
        state.wordMessageInTextareaMessage = action.symbolsMessage;
        break;

    default:
        break;
    }

    return state;
}
export const sendMessageActionCreater = () => {
    return {
        type: SEND_MESSAGE,
    }
}
export const newSymbolsMessageActionCreater = (text) => {
    return {
        type: WORD_MESSAGE_IN_TEXTAREA,
        symbolsMessage: text,
    }
}


export default dialogReduser;