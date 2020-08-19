import {rerenderEntireTree} from "../../render";

export type DialogItemType = {
    id: number
    name: string
}

export type MessageItemType = {
    id: number
    message: string
}

export type PostItemType = {
    id: number
    post: string
    likesCount: number
}

export type FriendsType = {
    id: number
    name: string
}

export type DialogsPageType = {
    messageData: Array<MessageItemType>
    dialogData: Array<DialogItemType>
}

export type ProfilePageType = {
    posts: Array<PostItemType>
}

export type FriendsPageSectionType = {
    friends: Array<FriendsType>
}

export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sideBar: FriendsPageSectionType
}

let state: StateType = {
    dialogsPage: {
        messageData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'kuku'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Wazzup'},
            {id: 5, message: 'Salut'},
            {id: 6, message: 'Zdarova'}
        ],
        dialogData: [
            {id: 1, name: 'Dymich'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ]
    },
    profilePage: {
        posts: [
            {id: 1, post: 'Hi,how are you?', likesCount: 12},
            {id: 2, post: 'This is my first post', likesCount: 712},
            {id: 3, post: 'Kuku', likesCount: 142},
            {id: 4, post: 'Wazzup', likesCount: 120},
            {id: 5, post: 'Salut', likesCount: 122},
            {id: 6, post: 'Zdarova', likesCount: 512}
        ]
    },
    sideBar: {
        friends: [
            {id: 1, name: 'Vasya'},
            {id: 2, name: 'Petya'},
            {id: 3, name: 'Kolya'}
        ]
    }
}

export let addPost = (postMessage: string) => {
    const newPost: PostItemType = {
        id: 5,
        post: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state