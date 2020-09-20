import { createStore, combineReducers } from 'redux'
import profilePageReducer from './ProfilePageReducer'
import dialogsPageReducer from './DialogsPageReducer'
import sideBarReducer from './SideBarReducer'
import usersPageReducer from './UsersPageReducer'

const reducers = combineReducers({
	profilePageReducer: profilePageReducer,
	dialogsPageReducer: dialogsPageReducer,
	sideBarReducer: sideBarReducer,
	usersPageReducer: usersPageReducer,
})

type reducersType = typeof reducers
export type reduxStoreType = ReturnType<reducersType>

let store = createStore(reducers)

// export type ReduxType = {
// 	subscribe: (callback: () => void) => void
// 	getState: () => reduxStoreType
// 	dispatch: ({ type }: { type: string }) => void
// }

//////////////////////////////// ======>> StateTypes <<======== ///////////////////////////////////////////////////

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

export type UserType = {
	name: string
	id: number
	uniqueUrlName: string | null
	photos: {
		small: string | null
		large: string | null
	}
	status: string | null
	followed: boolean
}

export type UsersPageType = {
	users: Array<UserType>
}

export type DialogsPageType = {
	messageData: Array<MessageItemType>
	dialogData: Array<DialogItemType>
	newMessageDataMessage: string
}

export type ProfilePageType = {
	posts: Array<PostItemType>
	newPostText: string
}

export type FriendsPageSectionType = {
	friends: Array<FriendsType>
}

export type StateType = {
	dialogsPage: DialogsPageType
	profilePage: ProfilePageType
	sideBar: FriendsPageSectionType
}

//////////////////////////////// ======>> ActionTypes <<======== ///////////////////////////////////////////////////

export type ActionType =
	| addPostACType
	| updateNewPostTextACType
	| addMessageACType
	| updateNewPostMessageDataMessageACType
	| followACType
	| unfollowACType
	| setUsersACType

export type addPostACType = {
	type: 'ADD-POST'
}

export type updateNewPostTextACType = {
	type: 'UPDATE-NEW-POST-TEXT'
	postText: string
}

export type addMessageACType = {
	type: 'SEND-MESSAGE'
}

export type updateNewPostMessageDataMessageACType = {
	type: 'UPDATE-NEW-MESSAGE-DATA-MESSAGE'
	message: string
}

export type followACType = {
	type: 'FOLLOW'
	userId: number
}

export type unfollowACType = {
	type: 'UNFOLLOW'
	userId: number
}

export type setUsersACType = {
	type: 'SET-USERS'
	users: UsersPageType
}

export default store
