const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
    messages: [
        {id: 1, message: 'Hallow'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Super pupper!!'},
        {id: 4, message: 'Yo!!'},
        {id: 5, message: 'Yo!!'},
        {id: 6, message: 'Youuu!!'},
    ],
    dialogs: [
        {id: 1, name: 'Valdemar'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sanya'},
        {id: 5, name: 'Viktar'},
        {id: 6, name: 'Max'},
    ],
    newMessageText: 'LIFE IS GOOD!'
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.lastMessage
            };


        case ADD_MESSAGE:
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 7, message: newMessage}]
            };

        default:
            return state;
    }
}


export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageTextActionCreator = (newMessage) =>
    ({type: UPDATE_MESSAGE_TEXT, lastMessage: newMessage});

export default dialogsReducer;