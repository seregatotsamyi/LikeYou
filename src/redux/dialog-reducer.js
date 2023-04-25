
const SEND_MESSAGE_BODY = 'SEND_MESSAGE_BODY';

let initialState = {
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
    ]
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEND_MESSAGE_BODY: {
            let body = {
                id: 4,
                message: action.newMessageBody,
            }
            let stateCopy = {
                ...state,
                messages: [...state.messages, body]
            };
            return stateCopy;
        }
        default:
            return state;
    }
}



export const sendMessageAC = (newMessageBody) => {
    return {
        type: SEND_MESSAGE_BODY,
        newMessageBody
    }
}

export default dialogReducer;