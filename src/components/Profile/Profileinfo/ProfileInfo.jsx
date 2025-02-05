import React, {useState} from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import defaultAvatar from '../../../assets/images/avatar.jpg'
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelect = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
       saveProfile(formData)
           .then(()=>{
               setEditMode(false);
           })

    }

    return (
        <div>
           {/*  <div>
                <img src="https://i.pinimg.com/564x/3a/1d/b8/3a1db894b8ef2283230307ffe7cf31b3.jpg"/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <ProfileStatusWithHooks status={status}
                                           updateStatus={updateStatus}/>
            </div>

            <div className={s.descriptionBlock}>

                <img src={profile.photos.large || defaultAvatar} className={s.avatar}/>
                {isOwner && <div><input type={'file'} onChange={onMainPhotoSelect}/></div>}

                { editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={()=>{setEditMode(true)}} profile={profile} isOwner={isOwner}/>}



            </div>

        </div>
    )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
    <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
    </div>
    {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
    }
    <div>
        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key}
                        contactValue={profile.contacts[key]}/>
    })}
    </div>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
</div>

};


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>:{contactValue}</div>
}

export default ProfileInfo;