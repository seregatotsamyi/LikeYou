import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objextHelper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    users: [],
    pageSize: 6,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                 users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: tr}
                //     }
                //     return u
                // })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        }
        case SET_USERS: {

            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USER_COUNT: {
            return {
                ...state,
                totalUserCount: action.totalUserCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {

                ...state, followingInProgress:
                    action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }
}

export const followAC = (userId) => {
    return ({
        type: FOLLOW,
        userId: userId
    })
}
export const unfollowAC = (userId) => {
    return ({
        type: UNFOLLOW,
        userId: userId
    })
}
export const setUsersAC = (users) => {
    return ({
        type: SET_USERS,
        users: users
    })
}
export const setCurrentPageAC = (currentPage) => {
    return ({
        type: SET_CURRENT_PAGE,
        currentPage
    })
}
export const setTotalUsersCountAC = (totalCount) => {
    return ({
        type: SET_TOTAL_USER_COUNT,
        totalUserCount: totalCount
    })
}
export const toggleIsFetchingAC = (isFetching) => {
    return ({
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    })
}

export const toggleIsFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
    }
}


export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {

    dispatch(toggleIsFetchingAC(true));
    dispatch(setCurrentPageAC(currentPage))

    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetchingAC(false));
    dispatch(setUsersAC(data.items));
    dispatch(setTotalUsersCountAC(data.totalCount));
}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {

    dispatch(toggleIsFollowingProgress(true, id));

    let data = await apiMethod(id);
    if (data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleIsFollowingProgress(false, id));

}

export const follow = (id) => async (dispatch) => {
    let apiMethod = await usersAPI.followUser.bind(usersAPI);
    followUnfollowFlow(dispatch, id, apiMethod, followAC);
}
export const unfollow = (id) => async (dispatch) => {
    let apiMethod = await usersAPI.unfollowUser.bind(usersAPI);
    followUnfollowFlow(dispatch, id, apiMethod, unfollowAC);
}

export default usersReducer;