import React from 'react';
import Dialogs from './Dialogs';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../state/reducers/dialog-reducer';
import { connect } from 'react-redux';

//Контейнер до коннекта
/*const DialogsContainer = (props) => {
    let dialogsState = props.state.dialogReducer;

    let onSendMessageClick = () => props.store.dispatch(sendMessageCreator())
    let onNewMessangeChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return <Dialogs 
        updateNewMessageBody={onNewMessangeChange} 
        sendMessage={onSendMessageClick} 
        dialogs={dialogsState} 
        />
}
*/

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogReducer
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;