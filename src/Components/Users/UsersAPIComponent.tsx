import React from 'react'
import { UsersPageType } from '../redux/redux-store'
import UsersPresentation from './UsersPresentation'
import { CircularProgress } from '@material-ui/core'
import { usersAPI } from '../../api/api'

type UsersPropsType = {
	users: UsersPageType
	follow: (id: number) => void
	unfollow: (id: number) => void
	setCurrentPage: (currentPage: number) => void
	getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}

class UsersAPIComponent extends React.Component<UsersPropsType, UsersPageType> {
	componentDidMount() {
		this.props.getUsersThunkCreator(this.props.users.currentPage, this.props.users.pageSize)
	}

	switchPage = (pageNumber: number) => {
		this.props.getUsersThunkCreator(pageNumber, this.props.users.pageSize)
	}

	render() {
		return (
			<>
				{this.props.users.isFetching ? (
					<CircularProgress />
				) : (
					<UsersPresentation
						switchPage={this.switchPage}
						users={this.props.users}
						onFollowChange={this.props.follow}
						onUnFollowChange={this.props.unfollow}
					/>
				)}
			</>
		)
	}
}

export default UsersAPIComponent
