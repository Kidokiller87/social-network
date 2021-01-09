import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {

    return (
    <StoreContext.Consumer>
            {
                (store) => {
                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }
                let onMessageChange = (newMessage) => {
                    store.dispatch(updateMessageTextActionCreator(newMessage));
                }

                return <Dialogs updateMessageTextActionCreator={onMessageChange}
                                dialogsPage={store.getState().dialogsPage}
                                sendMessage={addMessage}/>
            }

        }

        </StoreContext.Consumer>
    )

}

export default DialogsContainer;