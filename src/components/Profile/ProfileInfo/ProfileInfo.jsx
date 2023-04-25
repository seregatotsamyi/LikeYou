//import avatar from "../../../images/avatar/1.png";
import Preloader from "../../Preloader/Preloader";
import UserImg from "../../../images/avatar/2.jpg";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {

    if (props.profile == null) {
        return <Preloader/>
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
                <ul className="profile__info-list">
                    <li className="profile__date">
                        <span>Дата рождения:</span>
                        <span> 1 октября</span>
                    </li>
                    <li className="profile__city">
                        <span>Город: </span>
                        <span>Оренбург</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProfileInfo;