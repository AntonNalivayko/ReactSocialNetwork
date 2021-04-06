import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        { id: 1, message: 'Привет гость!', likesCount: 12 },
        { id: 2, message: 'Ракт редакс рулит!', likesCount: 11 },
        { id: 3, message: 'Это мой второй пост на странице', likesCount: 19 },
        { id: 4, message: 'Это мой первый пост на моей странице', likesCount: 18 }
    ],

    newPostText: 'Напиши сюда текст своего поста:)',
    profile: null,
    status: ''

};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            };

            return { ...state, posts: [...state.posts, newPost], newPostText: '' };
        }

        case UPDATE_NEW_POST_TEXT: {
            return { ...state, newPostText: action.newText };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        case SET_STATUS: {
            return { ...state, status: action.status };
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => (dispatch)=> {
     usersAPI.getProfile(userId).then(response => {
        dispatch (setUserProfile(response.data));
            });
}

export const getStatus= (userId) => (dispatch)=> {
    profileAPI.getStatus(userId).then(response => {
        dispatch (setStatus(response.data));
            });
}
export const updateStatus= (status) => (dispatch)=> {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0){
        dispatch (setStatus(status));
       }   });
}


export default profileReducer;