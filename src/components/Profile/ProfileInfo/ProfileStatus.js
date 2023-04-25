import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {

        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className="profile__status-wrap">
                {!this.state.editMode &&
                    <div className="profile__status">
                        <span onDoubleClick={this.activateEditMode}> {this.props.status || "----"}</span>

                    </div>
                }
                {this.state.editMode &&
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                           className="profile__input" type="text" value={this.state.status}/>
                }
            </div>
        )

    }
}

export default ProfileStatus