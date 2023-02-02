const WORD_MESSAGE_IN_TEXTAREA = 'WORD_MESSAGE_IN_TEXTAREA';
const SEND_MESSAGE = 'SEND_MESSAGE';



const dialogReduser = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:

        let newMessage = {
            id: 3,
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


export default dialogReduser;