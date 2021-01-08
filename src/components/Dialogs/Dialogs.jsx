import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../redux/state";



const Dialogs = (props) => {

   let dialogsElements =  props.state.dialogs.map ( d => <DialogItem name={d.name} id= {d.id}/>)

    let messagesElements = props.state.messages.map ( m => <Message message={m.message}/>)

let sendMessageElement = React.createRef();

 let addMessage = () => {
       props.dispatch(addMessageActionCreator());
 }
    let onMessageChange = () => {
         let newMessage = sendMessageElement.current.value;
         let action = updateMessageTextActionCreator(newMessage);
        props.dispatch(action);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
             {messagesElements}
               <div>
                   <textarea onChange = {onMessageChange} ref = {sendMessageElement} value = {props.newMessageText} />
               </div>
                <div>
                    <button onClick={addMessage}> Send message</button>
                </div>

            </div>
        </div>


    )
}

export default Dialogs;