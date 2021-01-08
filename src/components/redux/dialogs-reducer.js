
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
switch (action.type) {
    case ADD_MESSAGE:
        let newMessage = {
            id: 7,
            message: state.newMessageText
        };
        state.messages.push(newMessage);
        state.newMessageText = "";
        return state;

    case UPDATE_MESSAGE_TEXT:
        state.newMessageText = action.lastMessage;
        return state;
    default:
        return state;
}
}


export const addMessageActionCreator = () => ({type:ADD_MESSAGE});
export const updateMessageTextActionCreator = (newMessage) =>
    ({ type:UPDATE_MESSAGE_TEXT, lastMessage:newMessage});

export default dialogsReducer;