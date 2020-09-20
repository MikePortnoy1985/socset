import React from 'react'
import { connect } from 'react-redux'
import { ActionType, reduxStoreType, UsersPageType } from '../redux/redux-store'
import { followAC, setUsersAC, unfollowAC } from '../redux/UsersPageReducer'
import { Dispatch } from 'redux'
import Users from './Users'

let mapStateToProps = (state: reduxStoreType) => {
	return {
		users: state.usersPageReducer,
	}
}

let mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
	return {
		onFollowChange: (userdId: number) => {
			dispatch(followAC(userdId))
		},
		onUnFollowChange: (userdId: number) => {
			dispatch(unfollowAC(userdId))
		},
		setUsersHandler: (users: UsersPageType) => {
			dispatch(setUsersAC(users))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
