import React, { ChangeEvent } from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { DialogItemType, DialogsPageType, MessageItemType } from '../redux/redux-store'
import { Redirect } from 'react-router-dom'

type DialogsPropsType = {
	dialogs: DialogsPageType
	updateNewPostMessage: (newMessage: string) => void
	sendMessage: () => void
	isAuth: boolean
}

const Dialogs = ({ dialogs, updateNewPostMessage, sendMessage, isAuth }: DialogsPropsType) => {
	const dialogItems = dialogs.dialogData.map((p: DialogItemType) => <DialogItem name={p.name} id={p.id} key={p.id} />)

	const messagesElements = dialogs.messageData.map((p: MessageItemType) => <Message message={p.message} key={p.id} />)

	let newMessageDataMessage = dialogs.newMessageDataMessage

	let onSendMessageClick = () => {
		sendMessage()
	}

	let onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		if (event) {
			let newMessage = event.currentTarget.value
			updateNewPostMessage(newMessage)
		}
	}

	if(!isAuth) return <Redirect to={'/login'}/>

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>{dialogItems}</div>
			<div className={classes.Messages}>
				{messagesElements}
				<div>
					<div>
						<textarea value={newMessageDataMessage} onChange={onNewMessageChange} placeholder={'Enter your message'}>
							it_inkubator
						</textarea>
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
