import React, { ChangeEvent } from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { DialogItemType, MessageItemType, ActionType } from '../redux/state'
import { addMessageCreator, updateNewPostMessageDataMessageCreator } from '../redux/DialogsPageReduce'


type DialogsPropsType = {
	dialogs: Array<DialogItemType>
	messages: Array<MessageItemType>
	newMessageDataMessage: string
	dispatch: (action:ActionType)=> void
}

const Dialogs = (props: DialogsPropsType) => {
	const dialogItems = props.dialogs.map((p: DialogItemType) => <DialogItem name={p.name} id={p.id} />)

	const messagesElements = props.messages.map((p: MessageItemType) => <Message message={p.message} />)

	let newMessageDataMessage = props.newMessageDataMessage

	let onSendMessageClick = () => {
		props.dispatch(addMessageCreator())
	}

	let onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		if (event) {
			let newMessage = event.currentTarget.value
			props.dispatch(updateNewPostMessageDataMessageCreator(newMessage))
		}
	}

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>{dialogItems}</div>
			<div className={classes.Messages}>
				{messagesElements}
				<div>
					<div>
						<textarea
							value={newMessageDataMessage}
							onChange={onNewMessageChange}
							placeholder={'Enter your message'}></textarea>
					</div>
					<div>
						<button onClick={onSendMessageClick}>Send</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
