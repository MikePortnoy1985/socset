import Dialogs from './Dialogs'
import { addMessageAC, updateNewPostMessageDataMessageAC } from '../redux/DialogsPageReducer'
import { connect } from 'react-redux'
import { reduxStoreType } from '../redux/redux-store'

let mapStateToProps = (state: reduxStoreType) => {
	return {
		dialogs: state.dialogsPageReducer,
	}
}

let mapDispatchToProps = (dispatch: (arg0: { type: 'UPDATE-NEW-MESSAGE-DATA-MESSAGE' | 'SEND-MESSAGE'; message?: string }) => void) => {
	return {
		updateNewPostMessage: (newMessage: string) => {
			dispatch(updateNewPostMessageDataMessageAC(newMessage))
		},
		sendMessage: () => {
			dispatch(addMessageAC())
		},
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
