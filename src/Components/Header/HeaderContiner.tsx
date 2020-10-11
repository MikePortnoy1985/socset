import React from 'react'
import Header from './Header'
import axios from 'axios'
import { connect } from 'react-redux'
import { setUserData } from '../redux/auth-reducer'
import { AuthReducerStateType, reduxStoreType } from '../redux/redux-store'

type PropsType = {
	isAuth: boolean
	login: string | null
	setUserData: (data: AuthReducerStateType) => void
}

class HeaderContainer extends React.Component<PropsType, AuthReducerStateType> {
	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
				withCredentials: true,
			})
			.then((response) => {
				if (response.data.resultCode === 0) {
					let { id, email, login } = response.data.data
					this.props.setUserData({ id, email, login, isAuth: true })
				}
			})
	}

	render() {
		return <Header isAuth={this.props.isAuth} login={this.props.login} />
	}
}

const mapStateToProps = (state: reduxStoreType) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login,
	}
}

export default connect(mapStateToProps, { setUserData })(HeaderContainer)
