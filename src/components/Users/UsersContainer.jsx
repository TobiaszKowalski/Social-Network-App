import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, setIsFetchingAC, toggleFollowingProgressAC } from '../../state/reducers/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader'
import { usersAPI } from '../../API/api';


class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetchingAC(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data=>{
            this.props.setIsFetchingAC(false);
            this.props.setUsersAC(data.items);
            this.props.setTotalUsersCountAC(data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPageAC(pageNumber);
        this.props.setIsFetchingAC(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data=>{
            this.props.setIsFetchingAC(false);
            this.props.setUsersAC(data.items)
        })
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount = {this.props.totalUsersCount}
        pageSize = {this.props.pageSize}
        currentPage = {this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users = {this.props.users}
        unfollow = {this.props.unfollowAC}
        follow = {this.props.followAC}
        toggleFollowingProgress = {this.props.toggleFollowingProgressAC}
        followingInProgress = {this.props.followingInProgress}
    />
    </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        followingInProgress: state.usersReducer.followingInProgress
    }
};

/*Старый вариант
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        },
    }
};*/

export default connect(mapStateToProps, {
    followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, setIsFetchingAC, toggleFollowingProgressAC
})(UsersAPIContainer);