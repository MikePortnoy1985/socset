import { ActionType, addMessageACType, DialogsPageType } from './redux-store'

const SEND_MESSAGE = 'SEND-MESSAGE'

let initialStore = {
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
	
}

const dialogsPageReducer = (state: DialogsPageType = initialStore, action: ActionType) => {
	switch (action.type) {
		case SEND_MESSAGE:
			return {
				...state,
				messageData: [...state.messageData, { id: 7, message:  action.message }],
			}
		default:
			return state
	}
}

export const addMessageAC = (message:string): addMessageACType => ({ type: SEND_MESSAGE, message })


export default dialogsPageReducer
