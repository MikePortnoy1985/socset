import { createStore, combineReducers, applyMiddleware } from 'redux'
import profilePageReducer from './ProfilePageReducer'
import dialogsPageReducer from './DialogsPageReducer'
import sideBarReducer from './SideBarReducer'
import usersPageReducer from './UsersPageReducer'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
	profilePageReducer: profilePageReducer,
	dialogsPageReducer: dialogsPageReducer,
	sideBarReducer: sideBarReducer,
	usersPageReducer: usersPageReducer,
	auth: authReducer,
	form: formReducer
})

type reducersType = typeof reducers
export type reduxStoreType = ReturnType<reducersType>

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

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

export type ProfileType = {
	aboutMe: string | null
	contacts: {
		facebook: string | null
		website: string | null
		vk: string | null
		twitter: string | null
		instagram: string | null
		youtube: string | null
		github: string | null
		mainLink: string | null
	}
	lookingForAJob: boolean
	lookingForAJobDescription: string | null
	fullName: string | null
	userId: number
	photos: {
		small: string | null
		large: string | null
	}
}

export type UsersPageType = {
	users: Array<UserType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: Array<number>
}

export type DialogsPageType = {
	messageData: Array<MessageItemType>
	dialogData: Array<DialogItemType>
	newMessageDataMessage: string
}

export type ProfilePageType = {
	posts: Array<PostItemType>
	newPostText: string
	profile: ProfileType
	status: string
}

export type FriendsPageSectionType = {
	friends: Array<FriendsType>
}

export type AuthReducerStateType = {
	id: number | null
	email: string | null
	login: string | null
	isAuth: boolean
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
	| setCurrentPageACType
	| setTotalUsersCountACType
	| isFetchingACType
	| setProfileACType
	| setUserDataACType
	| toggleFollowingProgressACType
	| setStatusACType

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

export type setCurrentPageACType = {
	type: 'SET-CURRENT-PAGE'
	currentPage: number
}

export type setTotalUsersCountACType = {
	type: 'SET-TOTAL-USERS-COUNT'
	totalUsersCount: number
}

export type isFetchingACType = {
	type: 'IS-FETCHING'
	isFetching: boolean
}

export type setProfileACType = {
	type: 'SET-PROFILE'
	profile: ProfileType
}

export type setUserDataACType = {
	type: 'SET-USER-DATA'
	data: AuthReducerStateType
}

export type toggleFollowingProgressACType = {
	type: 'TOGGLE-IS-FETCHING'
	isFetching: boolean
	id: number
}

export type setStatusACType = {
	type: 'SET-STATUS'
	status: string
}

export default store
