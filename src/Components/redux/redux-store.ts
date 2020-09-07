import { createStore, combineReducers } from 'redux'
import profilePageReducer from './ProfilePageReducer'
import dialogsPageReducer from './DialogsPageReduce'
import sideBarReducer from './sideBarReducer'

const reducers = combineReducers({
	profilePageReducer: profilePageReducer,
	dialogsPageReducer: dialogsPageReducer,
	sideBarReducer: sideBarReducer,
})

export type reduxStoreType = ReturnType<typeof reducers>

let store = createStore(reducers)

export type ReduxStoreType = {
	subscribe: (callback: () => void) => void
	getState: () => reduxStoreType
	dispatch: (action: any) => void
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