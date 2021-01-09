import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

 let addMessage = () => {
       props.store.dispatch(addMessageActionCreator());
 }
    let onMessageChange = (newMessage) => {
               props.store.dispatch(updateMessageTextActionCreator(newMessage));
    }

    return <Dialogs updateMessageTextActionCreator = {onMessageChange}
                    dialogsPage = {state}
                    sendMessage = {addMessage}/>
}

export default DialogsContainer;