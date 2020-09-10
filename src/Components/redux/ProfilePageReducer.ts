import { ActionType, PostItemType, ProfilePageType } from './redux-store'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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
}

const profilePageReducer = (state:ProfilePageType = initialStore, action: ActionType) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost: PostItemType = {
				id: 5,
				post: state.newPostText,
				likesCount: 0,
			}
			let stateCopy = {...state}
			stateCopy.posts = [...state.posts]
			stateCopy.posts.push(newPost)
			stateCopy.newPostText=''
			return stateCopy
		}
		case UPDATE_NEW_POST_TEXT: {
			let stateCopy = {...state}
			if (action.postText) {
				stateCopy.newPostText = action.postText
			}
			return stateCopy
		}
		default:
			return state
	}
}

export const addPostCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text: string) => ({ type: UPDATE_NEW_POST_TEXT, postText: text })

export default profilePageReducer
