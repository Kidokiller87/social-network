
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
        }
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

    dispatch(action) { // (type: 'ADD-POST')
        if (action.type==='ADD-POST') {
            let newPost = {
                id: 5,
                message:this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type==='UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type==='ADD-MESSAGE') {
            let newMessage = {
                id: 7,
                message:this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = "";
            this._callSubscriber(this._state);
        } else if (action.type==='UPDATE-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.lastMessage;
            this._callSubscriber(this._state);
        }
    }


}


window.store = store;
export default store;