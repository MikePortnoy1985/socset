import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './Profileinfo/ProfileInfo'
import { PostItemType } from '../redux/state'

type ProfilePropsType = {
	newText: string
	posts: Array<PostItemType>
	addPost: () => void
	updateNewPostText: (newPostText: string) => void
}

const Profile = (props: ProfilePropsType) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts
				posts={props.posts}
				newText={props.newText}
				addPost={props.addPost}
				updateNewPostText={props.updateNewPostText}
			/>
		</div>
	)
}

export default Profile
