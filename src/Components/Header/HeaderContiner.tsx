import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { getAuthUserData } from '../redux/auth-reducer'
import { AuthReducerStateType, reduxStoreType } from '../redux/redux-store'
import { authAPI } from '../../api/api'

type PropsType = {
	isAuth: boolean
	login: string | null
	getAuthUserData: () => void
}

class HeaderContainer extends React.Component<PropsType, AuthReducerStateType> {
	componentDidMount() {
		this.props.getAuthUserData()
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

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer)
