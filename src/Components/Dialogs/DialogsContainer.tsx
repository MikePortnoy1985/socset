import React from 'react'
import Dialogs from './Dialogs'
import { addMessageCreator, updateNewPostMessageDataMessageCreator } from '../redux/DialogsPageReduce'
import StoreContext from '../../StoreContext'

const DialogsContainer = () => {
	return (
		<StoreContext.Consumer>
			{(store) => {
				const state = store.getState()
				let onSendMessageClick = () => {
					store.dispatch(addMessageCreator())
				}

				let onNewMessageChange = (newMessage: string) => {
					store.dispatch(updateNewPostMessageDataMessageCreator(newMessage))
				}

				return (
					<Dialogs
						updateNewPostMessage={onNewMessageChange}
						sendMessage={onSendMessageClick}
						dialogs={state.dialogsPageReducer.dialogData}
						messages={state.dialogsPageReducer.messageData}
						newMessageDataMessage={state.dialogsPageReducer.newMessageDataMessage}
					/>
				)
			}}
		</StoreContext.Consumer>
	)
}

export default DialogsContainer
