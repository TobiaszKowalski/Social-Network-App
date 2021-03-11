import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/userPhoto.png';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../API/api';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.slice(0, 10).map(p => {
                    return <span className={`${props.currentPage === p && style.selectedPage} ${style.pageNumbers}`} onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
                })}
            </div>
            {
                props.users.map((user) => {
                    return (
                        <div key={user.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + user.id}>
                                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={style.userPhoto} alt='' />
                                    </NavLink>
                                </div>
                                <div>
                                    {
                                        user.followed
                                            ? <button disabled={props.followingInProgress.some(id=>id===user.id)} onClick={() => { 
                                                props.toggleFollowingProgress(true, user.id)
                                                usersAPI.unfollowUsers(user.id).then(resultCode => {
                                                    if (resultCode === 0) {
                                                        props.unfollow(user.id)
                                                    }
                                                    props.toggleFollowingProgress(false, user.id)
                                                })
                                                }}>Unfollow</button>
                                            : <button disabled={props.followingInProgress.some(id=>id===user.id)} onClick={() => {
                                                props.toggleFollowingProgress(true, user.id)
                                                usersAPI.followUsers(user.id).then(resultCode => {
                                                    if (resultCode === 0) {
                                                        props.follow(user.id)
                                                    }
                                                    props.toggleFollowingProgress(false, user.id)
                                                })
                                                }}>Follow</button>
                                    }
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                    <div>{'user.location.country'}</div>
                                    <div>{'user.location.city'}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }     
        </div>       
    )
}

export default Users;