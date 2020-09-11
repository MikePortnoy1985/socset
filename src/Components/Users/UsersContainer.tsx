import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import { reduxStoreType, UsersPageType } from '../redux/redux-store'
import { followAC, setUsersAC, unfollowAC } from '../redux/UsersPageReducer'

let mapStateToProps = (state: reduxStoreType) => {
	return {
		users: state.usersPageReducer,
	}
}

let mapDispatchToProps = (dispatch: (arg0: { type: 'FOLLOW' | 'UNFOLLOW' | 'SET-USERS'; userId?: number; users?: UsersPageType }) => void) => {
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
