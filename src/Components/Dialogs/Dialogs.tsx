import React, { ChangeEvent } from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { DialogItemType, DialogsPageType, MessageItemType } from '../redux/redux-store'
import { Field, reduxForm } from 'redux-form'
import TextArea from '../FormControl/FormCOntrols'
import { maxLengthCreator, required } from '../utils/validators/validators'

type DialogsPropsType = {
	dialogs: DialogsPageType
	updateNewPostMessage: (newMessage: string) => void
	sendMessage:(message:string) => void
}

const Dialogs = ({ dialogs, sendMessage}: DialogsPropsType) => {
	const dialogItems = dialogs.dialogData.map((p: DialogItemType) => <DialogItem name={p.name} id={p.id} key={p.id} />)

	const messagesElements = dialogs.messageData.map((p: MessageItemType) => <Message message={p.message} key={p.id} />)

	let addNewMessage=(values:any)=>{
		sendMessage(values.newMessageBody)
	}

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>{dialogItems}</div>
			<div className={classes.Messages}>{messagesElements}</div>
			<AddMessageFormRedux onSubmit={addNewMessage}/>
		</div>
	)
}

type AddMessagePropsType = {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props: AddMessagePropsType) => {

	return (
		<>
			<form onSubmit={props.handleSubmit}>
				<Field component={TextArea} validate={[required, maxLength100]} name='newMessageBody' placeholder='Enter your message' />
				<button>Send</button>
			</form>
		</>
	)
}

const AddMessageFormRedux = reduxForm({form:'AddMessageForm'})(AddMessageForm)

export default Dialogs
