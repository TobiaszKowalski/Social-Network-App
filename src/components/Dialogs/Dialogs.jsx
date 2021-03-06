import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import style from './Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { Textarea } from '../common/FormControls/FormsControl';



const Dialogs = (props) => {
    
    
    let dialogsElements = props.dialogs.dialogsData.map(el => <DialogItem name = {el.name} key = {el.id}  id = {el.id} /> );
    let messagesElements = props.dialogs.messagesData.map(el => <Message message = {el.message} key = {el.id} />);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }
    
    const maxLength50 = maxLengthCreator(50);

    const AddMessageForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field 
                        component = {Textarea} 
                        name = 'newMessageBody' 
                        placeholder = 'Enter your message'
                        validate = {[required, maxLength50]}
                    />
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        )
    }
    
    const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
    );

    
}


export default Dialogs;