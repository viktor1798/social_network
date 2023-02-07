const WORD_MESSAGE_IN_TEXTAREA = "WORD_MESSAGE_IN_TEXTAREA";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  messageData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Go dota2" },
    { id: 3, message: "or go to run" },
    { id: 4, message: "FY" },
    { id: 5, message: "test" },
  ],
  dialogUserData: [
    { id: 1, name: "Victor" },
    { id: 2, name: "Lesha" },
    { id: 3, name: "Kolya" },
    { id: 4, name: "Evdokia" },
  ],
  wordMessageInTextareaMessage: "",
};

const dialogReduser = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let textBody = state.wordMessageInTextareaMessage;
      return {
        ...state,
        wordMessageInTextareaMessage: "",
        messageData: [...state.messageData, { id: 6, message: textBody }],
      };

    case WORD_MESSAGE_IN_TEXTAREA:
      return {
        ...state,
        wordMessageInTextareaMessage: action.symbolsMessage,
      };

    default:
      return state;
  }
};
export const sendMessageActionCreater = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const newSymbolsMessageActionCreater = (text) => {
  return {
    type: WORD_MESSAGE_IN_TEXTAREA,
    symbolsMessage: text,
  };
};

export default dialogReduser;
