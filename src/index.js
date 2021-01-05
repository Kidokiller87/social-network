import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
    {id: 1, message: 'Hi, howe are you?', likesCount: 22},
    {id: 2, message: 'It\'s my first posts', likesCount: 77},
    {id: 2, message: 'Yaaaaa', likesCount: 11},
    {id: 2, message: 'Woowww', likesCount: 3}
]
let dialogs = [
    {id: 1, name: 'Valdemar'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sanya'},
    {id: 5, name: 'Viktar'},
    {id: 6, name: 'Max'},
]
let messages = [
    {id: 1, message: 'Hallow'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Super pupper!!'},
    {id: 4, message: 'Yo!!'},
    {id: 5, message: 'Yo!!'},
    {id: 6, message: 'Youuu!!'},
]


ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} messages = {messages} dialogs = {dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
