import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    return (
        <div className="profile__status-wrap">
            {!editMode &&
                <div className="profile__status">
                    <span onDoubleClick={activateEditMode}> {props.status || "----"}</span>

                </div>
            }
            {editMode &&
                <input autoFocus={true} onChange={onStatusChange}
                       className="profile__input" type="text" onBlur={deactivateEditMode}
                       value={status}/>
            }
        </div>
    )
}

export default ProfileStatusWithHooks