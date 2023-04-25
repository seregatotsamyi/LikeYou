import {NavLink} from "react-router-dom";
import usersIcon from "../../images/icon/users.svg";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";

const Navbar = (props) => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item _active">
                    <NavLink className={({isActive}) => (isActive ? 'nav__link _active' : 'nav__link')} to="/profile">
                        <svg className="nav__link-img" width="24" height="24" viewBox="0 0 24 24"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M12.0002 3.25C10.0672 3.25 8.50021 4.817 8.50021 6.75C8.50021 8.683 10.0672 10.25 12.0002 10.25C13.9332 10.25 15.5002 8.683 15.5002 6.75C15.5002 4.817 13.9332 3.25 12.0002 3.25ZM6.50021 6.75C6.50021 3.71243 8.96264 1.25 12.0002 1.25C15.0378 1.25 17.5002 3.71243 17.5002 6.75C17.5002 9.78757 15.0378 12.25 12.0002 12.25C8.96264 12.25 6.50021 9.78757 6.50021 6.75Z"
                                  fill="#1E212C"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M6.10427 15.25C5.41095 15.25 4.86904 15.5876 4.64907 16.0726C4.34461 16.7439 4.06891 17.5432 4.00385 18.3012C3.97477 18.64 4.11605 18.8897 4.31073 19.0107C5.33989 19.65 7.7246 20.75 12.0002 20.75C16.2758 20.75 18.6605 19.65 19.6897 19.0107C19.8844 18.8897 20.0257 18.64 19.9966 18.3012C19.9315 17.5432 19.6558 16.7439 19.3514 16.0726C19.1314 15.5876 18.5895 15.25 17.8961 15.25H6.10427ZM2.82764 15.2466C3.43558 13.9061 4.79312 13.25 6.10427 13.25H17.8961C19.2073 13.25 20.5648 13.9061 21.1728 15.2466C21.522 16.0165 21.8967 17.0515 21.9892 18.1301C22.0735 19.1124 21.6653 20.1379 20.745 20.7096C19.3915 21.5504 16.6398 22.75 12.0002 22.75C7.36061 22.75 4.60891 21.5504 3.25537 20.7096C2.33511 20.1379 1.92687 19.1124 2.01118 18.1301C2.10375 17.0515 2.47845 16.0165 2.82764 15.2466Z"
                                  fill="#1E212C"/>
                        </svg>
                        <span>Профиль</span>
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className={({isActive}) => (isActive ? 'nav__link _active' : 'nav__link')} to="/dialogs">
                        <svg className="nav__link-img" width="24" height="24" viewBox="0 0 24 24"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M22.75 18V7C22.75 5.34314 21.4069 4 19.75 4L4.25 4.00002C2.59314 4.00002 1.25 5.34316 1.25 7.00002V18C1.25 19.6568 2.59314 21 4.25 21L19.75 21C21.4069 21 22.75 19.6568 22.75 18ZM20.75 9.25946V18C20.75 18.5523 20.3023 19 19.75 19L4.25 19C3.69772 19 3.25 18.5523 3.25 18L3.25 9.25933L10.3132 14.0623C11.3312 14.7546 12.6689 14.7546 13.687 14.0623L20.75 9.25946ZM20.7386 6.84861C20.6657 6.36816 20.2508 6 19.75 6L4.25 6.00002C3.74922 6.00002 3.33442 6.36811 3.26141 6.84849L11.4378 12.4084C11.7771 12.6392 12.223 12.6392 12.5624 12.4084L20.7386 6.84861Z"
                                  fill="#1E212C"/>
                        </svg>
                        <span>Сообщение</span>
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className={({isActive}) => (isActive ? 'nav__link _active' : 'nav__link')} to="/users">
                        <img className="nav__link-img" src={usersIcon} alt="users" width="24" height="24"/>
                        <span>Пользователи</span>
                    </NavLink>
                </li>
                {(props.isAuth ?

                <li className="nav__item">
                    <button className={"nav__link"} onClick={props.logout}>
                        <img className="nav__link-img" src={usersIcon} alt="users" width="24" height="24"/>
                        <span>Выйти</span>
                    </button>

                </li> : null
                    )}

            </ul>
        </nav>
    );
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {logout})(Navbar);