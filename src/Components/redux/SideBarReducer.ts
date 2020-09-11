import { ActionType, FriendsPageSectionType } from './redux-store'

let initialStore = {
	friends: [
		{ id: 1, name: 'Vasya' },
		{ id: 2, name: 'Petya' },
		{ id: 3, name: 'Kolya' },
	],
}

const sideBarReducer = (state: FriendsPageSectionType = initialStore, action: ActionType) => {
	return state
}

export default sideBarReducer
