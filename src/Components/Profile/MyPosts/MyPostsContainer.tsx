import { addPostAC, updateNewPostTextAC } from '../../redux/ProfilePageReducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import { reduxStoreType } from '../../redux/redux-store'

let mapStateToProps = (state: reduxStoreType) => {
	return {
		posts: state.profilePageReducer,
	}
}

let mapDispatchToProps = (dispatch: (arg0: { type: 'UPDATE-NEW-POST-TEXT' | 'ADD-POST'; postText?: string }) => void) => {
	return {
		updateNewPostText: (text: string) => {
			dispatch(updateNewPostTextAC(text))
		},
		addPost: () => {
			dispatch(addPostAC())
		},
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
