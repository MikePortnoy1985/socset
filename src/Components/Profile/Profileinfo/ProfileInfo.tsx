import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
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
				<img
					className={classes.ava}
					src='data:image/jpeg;base64,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'
					alt={'missing img'}
				/>
				description
			</div>
		</div>
	)
}

export default ProfileInfo
