import Dialogs from './Dialogs'
import { addMessageAC, updateNewPostMessageDataMessageAC } from '../redux/DialogsPageReducer'
import { connect } from 'react-redux'
import { ActionType, reduxStoreType } from '../redux/redux-store'
import { Dispatch } from 'redux'

let mapStateToProps = (state: reduxStoreType) => {
	return {
		dialogs: state.dialogsPageReducer,
	}
}

let mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
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
