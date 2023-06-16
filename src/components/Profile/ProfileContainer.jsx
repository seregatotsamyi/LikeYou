import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus, saveProfile} from "../../redux/profile-reducer";
import {useNavigate, useParams} from "react-router-dom";
import {Navigate} from "react-router-dom";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter";


class ProfileContainer extends React.Component {

    redirectToMainUser() {
        // let userId = this.props.match.params.userId;
        // if (!userId) {
        //     userId = this.props.authorizedUserId;
        //     if (!userId) {
        //         //userId = 2222;
        //         this.props.match.navigate("/login")
        //     }
        // }
        //
        //
        // this.props.getUserProfile(userId)
        // this.props.getStatus(userId)

        let userId = this.props.authorizedUserId;
        if (userId) {
            this.props.getUserProfile(userId)
            this.props.getStatus(userId)
        }
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {

            }
        }

        if (userId) {
            this.props.getUserProfile(userId)
            this.props.getStatus(userId)
        }

    }

    componentDidUpdate(prevProps) {

        if (this.props.isMain !== prevProps.isMain) {
            if (this.props.isMain) {
                this.redirectToMainUser();
            }
        }
    }

    render() {


        if (!this.props.isAuth && !this.props.match.params.userId) {
            return <Navigate to={"/login"}/>
        }
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     errorResponse={this.props.errorResponse}/>
        );
    }

}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
        errorResponse : state.profilePage.error
    }
}


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, saveProfile}),
    withRouter,
)(ProfileContainer)