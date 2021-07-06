import React from 'react';
import Pagination from './Pagination/Pagination';
import UserItem from './UserItem/UserItem';


let Users = (props) => {

    return (
        <div>
            <Pagination 
                totalItemsCount = {props.totalUsersCount} 
                pageSize = {props.pageSize} 
                currentPage = {props.currentPage}
                onPageChanged = {props.onPageChanged}
            />
            {
                props.users.map(user => <UserItem 
                                            followingInProgress={props.followingInProgress} 
                                            user={user} 
                                            follow={props.follow}
                                            unfollow={props.unfollow}
                                            key={user.id} 
                                        />)
            }     
        </div>       
    )
}

export default Users;