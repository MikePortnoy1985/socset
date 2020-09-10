import { createStore, combineReducers } from 'redux'
import profilePageReducer from './ProfilePageReducer'
import dialogsPageReducer from './DialogsPageReducer'
import sideBarReducer from './sideBarReducer'

const reducers = combineReducers({
	profilePageReducer: profilePageReducer,
	dialogsPageReducer: dialogsPageReducer,
	sideBarReducer: sideBarReducer,
})

type reducersType = typeof reducers
export type reduxStoreType = ReturnType<reducersType>

let store = createStore(reducers)

export type ReduxType = {
	subscribe: (callback: () => void) => void
	getState: () => reduxStoreType
	dispatch: ({type}:{type:string}) => void
}

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

export type ActionType = {
	type: string
	postText?: string 
	message?: string 
}

export default store
