import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import style from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/userPhoto.png';
import ProfileStatus from './ProfileStatus';



const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={style.descriptionBlock}>
                {
                    !props.profile.photos.large ? <img className={style.defaultAvatar} src={userPhoto} alt='' /> : <img src={props.profile.photos.large} alt='' />
                }
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                <div>
                    <div>{props.profile.fullName}</div>
                    <div>{props.profile.aboutMe}</div>
                    {
                        props.profile.lookingForAJob ? <div>Looking for a job</div> : <div>Not intrested in job right now</div>
                    }
                    <div>{props.profile.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;