import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextArea from '../../FormControl/FormCOntrols'
import { PostItemType, ProfilePageType } from '../../redux/redux-store'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

type MyPostsPropsType = {
   posts: ProfilePageType
   addPost: (text: string) => void
}

class MyPosts extends React.Component<MyPostsPropsType, MyPosts> {
   shouldComponentUpdate(nextProps: MyPostsPropsType, nextState: MyPosts) {
      return nextProps !== this.props || nextState !== this.state
   }

   render() {
      const { posts, addPost } = this.props
      const postsElements = posts.posts.map((p: PostItemType) => (
         <Post key={p.id} id={p.id} message={p.post} likesCount={p.likesCount} />
      ))

      const onAddPost = (values: any) => {
         addPost(values.newPostText)
      }

      return (
         <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostRedux onSubmit={onAddPost} />
            <div className={classes.posts}>{postsElements}</div>
         </div>
      )
   }
}

type AddNewPostFormType = {
   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const maxLength15 = maxLengthCreator(15)

const AddNewPostForm = (props: AddNewPostFormType) => {
   return (
      <>
         <form onSubmit={props.handleSubmit}>
            <div>
               <Field
                  component={TextArea}
                  name='newPostText'
                  placeholder='Enter your message'
                  validate={[required, maxLength15]}
               />
            </div>
            <div>
               <button>Add post</button>
            </div>
         </form>
      </>
   )
}

const AddNewPostRedux = reduxForm({ form: 'AddNewPostForm' })(AddNewPostForm)

export default MyPosts
