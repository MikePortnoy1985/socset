import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { PostItemType, ActionType } from '../../redux/state'
import { addPostCreator, updateNewPostTextActionCreator } from '../../redux/ProfilePageReducer'

type MyPostsPropsType = {
	newText: string
	posts: Array<PostItemType>
	dispatch: (action: ActionType) => void
}

const MyPosts = (props: MyPostsPropsType) => {
	const postsElements = props.posts.map((p: PostItemType) => (
		<Post id={p.id} message={p.post} likesCount={p.likesCount} />
	))

	let newPostElement = React.createRef<HTMLTextAreaElement>()

	let addPost = () => {
		props.dispatch(addPostCreator())
	}

	let onPostChange = () => {
		if (newPostElement.current) {
			let text = newPostElement.current.value
			props.dispatch(updateNewPostTextActionCreator(text))
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
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
			<div className={classes.posts}>{postsElements}</div>
		</div>
	)
}

export default MyPosts
