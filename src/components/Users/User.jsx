import React from 'react';
import UserImg from "../../images/avatar/2.jpg";
import {NavLink} from "react-router-dom";


let User = (props) => {


    return (

        <li className="users__item" key={props.user.id}>
            <div className="users__top">
                <div className="users__img-wrap">
                    <NavLink to={'/profile/' + props.user.id}>
                        <img className="users__img" src={
                            props.user.photos.small != null ? props.user.photos.small : UserImg
                        } alt="avatar"/>
                    </NavLink>
                </div>
                <div className="users__content">
                    <div className="users__name">
                        {props.user.name}
                    </div>
                    <div className="users__status">
                        {props.user.status}
                    </div>
                    <div className="users__location">
                        <span>Оренбург</span>
                        <span> Россия</span>
                    </div>
                </div>
            </div>
            <div className="users__btn-wrap">
                {props.user.followed ? (
                    <button className="users__btn btn"
                            disabled={props.followingInProgress.some(id => id === props.user.id)}
                            onClick={() => {
                                props.unfollow(props.user.id)
                            }}>
                        Отписаться
                    </button>
                ) : (
                    <button className="users__btn btn"
                            disabled={props.followingInProgress.some(id => id === props.user.id)}
                            onClick={() => {
                                props.follow(props.user.id)
                            }}>
                        Подписаться
                    </button>
                )}
            </div>
        </li>

    )
}


export default User;