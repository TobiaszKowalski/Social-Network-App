import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setCurrentPageAC, toggleFollowingProgressAC, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator } from '../../state/reducers/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader'
import { Redirect } from 'react-router';



class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        if (this.props.isAuth === false) {return <Redirect to={'/login'} />}
        return <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount = {this.props.totalUsersCount}
        pageSize = {this.props.pageSize}
        currentPage = {this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users = {this.props.users}
        follow = {this.props.followThunkCreator} 
        unfollow = {this.props.unfollowThunkCreator}
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
        followingInProgress: state.usersReducer.followingInProgress,
        isAuth: state.auth.isAuth
    }
};


export default connect(mapStateToProps, {
    followAC, unfollowAC, setCurrentPageAC, 
    toggleFollowingProgressAC, getUsersThunkCreator, followThunkCreator, 
    unfollowThunkCreator
})(UsersAPIContainer);