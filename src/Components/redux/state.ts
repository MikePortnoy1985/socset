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

export type StoreType = {
	_state: StateType
	_rerenderEntireTree: () => void
	subscribe: (callback: () => void) => void
	getState: () => StateType
	dispatch: (action: ActionType) => void
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_DATA_MESSAGE = 'UPDATE-NEW-MESSAGE-DATA-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'

const store: StoreType = {
	_state: {
		dialogsPage: {
			messageData: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'kuku' },
				{ id: 3, message: 'Yo' },
				{ id: 4, message: 'Wazzup' },
				{ id: 5, message: 'Salut' },
				{ id: 6, message: 'Zdarova' },
			],
			dialogData: [
				{ id: 1, name: 'Dymich' },
				{ id: 2, name: 'Andrey' },
				{ id: 3, name: 'Sveta' },
				{ id: 4, name: 'Sasha' },
				{ id: 5, name: 'Viktor' },
				{ id: 6, name: 'Valera' },
			],
			newMessageDataMessage: '',
		},
		profilePage: {
			posts: [
				{ id: 1, post: 'Hi,how are you?', likesCount: 12 },
				{ id: 2, post: 'This is my first post', likesCount: 712 },
				{ id: 3, post: 'Kuku', likesCount: 142 },
				{ id: 4, post: 'Wazzup', likesCount: 120 },
				{ id: 5, post: 'Salut', likesCount: 122 },
				{ id: 6, post: 'Zdarova', likesCount: 512 },
			],
			newPostText: '',
		},
		sideBar: {
			friends: [
				{ id: 1, name: 'Vasya' },
				{ id: 2, name: 'Petya' },
				{ id: 3, name: 'Kolya' },
			],
		},
	},
	_rerenderEntireTree() {
		console.log('State changed')
	},
	subscribe(observer) {
		this._rerenderEntireTree = observer
	},
	getState() {
		return this._state
	},
	dispatch(action: ActionType) {
		if (action.type === ADD_POST) {
			let newPost: PostItemType = {
				id: 5,
				post: this._state.profilePage.newPostText,
				likesCount: 0,
			}
			this._state.profilePage.posts.push(newPost)
			this._state.profilePage.newPostText = ''
			this._rerenderEntireTree()
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			if (action.postText) {
				this._state.profilePage.newPostText = action.postText
				this._rerenderEntireTree()
			}
		} else if (action.type === SEND_MESSAGE) {
			let body = this._state.dialogsPage.newMessageDataMessage
			this._state.dialogsPage.newMessageDataMessage = ''
			this._state.dialogsPage.messageData.push({ id: 7, message: body })
			this._rerenderEntireTree()
		} else if (action.type === UPDATE_NEW_MESSAGE_DATA_MESSAGE) {
			if (action.message) {
				this._state.dialogsPage.newMessageDataMessage = action.message
				this._rerenderEntireTree()
			}
		} 
	},
}

export const addPostCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text: string) => ({ type: UPDATE_NEW_POST_TEXT, postText: text })

export const addMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewPostMessageDataMessageCreator = (message: string) => ({ type: UPDATE_NEW_MESSAGE_DATA_MESSAGE, message: message })

export default store
