import {addPostCreator, updateNewPostTextActionCreator} from '../../redux/ProfilePageReducer'
import MyPosts from './MyPosts'
import {connect} from "react-redux";
import {reduxStoreType} from "../../redux/redux-store";


let mapStateToProps = (state: reduxStoreType) => {
    return {
        posts: state.profilePageReducer
    }
}

let mapDispatchToProps = (dispatch: (arg0: { type: string; postText?: string; }) => void) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostCreator())
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
