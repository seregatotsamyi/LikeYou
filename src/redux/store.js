import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Это первый пост", likesCount: "12"},
                {id: 2, message: "Это второй пост", likesCount: "22"}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Андрей"},
                {id: 2, name: "Сeргей"},
                {id: 3, name: "Юрий"},
                {id: 4, name: "Валера"}
            ],
            messages: [
                {id: 1, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
                {
                    id: 2,
                    message: "Sint aut, pariatur aperiam doloremque omnis laborum harum molestias quasi reiciendis dolorum, amet commodi dolorem laboriosam repellat iusto quidem temporibus provident!"
                },
                {id: 3, message: "Hi"}
            ],
            newMessageBody: '',
        },
    },
    _callSubscriber() {
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);

    }

}


window.store = store;

export default store