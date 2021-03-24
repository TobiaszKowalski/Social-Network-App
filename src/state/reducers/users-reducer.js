import { usersAPI } from '../../API/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, 
                followingInProgress: action.isSent 
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id=>id!==action.userId)
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (count) => ({type: SET_TOTAL_USERS_COUNT, count})
export const setIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgressAC = (isSent, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isSent, userId})

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPageAC(currentPage))
        dispatch(setIsFetchingAC(true));
        usersAPI.getUsers(currentPage, pageSize).then(data=>{
            dispatch(setIsFetchingAC(false));
            dispatch(setUsersAC(data.items));
            dispatch(setTotalUsersCountAC(data.totalCount))
        });
    }

}
export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgressAC(true, userId))
        usersAPI.followUsers(userId).then(resultCode => {
            if (resultCode === 0) {
                dispatch(followAC(userId))
            }
            dispatch(toggleFollowingProgressAC(false, userId))
        })
    }

}
export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgressAC(true, userId))
        usersAPI.unfollowUsers(userId).then(resultCode => {
            if (resultCode === 0) {
                dispatch(unfollowAC(userId))
            }
            dispatch(toggleFollowingProgressAC(false, userId))
        })
    }

}

export default usersReducer;