import React from "react";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return <div>
        <ProfileInfo profile = {props.profile}
                     savePhoto={props.savePhoto}
                     isOwner = {props.isOwner}
                     saveProfile = {props.saveProfile}
                     status = {props.status}
                     updateStatus = {props.updateStatus} />
        <MyPostsContainer/>
    </div>

}

export default Profile;