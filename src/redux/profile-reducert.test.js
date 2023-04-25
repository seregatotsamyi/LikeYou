import profileReducer, {addPostAC, deletePost} from "./profile-reducer";

it ('new post should be added', ()=>{

    let action = addPostAC("Test text")

    let state = {
        posts: [
            {id: 1, message: "Это первый пост", likesCount: "12"},
            {id: 2, message: "Это второй пост", likesCount: "22"}
        ],
        profile: null,
        status: ""
    }

    let newState = profileReducer(state, action)

    expect(newState.posts[2].message).toBe("Test text");
})

it ('length decrameny', ()=>{

    let action = deletePost(1)

    let state = {
        posts: [
            {id: 1, message: "Это первый пост", likesCount: "12"},
            {id: 2, message: "Это второй пост", likesCount: "22"}
        ],
        profile: null,
        status: ""
    }

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1);
})

