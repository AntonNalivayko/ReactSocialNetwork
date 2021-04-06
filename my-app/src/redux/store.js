import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'It`s my first project', likesCount: 11 },
                { id: 3, message: 'я уже на 25-м уроке!!', likesCount: 19 },
                { id: 4, message: '1/4 пройдена юююхуууу!!', likesCount: 18 }
                ],
    
            newPostText: 'it-kamasutra.com'
           
        },

        dialogsPage: {
    
            dialogs: [
                { id: 1, name: 'Anton' },
                { id: 2, name: 'Sergey' },
                { id: 3, name: 'Alexander' },
                { id: 4, name: 'Pavel' },
                { id: 5, name: 'Vasiliy' },
                { id: 6, name: 'Nikolay' }
            ],
    
            messages: [
                { id: 1, message: 'Hi my friend!!' },
                { id: 2, message: 'What is your name Boy?' },
                { id: 3, message: 'How are you?' },
                { id: 4, message: 'I live in the Russia' },
                { id: 5, message: 'I have new professional!' },
                { id: 6, message: 'Hi my friend!!' }
            ],
            newMessageBody: ""
        }
        
        

    
        
    },

    getState(){
        
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
        }, 

    _callSubscriber () {
        console.log('State changed');
    },
    

    dispatch (action) {

        this._state.profilePage = profileReducer (this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer (this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
        
}




export default store;
window.store = store;



