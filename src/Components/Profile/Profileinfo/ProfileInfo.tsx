import React from 'react'
import classes from './ProfileInfo.module.css'
import { ProfileType } from '../../redux/redux-store'
import { CircularProgress } from '@material-ui/core'
import ProfileStatus from './ProfileStatus'

type PropsType = {
	profile: ProfileType
	status: string
	updateStatus: (status: string) => void
}

const ProfileInfo = (props: PropsType) => {
	return (
		<div>
			<div>
				<img
					className={classes.screen}
					src={'https://www.vladmuz.ru/travel_photos/crimea/04a-big.jpg'}
					alt={'missing img'}
				/>
			</div>
			<div className={classes.description}>
				{props.profile ? (
					<>
						<img
						className={classes.ava}
						src={
							props.profile.photos.large
								? props.profile.photos.large
								: 'https://cdn.pixabay.com/photo/2012/04/24/17/38/warning-40593_960_720.png'
						}
						alt={'missing img'}
						/>
						<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
					</>
				) : (
					<CircularProgress />
				)}
				description
			</div>
		</div>
	)
}

export default ProfileInfo
