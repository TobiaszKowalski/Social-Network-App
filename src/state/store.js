//Старый сторб до редакса
import profileReducer from './reducers/profile-reducer';
import dialogReducer  from './reducers/dialog-reducer';

let store = {
    _state: {
        profilePage: {        
            postData: [
                {id: '1', message: 'Hi', likesCount: 0},
                {id: '2', message: 'Whats up?', likesCount: 0},
                {id: '3', message: '=)', likesCount: 0}
            ],
    
            newPostText: 'Some text',
    
        },
        
        dialogsPage: {
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
        },
    },
    _callSubscriber() {},
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    },
}


export default store;