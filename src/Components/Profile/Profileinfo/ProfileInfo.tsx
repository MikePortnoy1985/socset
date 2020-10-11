import React from 'react'
import classes from './ProfileInfo.module.css'
import { ProfileType } from '../../redux/redux-store'
import { CircularProgress } from '@material-ui/core'

type PropsType = {
	profile: ProfileType
}

const ProfileInfo = ({profile}:PropsType) => {

	return (
		<div>
			<div>
				<img className={classes.screen} src={'https://www.vladmuz.ru/travel_photos/crimea/04a-big.jpg'} alt={'missing img'} />
			</div>
			<div className={classes.description}>
				{profile ?
					<img
					className={classes.ava}
					src={profile.photos.large ? profile.photos.large : "https://cdn.pixabay.com/photo/2012/04/24/17/38/warning-40593_960_720.png"}
					alt={'missing img'}
				/>
				: <CircularProgress />
				}
				description
			</div>
		</div>
	)
}

export default ProfileInfo
