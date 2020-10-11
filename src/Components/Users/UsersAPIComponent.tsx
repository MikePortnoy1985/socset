import React from 'react'
import { UsersPageType } from '../redux/redux-store'
import UsersPresentation from './UsersPresentation'
import { CircularProgress } from '@material-ui/core'
import { usersAPI } from '../../api/api'

type UsersPropsType = {
	users: UsersPageType
	follow: (id: number) => void
	unfollow: (id: number) => void
	setUsers: (users: UsersPageType) => void
	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (totalUsersCount: number) => void
	isFetching: (isFetching: boolean) => void
	toggleFollowingProgress: (isFetching:boolean, id: number) => void
}

class UsersAPIComponent extends React.Component<UsersPropsType, UsersPageType> {

	componentDidMount() {
		this.props.isFetching(true)
		usersAPI.getUsers(this.props.users.currentPage, this.props.users.pageSize).then((data) => {
				this.props.isFetching(false)
				this.props.setUsers(data.items)
				this.props.setTotalUsersCount(data.totalCount / 100)
			})
	}

	switchPage = (pageNumber: number) => {
		this.props.setCurrentPage(pageNumber)
		this.props.isFetching(true)
		usersAPI.getUsers(pageNumber, this.props.users.pageSize).then((data) => {
			this.props.isFetching(false)
			this.props.setUsers(data.items)
		})
	}

	render() {
		return(
		<>
			{this.props.users.isFetching
				? <CircularProgress />
				: <UsersPresentation
					switchPage={this.switchPage}
					users={this.props.users}
					onFollowChange={this.props.follow}
					onUnFollowChange={this.props.unfollow}
					toggleFollowingProgress={this.props.toggleFollowingProgress}
				/>
			}
		</>
		)
	}
}

export default UsersAPIComponent
