import { addPost } from '../../redux/ProfilePageReducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import { ActionType, reduxStoreType } from '../../redux/redux-store'
import { Dispatch } from 'redux'

const mapStateToProps = (state: reduxStoreType) => {
   return {
      posts: state.profilePageReducer,
   }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
   return {
      addPost: (text: string) => {
         dispatch(addPost(text))
      },
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
