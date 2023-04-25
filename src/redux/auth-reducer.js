import {authAPI, profileAPI} from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';
const ERROR_MESSAGE = "auth/ERROR_MESSAGE";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    profile: null,
    error: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            };
        }
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case ERROR_MESSAGE:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}


export const setAuthUserDataAC = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    }
}
export const setBodyAuthUserDataAC = (profile) => {
    return {
        type: SET_AUTH_USER_DATA,
        profile: profile
    }
}

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;

        return profileAPI.getProfile(id).then(response => {
            dispatch(setAuthUserDataAC(id, email, login, true));
            dispatch(setBodyAuthUserDataAC(response))

        })
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let serverErrorMessageResponse = response.data.messages[0];
        dispatch(errorAC(serverErrorMessageResponse))
    }
}
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false));
    }
}

export const errorAC = (error) => ({type: ERROR_MESSAGE, payload: {error}})

export default authReducer;