import React from 'react'
// import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './Profileinfo/ProfileInfo'
import { PostItemType, ActionType } from '../redux/state'

type ProfilePropsType = {
	newText: string
	posts: Array<PostItemType>
	dispatch: (action:ActionType)=>void
}

const Profile = (props: ProfilePropsType) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts
				posts={props.posts}
				newText={props.newText}
				dispatch={props.dispatch}
			/>
		</div>
	)
}

export default Profile
