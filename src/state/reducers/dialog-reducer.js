const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

const initialState = {
    dialogsData : [
        {id: '1', name: 'John'},
        {id: '2', name: 'Mike'},
        {id: '3', name: 'Alex'},
        {id: '4', name: 'Mary'},
        {id: '5', name: 'Anna'},
        {id: '6', name: 'Andrey'}
    ],

    messagesData: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'Whats up?'},
        {id: '3', message: '=)'},
        {id: '4', message: 'London is a capital of a Great Britain'},
        {id: '5', message: 'License to chill'},
        {id: '6', message: 'Hi'}
    ],

    newMessageBody: '',
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: 
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE: 
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: '6', message: body}]
            }          
        default:
            return state;
    }
}

export default dialogReducer;