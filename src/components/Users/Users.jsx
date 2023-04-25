import React from 'react';
import Preloader from "../Preloader/Preloader";
import Paginator from "../Dialogs/common/Paginator";
import User from "./User";



let Users = (props) => {

    // let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    // let pages = [];
    // for (let i = 1; i <= 15; i++) {
    //     pages.push(i)
    // }


    return (
        <div className="users box">
            {props.isFetching ? <Preloader/> : null}
            <ul className="users__list">
                {
                    props.users.map(u => {
                        return (
                            <User key={u.id} user={u}
                                  followingInProgress={props.followingInProgress}
                                  unfollow={props.unfollow}
                                  follow={props.follow}/>

                        )
                    })
                }
            </ul>
            <div className="pagination">
               <Paginator currentPage={props.currentPage}
                          totalItemsCount={props.totalUserCount}
                          pageSize={props.pageSize}
                          onPageChanged={props.onPageChanged}
                          portionSize={5}/>
            </div>
        </div>
    )
}


export default Users;