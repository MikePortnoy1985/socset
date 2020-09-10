import { ActionType, DialogsPageType } from './redux-store'

const UPDATE_NEW_MESSAGE_DATA_MESSAGE = 'UPDATE-NEW-MESSAGE-DATA-MESSAGE'
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
	newMessageDataMessage: '',
}

const dialogsPageReducer = (state:DialogsPageType = initialStore, action: ActionType) => {
	switch (action.type) {
		case SEND_MESSAGE: {
			let stateCopy = {...state}
			let body = state.newMessageDataMessage
			stateCopy.newMessageDataMessage = ''
			stateCopy.messageData = [...state.messageData]
			stateCopy.messageData.push({id: 7, message: body})
			return stateCopy
		}
		case UPDATE_NEW_MESSAGE_DATA_MESSAGE: {
			let stateCopy = {...state}
			if (action.message) {
				stateCopy.newMessageDataMessage = action.message
			}
			return stateCopy
		}
		default:
			return state
	}
}

export const addMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewPostMessageDataMessageCreator = (message: string) => ({
	type: UPDATE_NEW_MESSAGE_DATA_MESSAGE,
	message: message,
})

export default dialogsPageReducer
