import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { PostItemType } from '../../redux/redux-store'

type MyPostsPropsType = {
	newText: string
	posts: Array<PostItemType>
	updateNewPostText: (text: string) => void
	addPost: () => void
}

const MyPosts = (props: MyPostsPropsType) => {
	const postsElements = props.posts.map((p: PostItemType) => (
		<Post id={p.id} message={p.post} likesCount={p.likesCount} />
	))

	let newPostElement = React.createRef<HTMLTextAreaElement>()

	let onAddPost = () => {
		props.addPost()
	}

	let onPostChange = () => {
		if (newPostElement.current) {
			let text = newPostElement.current.value
			props.updateNewPostText(text)
		}
	}

	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement} value={props.newText} onChange={onPostChange} />
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
