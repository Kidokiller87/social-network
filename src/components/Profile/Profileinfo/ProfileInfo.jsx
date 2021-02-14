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
                <img src="https://i.pinimg.com/564x/3a/1d/b8/3a1db894b8ef2283230307ffe7cf31b3.jpg"/>
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