import { DialogsPageType, ActionType } from './state'

const UPDATE_NEW_MESSAGE_DATA_MESSAGE = 'UPDATE-NEW-MESSAGE-DATA-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsPageReducer = (state: DialogsPageType, action: ActionType) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let body = state.newMessageDataMessage
			state.newMessageDataMessage = ''
			state.messageData.push({ id: 7, message: body })
			return state
		case UPDATE_NEW_MESSAGE_DATA_MESSAGE:
			if (action.message) {
				state.newMessageDataMessage = action.message
			}
			return state
		default:
			return state
	}
}

export const addMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewPostMessageDataMessageCreator = (message: string) => ({ type: UPDATE_NEW_MESSAGE_DATA_MESSAGE, message: message })

export default dialogsPageReducer
