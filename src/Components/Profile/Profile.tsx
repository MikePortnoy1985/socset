import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './Profileinfo/ProfileInfo'
import { ProfileType } from '../redux/redux-store'

type PropsType = {
	profile: ProfileType
}

const Profile = ({profile}:PropsType) => {
	return (
		<div>
			<ProfileInfo profile={profile}/>
			<MyPostsContainer />
		</div>
	)
}

export default Profile
