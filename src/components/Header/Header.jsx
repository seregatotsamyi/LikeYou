import logo from "../../images/logo.svg";
import auth from "../../images/icon/log.svg"
import {NavLink} from "react-router-dom";
import UserImg from "../../images/avatar/2.jpg";

const Header = (props) => {

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a href='#s' className="logo">
                        <img className="logo__img" src={logo} alt="logo"/>
                    </a>
                    <div className="header__auth">
                        {
                            props.isAuth ? <div className="header__authorized">
                                <img className="header__authorized-img" src={props.profile.photos.small != null ? props.profile.photos.small : UserImg} alt="avatar"
                                     width="30" height="30"/>
                                <span className="header__authorized-login">
                                    {props.login}
                                </span>
                            </div> : <NavLink className="header__login" to="/login">
                                <img className="header__login-img" src={auth} alt="login" width="30"
                                     height="30"/>
                                <span className="header__login-text">
                              Войти
                            </span>
                            </NavLink>
                        }

                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;