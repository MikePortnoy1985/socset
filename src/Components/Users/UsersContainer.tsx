import { connect } from 'react-redux'
import { reduxStoreType } from '../redux/redux-store'
import { follow, getUsersThunkCreator, setCurrentPage, unfollow } from '../redux/UsersPageReducer'
import UsersAPIComponent from './UsersAPIComponent'

const mapStateToProps = (state: reduxStoreType) => {
   return {
      users: state.usersPageReducer,
   }
}

export default connect(mapStateToProps, {
   follow,
   unfollow,
   setCurrentPage,
   getUsersThunkCreator,
})(UsersAPIComponent)
