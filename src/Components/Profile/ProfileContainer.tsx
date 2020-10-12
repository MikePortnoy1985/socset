import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { ProfileType, reduxStoreType } from '../redux/redux-store'
import { getUserProfile } from '../redux/ProfilePageReducer'
import { RouteComponentProps, withRouter, Redirect } from 'react-router-dom'

export type PathParamsType = {
	userId: string
}

type PropsType = {
	profile: ProfileType
	isAuth: boolean
	getUserProfile: (id: string) => void
} & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType, ProfileType> {
	componentDidMount() {
		let userId = this.props.match.params.userId
		this.props.getUserProfile(userId)
	}

	render() {
		if(!this.props.isAuth) return <Redirect to={'/login'}/>

		return <Profile profile={this.props.profile} />
	}
}

let MapStateToProps = (state: reduxStoreType) => {
	return {
		profile: state.profilePageReducer.profile,
		isAuth: state.auth.isAuth
	}
}

let WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(MapStateToProps, { getUserProfile })(WithURLDataContainerComponent)
