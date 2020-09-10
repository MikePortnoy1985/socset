import Dialogs from './Dialogs'
import {addMessageCreator, updateNewPostMessageDataMessageCreator} from '../redux/DialogsPageReducer'
import {connect} from "react-redux";
import {reduxStoreType} from "../redux/redux-store";


let mapStateToProps = (state: reduxStoreType) => {
    return {
        dialogs: state.dialogsPageReducer
    }
}

let mapDispatchToProps = (dispatch: (arg0: { type: string; message?: string; }) => void) => {
    return {
        updateNewPostMessage: (newMessage: string) => {
            dispatch(updateNewPostMessageDataMessageCreator(newMessage))
        },
        sendMessage: () => {
            dispatch(addMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
