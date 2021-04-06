const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {

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
};

const dialogsReducer = (state = initialState, action) => {



    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return { ...state, newMessageBody: action.body }

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state, newMessageBody: '', messages: [...state.messages, { id: 7, message: body }]
            };
        default:
            return state;

    }

};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;
