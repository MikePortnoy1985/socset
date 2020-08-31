import { ActionType, ProfilePageType, PostItemType } from './state'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profilePageReducer = (state: ProfilePageType, action: ActionType) => {
	switch (action.type) {
		case ADD_POST:
			let newPost: PostItemType = {
				id: 5,
				post: state.newPostText,
				likesCount: 0,
			}
			state.posts.push(newPost)
			state.newPostText = ''
			return state
		case UPDATE_NEW_POST_TEXT:
			if (action.postText) {
				state.newPostText = action.postText
			}
			return state
		default:
			return state
	}
}

export const addPostCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text: string) => ({ type: UPDATE_NEW_POST_TEXT, postText: text })

export default profilePageReducer
