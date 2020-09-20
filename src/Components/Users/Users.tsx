import React from 'react'
import { UsersPageType } from '../redux/redux-store'
import axios from 'axios'
import avatar from '../assets/images/index.jpg'

export type UsersPropsType = {
	users: UsersPageType
	onFollowChange: (id: number) => void
	onUnFollowChange: (id: number) => void
	setUsersHandler: (users: UsersPageType) => void
}

const imgStyles = {
	width: '100px',
	height: '100px',
}

class UsersC extends React.Component<UsersPropsType, UsersPageType> {
	constructor(props: UsersPropsType) {
		super(props)
	}

	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
			this.props.setUsersHandler(response.data.items)
		})
	}

	render() {
		const { users, onFollowChange, onUnFollowChange } = this.props
		return (
			<div>
				{users.users.map((i) => (
					<div key={i.id}>
						<span>
							<div>
								<img style={imgStyles} src={i.photos.small === null ? avatar : i.photos.small} alt={'avatar'} />
							</div>
							<div>
								{i.followed ? (
									<button onClick={() => onUnFollowChange(i.id)}>Unfollow</button>
								) : (
									<button onClick={() => onFollowChange(i.id)}>Follow</button>
								)}
							</div>
						</span>
						<span>
							<div>{i.name}</div>
							<div>{i.status}</div>
						</span>
					</div>
				))}
			</div>
		)
	}
}

export default UsersC
