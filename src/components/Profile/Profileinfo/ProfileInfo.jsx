import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import defaultAvatar from '../../../assets/images/avatar.jpg'
const ProfileInfo = ({profile, status,updateStatus,isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelect = (e) => {
if (e.target.files.length) {
    savePhoto(e.target.files[0])
}
    }

    return (
        <div>
           {/* <div>
                <img src="https://i.pinimg.com/564x/3a/1d/b8/3a1db894b8ef2283230307ffe7cf31b3.jpg"/>
            </div>*/}

            <div className = {s.descriptionBlock}>
              <img src={profile.photos.large || defaultAvatar} className={s.avatar}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelect}/>}
              <ProfileStatusWithHooks status = {status}
                             updateStatus = {updateStatus}/>
            </div>

        </div>
    )
}

export default ProfileInfo;