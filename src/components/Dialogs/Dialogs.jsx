import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../redux/dialogs-reducer";



const Dialogs = (props) => {
    let state = props.dialogsPage;
   let dialogsElements =  state.messages.map ( d => <DialogItem name={d.name} id= {d.id}/>)

    let messagesElements = state.messages.map ( m => <Message message={m.message}/>)

//let sendMessageElement = React.createRef();

 let addMessage = () => {
       props.sendMessage();
 }
    let onMessageChange = (e) => {
         let newMessage = e.target.value;
         props.updateMessageTextActionCreator(newMessage);

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
             {messagesElements}
               <div>
                   <textarea onChange = {onMessageChange}
                             placeholder='Enter your message'
                            // ref = {sendMessageElement}
                             value = {props.newMessageText} />
               </div>
                <div>
                    <button onClick={addMessage}> Send message</button>
                </div>

            </div>
        </div>


    )
}

export default Dialogs;