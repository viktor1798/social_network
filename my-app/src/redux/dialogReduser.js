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
};

const dialogReduser = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messageData: [...state.messageData, { id: 6, message: action.valueText }],
      };

    default:
      return state;
  }
};
export const sendMessage = (valueText) => {
  return {
    type: SEND_MESSAGE,
    valueText
  };
};
export default dialogReduser;
