import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

//1.test data
let state = {
    posts: [
        {id: 1, message: 'Hi, howe are you?', likesCount: 22},
        {id: 2, message: 'It\'s my first posts', likesCount: 77},
        {id: 2, message: 'Yaaaaa', likesCount: 11},
        {id: 2, message: 'Woowww', likesCount: 3}
    ]
};

it ('length of posts should be incremented', ()=> {

    let action = addPostActionCreator("Hello-React!")
    // 2.action
    let newState = profileReducer(state,action);
    //3.expectation

    expect(newState.posts[4].message).toBe("Hello-React!");
});


it ('message of new post should be correct', ()=> {

    let action = addPostActionCreator("Hello-React!")
    // 2.action
    let newState = profileReducer(state,action);
    //3.expectation
    expect(newState.posts.length).toBe(5);

});

it ('after deleting length of messages should br decrement', ()=> {

    let action = deletePost(1)
    // 2.action
    let newState = profileReducer(state,action);
    //3.expectation
   expect(newState.posts.length).toBe(3);

});

it (`after deleting length shouldn't be decrement if id is incorrest`, ()=> {

    let action = deletePost(100)
    // 2.action
    let newState = profileReducer(state,action);
    //3.expectation
    expect(newState.posts.length).toBe(4);

});