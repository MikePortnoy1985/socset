import {
	ActionType,
	addPostACType,
	PostItemType,
	ProfilePageType,
	ProfileType,
	setProfileACType,
	setStatusACType,
	updateNewPostTextACType,
} from './redux-store'
import { profileAPI, usersAPI } from '../../api/api'
import { Dispatch } from 'redux'


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_PROFILE = 'SET-PROFILE'
const SET_STATUS = 'SET-STATUS'

let initialStore = {
	posts: [
		{ id: 1, post: 'Hi,how are you?', likesCount: 12 },
		{ id: 2, post: 'This is my first post', likesCount: 712 },
		{ id: 3, post: 'Kuku', likesCount: 142 },
		{ id: 4, post: 'Wazzup', likesCount: 120 },
		{ id: 5, post: 'Salut', likesCount: 122 },
		{ id: 6, post: 'Zdarova', likesCount: 512 },
	],
	newPostText: '',
	profile: {
		aboutMe: null,
		contacts: {
			facebook: null,
			website: null,
			vk: null,
			twitter: null,
			instagram: null,
			youtube: null,
			github: null,
			mainLink: null,
		},
		lookingForAJob: false,
		lookingForAJobDescription: null,
		fullName: null,
		userId: 0,
		photos: {
			small: null,
			large: null,
		},
	},
	status: ''
}

const profilePageReducer = (state: ProfilePageType = initialStore, action: ActionType) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost: PostItemType = {
				id: 5,
				post: state.newPostText,
				likesCount: 0,
			}
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: '',
			}
		}
		case UPDATE_NEW_POST_TEXT: {
			if (action.postText) {
				return {
					...state,
					newPostText: action.postText,
				}
			} else {
				return state
			}
		}
		case SET_PROFILE: {
			return {
				...state,
				profile: action.profile,
			}
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status,
			}
		}
		default:
			return state
	}
}

export const addPost = (): addPostACType => ({ type: ADD_POST })
export const updateNewPostText = (text: string): updateNewPostTextACType => ({
	type: UPDATE_NEW_POST_TEXT,
	postText: text,
})
export const setProfile = (profile: ProfileType): setProfileACType => ({ type: SET_PROFILE, profile: profile })
export const setStatus = (status: string): setStatusACType => ({ type: SET_STATUS, status})

export const getUserProfile = (id = '2') => (dispatch: Dispatch<ActionType>) => {
	usersAPI.getProfile(id).then((response) => {
		dispatch(setProfile(response.data))
	})

}
export const getStatus = (id='2') => (dispatch: Dispatch<ActionType>) => {
	profileAPI.getStatus(id).then((response) => {
		dispatch(setStatus(response.data))
	})
}

export const updateStatus = (status:string) => (dispatch: Dispatch<ActionType>) => {
	profileAPI.updateStatus(status).then((response) => {
		if(response.data.resultCode === 0){
			dispatch(setStatus(status))
		}
	})
}

export default profilePageReducer
