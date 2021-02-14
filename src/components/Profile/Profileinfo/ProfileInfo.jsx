import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status,updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src="https://i.pinimg.com/564x/1f/5b/d7/1f5bd7c6d0e08078a9a6344459f5d754.jpg"/>
            </div>

            <div className = {s.descriptionBlock}>
              <img src={profile.photos.large}/>
              <ProfileStatusWithHooks status = {status}
                             updateStatus = {updateStatus}/>
            </div>

        </div>
    )
}

export default ProfileInfo;