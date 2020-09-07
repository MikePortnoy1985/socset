import React from 'react'
import { addPostCreator, updateNewPostTextActionCreator } from '../../redux/ProfilePageReducer'
import MyPosts from './MyPosts'
import StoreContext from '../../../StoreContext'

const MyPostsContainer = () => {
	return (
		<StoreContext.Consumer>
			{(store) => {
				const state = store.getState()
				
				let addPost = () => {
					store.dispatch(addPostCreator())
				}

				let onPostChange = (text: string) => {
					let action = updateNewPostTextActionCreator(text)
					store.dispatch(action)
				}
				return (
					<MyPosts
						updateNewPostText={onPostChange}
						addPost={addPost}
						newText={state.profilePageReducer.newPostText}
						posts={state.profilePageReducer.posts}
					/>
				)
			}}
		</StoreContext.Consumer>
	)
}

export default MyPostsContainer
