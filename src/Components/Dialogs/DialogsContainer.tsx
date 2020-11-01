import Dialogs from './Dialogs'
import { addMessageAC, updateNewPostMessageDataMessageAC } from '../redux/DialogsPageReducer'
import { connect } from 'react-redux'
import { ActionType, reduxStoreType } from '../redux/redux-store'
import { compose, Dispatch } from 'redux'
import { WithAuthRedirect } from '../HOC/WithAuthRedirect'

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

export default compose<React.ComponentClass>(
	connect(mapStateToProps, mapDispatchToProps),
	WithAuthRedirect
)(Dialogs)


