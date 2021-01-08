import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, howe are you?', likesCount: 22},
                {id: 2, message: 'It\'s my first posts', likesCount: 77},
                {id: 2, message: 'Yaaaaa', likesCount: 11},
                {id: 2, message: 'Woowww', likesCount: 3}
            ],
            newPostText: 'Hello React'
        },
        dialogsPage: {
            messages:[
                {id: 1, message: 'Hallow'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Super pupper!!'},
                {id: 4, message: 'Yo!!'},
                {id: 5, message: 'Yo!!'},
                {id: 6, message: 'Youuu!!'},
            ],
            dialogs:[
                {id: 1, name: 'Valdemar'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sanya'},
                {id: 5, name: 'Viktar'},
                {id: 6, name: 'Max'},
            ],
            newMessageText:'LIFE IS GOOD!'
        },
        sidebar: {}
    },
    _callSubscriber () {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;

    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }

}





window.store = store;
export default store;