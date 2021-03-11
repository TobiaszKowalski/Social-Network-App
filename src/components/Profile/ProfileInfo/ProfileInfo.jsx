import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import style from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/userPhoto.png';


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src='https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg' alt = '' />
            </div>
            <div className={style.descriptionBlock}>
                {
                    !props.profile.photos.large ? <img className={style.defaultAvatar} src={userPhoto} alt='' /> : <img src={props.profile.photos.large} alt='' />
                }
                <div>
                    <div>{props.profile.fullName}</div>
                    <div>{props.profile.aboutMe}</div>
                    {
                        props.profile.lookingForAJob ? <div>Status: looking for a job</div> : <div>Status: not intrested in job right now</div>
                    }
                    <div>{props.profile.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;