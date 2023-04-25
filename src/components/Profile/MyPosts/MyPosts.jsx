import React from 'react';
import Post from "./Post/Post";
import {useForm} from "react-hook-form";
import {requiredField} from "../../../utils/validators/validator";


const MyPosts = React.memo(props => {

    let postsElements = props.posts.map((m) => <Post
        key={m.id} message={m.message} likesCount={m.likesCount}/>);


    return (
        <div className="profile__posts posts">
            <div className="posts__new box">
                <div className="posts__new-title">
                    Мои посты
                </div>

                <FormsMyPosts addPost={props.addPost}/>

            </div>
            <ul className="posts__list">
                {postsElements}
            </ul>
        </div>
    );
});

const FormsMyPosts = (props) => {

    const { register, handleSubmit, reset  } = useForm();


    const onSubmit = (data) => {
        props.addPost(data.newMessagePost);
        reset({
            newMessagePost: '',
        })
    };

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
         <textarea
                   className="posts__input"
                   placeholder='Введите сообщение'
                   {...register("newMessagePost", requiredField)}/>
        <button className="posts__btn btn">
            Опубликовать
        </button>
    </form>
    )
}

export default MyPosts;