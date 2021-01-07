
let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {
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
}
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message:state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe= (observer) => {
   rerenderEntireTree = observer;

}

export default state;