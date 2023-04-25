import React, {useEffect, useState} from "react";
import logo from "../../images/logo.svg";
import { useForm } from "react-hook-form";
import {loginField, requiredField} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

const Login = ({isAuth, login, errorResponse}) => {

    if (isAuth) {
       return <Navigate to={"/profile"} />
    }
    return (
        <div className="login box">
          <LoginForm login={login} errorResponse={errorResponse} />
        </div>
    )
}

const LoginForm = (props) => {

    const { register, handleSubmit, reset,  formState: { errors, isValid , isDirty },  setError } = useForm({
        mode: "onBlur",
    });


    const onSubmit = data => {
        props.login(data.login, data.pass, data.rememberMe)
        reset({
            login: '',
            pass: '',
        })
    };

    const [user, userData] = useState(null)

    useEffect(() => {
        reset(user)
    }, [user])



    return (
        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>

            <div className="login__form-top">
                <img className="login__form-img" src={logo} alt="logo"/>
                <div className="login__form-title">
                    Авторизуйся пожалуйста :)
                </div>
            </div>

            <div className="login__input-wrap">
                <div className="input">
                    <label className="input__label" htmlFor="login">
                        Your login
                    </label>
                    <input className= {`input__input ${errors.login && "_error"}`} type="text" id="login" placeholder={"Your login"}
                           {...register("login", loginField)}/>

                    {errors.login && (
                        <div className="input__error">
                            {errors.login.message}
                        </div>
                    )}
                </div>
                <div className="input">
                    <label className="input__label" htmlFor="pass">
                        Your password
                    </label>
                    <input className={`input__input  ${errors.pass && "_error"}`} type="password" id="pass"  placeholder={"Your password"}
                           {...register("pass", requiredField)}/>
                    {errors.pass && (
                        <div className="input__error">
                            {errors.pass.message}
                        </div>
                    )}
                </div>
                <div className="input">
                    <input className="input__input input__input_check" type="checkbox" id="check"
                           {...register("rememberMe")}/>
                    <label className="input__label input__label_check" htmlFor="check">
                        Remember me
                    </label>
                </div>
            </div>
            {props.errorResponse.length > 0 && (
                <div className="login__error">
                    {props.errorResponse}
                </div>
            )   }



            <button className="login__btn btn" disabled={!isDirty || !isValid}>
                Авторизоваться
            </button>

        </form>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    errorResponse : state.auth.error
})


export default connect(mapStateToProps, {login})(Login)