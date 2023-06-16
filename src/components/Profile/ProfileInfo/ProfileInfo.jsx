//import avatar from "../../../images/avatar/1.png";
import Preloader from "../../Preloader/Preloader";
import UserImg from "../../../images/avatar/2.jpg";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import React, {useState} from "react";
import ProfileDataForm from "./ProfileFataForm";


const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false)

    if (props.profile == null) {
        return <Preloader/>
    }
    let isOwner = false
    if (props.authorizedUserId === props.profile.userId) {
        isOwner = true

    }


    return (
        <div className="profile__top box">
            <div className="profile__img-wrap">
                <img className="profile__img"
                     src={props.profile.photos.large != null ? props.profile.photos.large : UserImg} alt="avatar"
                     width="100"
                     height="100"/>
            </div>
            <div className="profile__info">
                <div className="profile__name">
                    {props.profile.fullName}
                </div>

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

                {editMode
                    ? <ProfileDataForm saveProfile={props.saveProfile}
                                       profile={props.profile}
                                       goToEditMode={() => {
                                           setEditMode(false)
                                       }}
                                       errorResponse={props.errorResponse}/>
                    : <ProfileData isOwner={isOwner}
                                   goToEditMode={() => {
                                       setEditMode(true)
                                   }}
                                   profile={props.profile}
                                   errorResponse={props.errorResponse}/>
                }

                {props.errorResponse.length > 0 && (
                    <div className="login__error">
                        {props.errorResponse}
                    </div>
                )}


            </div>
        </div>
    );
}

const ProfileData = (props) => {
    return <div>
        {props.isOwner && <div>
            <button className="btn" onClick={props.goToEditMode}>Редактировать</button>
        </div>}
        <div>
            <b>FullName:</b><span>{props.profile.fullName}</span>
        </div>
        <div>
            <b>My skills:</b><span>{props.profile.lookingForAJobDescription}</span>
        </div>
        <ul className="profile__info-list">
            {
                Object.keys(props.profile.contacts).map(key => {
                    return <Contact
                        key={key}
                        contactTitle={key}
                        contactValue={props.profile.contacts[key]}/>
                })
            }
        </ul>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <li className="profile__date">
        <span>{contactTitle}: </span>
        <span>{contactValue}</span>
    </li>
}

export default ProfileInfo;