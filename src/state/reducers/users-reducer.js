import { usersAPI } from '../../API/api';

const FOLLOW = 'usersReducer/FOLLOW';
const UNFOLLOW = 'usersReducer/UNFOLLOW';
const SET_USERS = 'usersReducer/SET_USERS';
const SET_CURRENT_PAGE = 'usersReducer/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'usersReducer/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'usersReducer/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'usersReducer/TOGGLE_IS_FOLLOWING_PROGRESS';

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
    };
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const setIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgressAC = (isSent, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isSent, userId});

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setCurrentPageAC(currentPage));
    dispatch(setIsFetchingAC(true));
    let response = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setIsFetchingAC(false));
    dispatch(setUsersAC(response.items));
    dispatch(setTotalUsersCountAC(response.totalCount));
};

//Вынесенный вовне дублирующийся код
const setFollowUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgressAC(true, userId));
    let response = await apiMethod(userId);
    if (response === 0) {
        dispatch(actionCreator(userId));
    };
    dispatch(toggleFollowingProgressAC(false, userId));
}
//------
export const followThunkCreator = (userId) => async (dispatch) => {
    let apiMethod = usersAPI.followUsers.bind(usersAPI);
    setFollowUnfollow(dispatch, userId, apiMethod, followAC);
};

export const unfollowThunkCreator = (userId) => async (dispatch) => {
    let apiMethod = usersAPI.unfollowUsers.bind(usersAPI);
    setFollowUnfollow(dispatch, userId, apiMethod, unfollowAC);
};

export default usersReducer;