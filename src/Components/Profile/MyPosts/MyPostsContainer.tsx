import { addPost, updateNewPostText } from '../../redux/ProfilePageReducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import { ActionType, reduxStoreType } from '../../redux/redux-store'
import { Dispatch } from 'redux'

let mapStateToProps = (state: reduxStoreType) => {
	return {
		posts: state.profilePageReducer,
	}
}

let mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
	return {
		updateNewPostText: (text: string) => {
			dispatch(updateNewPostText(text))
		},
		addPost: () => {
			dispatch(addPost())
		},
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
