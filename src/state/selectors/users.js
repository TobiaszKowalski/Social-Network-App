export const getUsers = state => state.usersReducer.users;
export const getPageSize = state => state.usersReducer.pageSize;
export const getTotalUsersCount = state => state.usersReducer.totalUsersCount;
export const getCurrentPage = state => state.usersReducer.currentPage;
export const getIsFetching = state => state.usersReducer.isFetching;
export const getFollowingInProgress = state => state.usersReducer.followingInProgress;