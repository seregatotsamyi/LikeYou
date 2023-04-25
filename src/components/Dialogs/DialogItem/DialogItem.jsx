import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <li className="dialogs__name _active">
            <NavLink to={path} className="dialogs__name-text">{props.name}</NavLink>
        </li>
    )
}

export default DialogItem