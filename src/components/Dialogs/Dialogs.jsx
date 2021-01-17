import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
import {Redirect} from "react-router-dom"

const Dialogs = (props) => {
    let state = props.dialogsPage;
   let dialogsElements =  state.dialogs.map ( d => <DialogItem name={d.name} key={d.id} id= {d.id}/>)
    let messagesElements = state.messages.map ( m => <Message message={m.message} key={m.id} />)

    let newMessageText = state.newMessageText;

//let sendMessageElement = React.createRef();

 let addMessage = () => {
       props.sendMessage();
 }
    let onMessageChange = (e) => {
         let newMessage = e.target.value;
         props.updateMessageTextActionCreator(newMessage);

    }

    if (!props.isAuth) return <Redirect to={'/login'} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
             {messagesElements}
               <div>
                   <textarea  value = {newMessageText}
                              onChange = {onMessageChange}
                              placeholder='Enter your message'>
                   </textarea>
               </div>
                <div>
                    <button onClick={addMessage}> Send message</button>
                </div>

            </div>
        </div>


    )
}

export default Dialogs;