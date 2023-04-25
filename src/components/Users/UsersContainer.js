import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, getUsersThunkCreator,
    setCurrentPageAC, unfollow
} from "../../redux/users-reducer";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers, getUsersSuper
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {



    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsersThunkCreator(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        let {pageSize} = this.props
        this.props.setCurrentPage(pageNumber);
        this.props.getUsersThunkCreator(pageNumber, pageSize)
    }

    render() {

        return (
            <>
                <Users
                    totalUserCount={this.props.totalUserCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    isFetching={this.props.isFetching}
                    toggleIsFetching={this.props.toggleIsFetching}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                />
            </>

        )
    }

}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUserCount: state.usersPage.totalUserCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        //users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//     }
// }

export default connect(mapStateToProps, {
    follow: follow,
    unfollow: unfollow,
    setCurrentPage: setCurrentPageAC,
    getUsersThunkCreator: getUsersThunkCreator
})(UsersContainer);
