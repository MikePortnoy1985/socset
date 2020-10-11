import { connect } from 'react-redux'
import { reduxStoreType } from '../redux/redux-store'
import {
	follow,
	isFetching,
	setCurrentPage,
	setTotalUsersCount,
	setUsers,
	toggleFollowingProgress,
	unfollow,
} from '../redux/UsersPageReducer'
import UsersAPIComponent from './UsersAPIComponent'

let mapStateToProps = (state: reduxStoreType) => {
	return {
		users: state.usersPageReducer,
	}
}

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	isFetching,
	toggleFollowingProgress,
})(UsersAPIComponent)
