import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";

const Dialogs = (props) => {

   let dialogsElements =  props.state.dialogs.map ( d => <DialogItem name={d.name} id= {d.id}/>)

    let messagesElements = props.state.messages.map ( m => <Message message={m.message}/>)

let sendMessageElement = React.createRef();

 let addMessage = () => {
       props.dispatch({type:'ADD-MESSAGE'});
 }
    let onMessageChange = () => {
         let newMessage = sendMessageElement.current.value;
        props.dispatch({type:'UPDATE-MESSAGE-TEXT', lastMessage:newMessage});
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