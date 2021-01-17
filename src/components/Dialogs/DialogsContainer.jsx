import React from 'react';
import {addMessageActionCreator, updateMessageTextActionCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
}

}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
         dispatch(addMessageActionCreator());
        },
        updateMessageTextActionCreator: (newMessage) => {
            dispatch(updateMessageTextActionCreator(newMessage))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;