import React, {useEffect, useMemo} from "react";
import {useForm} from "react-hook-form";


const ProfileDataForm = (props) => {

    const {register, handleSubmit, reset, formState: {errors}, setError} = useForm({
        defaultValues:
            useMemo(() => {
                return props.profile;
            }, [props])
    });

    const onSubmit = async (data) => {
        props.saveProfile(data).then(()=> {
            props.goToEditMode(false)
        })


    };

    useEffect(() => {
        reset(props.profile);
    }, [props.profile]);



    return <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <button className="btn">Сохранить</button>
        </div>

        <div>
            <b>FullName:</b><input type="text" placeholder={"Full name"}
                                   {...register("fullName")}/>
        </div>
        <div>
            <b>About me:</b><input type="text" placeholder={"About me"}
                                   {...register("aboutMe")}/>
        </div>
        <div>
            <b>My skills:</b><input type="text" placeholder={"Your skills"}
                                    {...register("lookingForAJobDescription")}/>
        </div>

        <ul className="profile__info-list">
            {
                Object.keys(props.profile.contacts).map(key => {
                    return <li key={key} className="profile__date">

                        <span>{key}: </span>
                        <input type="text" placeholder={props.profile.contacts.key}
                               {...register("contacts." + key)}/>


                    </li>
                })
            }
        </ul>



    </form>
}

export default ProfileDataForm
