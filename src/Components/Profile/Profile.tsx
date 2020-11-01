import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './Profileinfo/ProfileInfo'
import { ProfileType } from '../redux/redux-store'

type PropsType = {
	status: string
	updateStatus: (status: string) => void
	profile: ProfileType
}

const Profile = (props: PropsType) => {
	return (
		<div>
			<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
			<MyPostsContainer />
		</div>
	)
}

export default Profile
