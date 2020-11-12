import Dialogs from './Dialogs'
import { addMessageAC } from '../redux/DialogsPageReducer'
import { connect } from 'react-redux'
import { ActionType, reduxStoreType } from '../redux/redux-store'
import { compose, Dispatch } from 'redux'
import { WithAuthRedirect } from '../HOC/WithAuthRedirect'
import React from 'react'

const mapStateToProps = (state: reduxStoreType) => {
   return {
      dialogs: state.dialogsPageReducer,
   }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
   return {
      sendMessage: (message: string) => {
         dispatch(addMessageAC(message))
      },
   }
}

export default compose<React.ComponentClass>(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs)
