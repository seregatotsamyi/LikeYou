import avatar from "../../../../images/avatar/1.png";

const Post = (props) => {
    return (

        <li className="posts__list-item box">
            <div className="posts__list-item-top">
                <div className="posts__list-img-wrap">
                    <img className="posts__list-img" src={avatar} alt="avatar" width="50" height="50" />
                </div>
                <div className="posts__list-text">
                    {props.message}
                </div>
            </div>
            <div className="posts__list-item-bottom">
                <span>Лайков:</span>
                <span>{props.likesCount}</span>
            </div>
        </li>

);
}

export default Post;