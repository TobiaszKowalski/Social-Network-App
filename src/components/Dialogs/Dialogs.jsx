import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import style from './Dialogs.module.css';


const Dialogs = (props) => {
    
    
    let dialogsElements = props.dialogs.dialogsData.map(el => <DialogItem name = {el.name} key = {el.id}  id = {el.id} /> );
    let messagesElements = props.dialogs.messagesData.map(el => <Message message = {el.message} key = {el.id} />);
    let newMessageBody = props.dialogs.newMessageBody;

    let onSendMessageClick = () => props.sendMessage()
    let onNewMessangeChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value = {newMessageBody} onChange = {onNewMessangeChange} placeholder='Enter tour message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;