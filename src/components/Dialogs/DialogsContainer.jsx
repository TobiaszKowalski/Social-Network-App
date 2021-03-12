import Dialogs from './Dialogs';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../state/reducers/dialog-reducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogReducer,
        isAuth: state.auth.isAuth
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