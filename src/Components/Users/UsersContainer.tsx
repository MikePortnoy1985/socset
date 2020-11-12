import { connect } from 'react-redux'
import { reduxStoreType } from '../redux/redux-store'
import { follow, getUsersThunkCreator, setCurrentPage, unfollow } from '../redux/UsersPageReducer'
import UsersAPIComponent from './UsersAPIComponent'
import { WithAuthRedirect } from '../HOC/WithAuthRedirect'
import { compose } from 'redux'
import React from 'react'

const mapStateToProps = (state: reduxStoreType) => {
   return {
      users: state.usersPageReducer,
   }
}

export default compose<React.ComponentClass>(
   connect(mapStateToProps, {
      follow,
      unfollow,
      setCurrentPage,
      getUsersThunkCreator,
   }),
   WithAuthRedirect,
)(UsersAPIComponent)
