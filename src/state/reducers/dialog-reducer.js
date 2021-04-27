const SEND_MESSAGE = 'SEND-MESSAGE';

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

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
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: 
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: '6', message: body}]
            }          
        default:
            return state;
    }
}

export default dialogReducer;