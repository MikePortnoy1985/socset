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

export type StoreType = {
	_state: StateType
	updateNewPostText: (newPost: string) => void
	addPost: () => void
	_rerenderEntireTree: () => void
	subscribe: (callback: () => void) => void
	getState: () => StateType
}

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
	updateNewPostText(postText: string) {
		this._state.profilePage.newPostText = postText
		this._rerenderEntireTree()
	},
	addPost() {
		const newPost: PostItemType = {
			id: 5,
			post: this._state.profilePage.newPostText,
			likesCount: 0,
		}
		this._state.profilePage.posts.push(newPost)
		this._state.profilePage.newPostText = ''
		this._rerenderEntireTree()
	},
	subscribe(observer) {
		this._rerenderEntireTree = observer
	},
	getState() {
		return this._state
	}
}

export default store
