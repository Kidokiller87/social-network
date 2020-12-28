import React from "react";
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div>
        <div>
            <img src="https://t4.ftcdn.net/jpg/03/76/63/37/360_F_376633784_QFdVNtPwVroiMwK3Wn33D4HQp0AiVIkl.jpg"/>
        </div>
        <div>ava + decscription</div>
        <MyPosts hey='yo'/>
        </div>
   
}

export default Profile;