import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { PostItemType, ProfilePageType } from '../../redux/redux-store'

type MyPostsPropsType = {
	posts: ProfilePageType
	updateNewPostText: (text: string) => void
	addPost: () => void
}

const MyPosts = ({ posts, updateNewPostText, addPost }: MyPostsPropsType) => {
	const postsElements = posts.posts.map((p: PostItemType) => (
		<Post id={p.id} message={p.post} likesCount={p.likesCount} />
	))

	let newPostElement = React.createRef<HTMLTextAreaElement>()

	let onAddPost = () => {
		addPost()
	}

	let onPostChange = () => {
		if (newPostElement.current) {
			let text = newPostElement.current.value
			updateNewPostText(text)
		}
	}

	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement} value={posts.newPostText} onChange={onPostChange} />
				</div>
				<div>
					<button onClick={onAddPost}>Add post</button>
				</div>
			</div>
			<div className={classes.posts}>{postsElements}</div>
		</div>
	)
}

export default MyPosts
