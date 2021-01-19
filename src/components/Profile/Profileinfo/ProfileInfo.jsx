import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src="https://t4.ftcdn.net/jpg/03/76/63/37/360_F_376633784_QFdVNtPwVroiMwK3Wn33D4HQp0AiVIkl.jpg"/>
            </div>

            <div className = {s.descriptionBlock}>
              <img src={props.profile.photos.large}/>
              <ProfileStatus status = {props.status}
                             updateStatus = {props.updateStatus}/>
            </div>

        </div>
    )
}

export default ProfileInfo;