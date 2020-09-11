import React from 'react'
import { UsersPageType } from '../redux/redux-store'

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

const Users = ({ users, onFollowChange, setUsersHandler, onUnFollowChange }: UsersPropsType) => {
	return (
		<div>
			{users.users.map((i) => (
				<div key={i.id}>
					<span>
						<div>
							<img style={imgStyles} src={i.photoUrl} alt={'avatar'} />
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
						<span>
							<div>{i.fullName}</div>
							<div>{i.status}</div>
						</span>
						<span>
							<div>{i.location.country}</div>
							<div>{i.location.city}</div>
						</span>
					</span>
				</div>
			))}
		</div>
	)
}

export default Users
