import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://t4.ftcdn.net/jpg/03/76/63/37/360_F_376633784_QFdVNtPwVroiMwK3Wn33D4HQp0AiVIkl.jpg"/>
            </div>
            <div className = {s.descriptionBlock}>
                ava + decscription
            </div>

        </div>
    )
}

export default ProfileInfo;