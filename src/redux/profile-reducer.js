import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
let initialState = {
    posts: [
        {id: 1, message: "Это первый пост", likesCount: "12"},
        {id: 2, message: "Это второй пост", likesCount: "22"}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: action.newMessagePost,
                likesCount: "0"
            }
            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
            };
            return stateCopy;
        }

        case SET_USER_PROFILE: {

            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.id)
            }
        }

        default:
            return state;
    }
}

export const addPostAC = (newMessagePost) => {
    return {
        type: ADD_POST,
        newMessagePost
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}
export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        id
    }
}
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response));


}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;