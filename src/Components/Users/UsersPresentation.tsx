import React from 'react'
import s from './Users.module.css'
import avatar from '../assets/images/index.jpg'
import { UsersPageType } from '../redux/redux-store'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

type PropsType = {
	users: UsersPageType
	switchPage: (page: number) => void
	onFollowChange: (id: number) => void
	onUnFollowChange: (id: number) => void
	toggleFollowingProgress: (isFetching:boolean, id: number) => void
}

const UsersPresentation = ({ users, switchPage, onFollowChange, onUnFollowChange, toggleFollowingProgress }: PropsType) => {
	let pagesCount = Math.ceil(users.totalUsersCount / users.pageSize)
	let pages: number[] = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	return (
		<div>
			<div>
				{pages.map((p) => (
					<span
						key={p}
						className={users.currentPage === p ? s.selectedPage : ''}
						onClick={() => {
							switchPage(p)
						}}>
						{p}
					</span>
				))}
			</div>
			{users.users.map((i) => (
				<div key={i.id}>
					<span>
						<div>
							<NavLink to={'/profile/' + i.id}>
								<img className={s.userPhoto} src={i.photos.small === null ? avatar : i.photos.small} alt={'avatar'} />
							</NavLink>
						</div>
						<div>
							{i.followed ? (
								<button disabled={users.followingInProgress.some(id => id === i.id)}
									onClick={() => {
										toggleFollowingProgress(true, i.id)
										axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${i.id}`,{ withCredentials: true, headers: { 'API-KEY':'449db723-8aa5-493f-9ee5-86de5ac1dae8' }}).then((response) => {
											if (response.data.resultCode === 0) {
												onUnFollowChange(i.id)
											}
											toggleFollowingProgress(false, i.id)
										})
									}}>
									Unfollow
								</button>
							) : (
								<button disabled={users.followingInProgress.some(id => id === i.id)}
									onClick={() => {
										toggleFollowingProgress(true, i.id)
										axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${i.id}`, {}, { withCredentials: true, headers: { 'API-KEY':'449db723-8aa5-493f-9ee5-86de5ac1dae8' } }).then((response) => {
											if (response.data.resultCode === 0) {
												onFollowChange(i.id)
											}
											toggleFollowingProgress(false, i.id)
										})
									}}>
									Follow
								</button>
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

export default UsersPresentation
