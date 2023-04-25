import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {useForm} from "react-hook-form";
import {requiredField} from "../../utils/validators/validator";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs
        .map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>);

    let messagesElements = props.messages
        .map(m => <Message key={m.id} message={m.message}/>);

    return (
        <div className="dialogs box">
            <div className="dialogs__names">
                <ul className="dialogs__names-list">
                    {dialogsElements}
                </ul>
            </div>
            <div className="dialogs__message">
                <ul className="dialogs__message-list">
                    {messagesElements}
                </ul>

                <AddMessageForm addMessage={props.addMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {

    const {register, handleSubmit, reset} = useForm();


    const onSubmit = (data) => {
        props.addMessage(data.newMessageBody);
        console.log(data.newMessageBody)
        reset({
            newMessageBody: '',
        })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="dialogs__textarea-wrap">
                    <textarea
                        className="dialogs__textarea"
                        placeholder='Введите сообщение...'
                        {...register("newMessageBody", requiredField)}/>
                <button className="dialogs__textare-btn btn">
                    Отправить
                </button>
            </div>
        </form>
    )
}

export default Dialogs