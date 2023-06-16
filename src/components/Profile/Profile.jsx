import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className="profile">

            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                authorizedUserId={props.authorizedUserId}
                saveProfile={props.saveProfile}
                errorResponse={props.errorResponse}
            />
            <MyPostsContainer/>

        </div>
    );
}

export default Profile;