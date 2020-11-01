import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { ProfileType, reduxStoreType } from '../redux/redux-store'
import { getUserProfile, getStatus, updateStatus } from '../redux/ProfilePageReducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { WithAuthRedirect } from '../HOC/WithAuthRedirect'
import { compose } from 'redux'

export type PathParamsType = {
	userId: string
}

type PropsType = {
	profile: ProfileType
	status: string
	getStatus: (id: string) => void
	getUserProfile: (id: string) => void
	updateStatus: (status: string) => void
} & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType, ProfileType> {
	componentDidMount() {
		let userId = this.props.match.params.userId
		this.props.getUserProfile(userId)
		this.props.getStatus(userId)
	}

	render() {
		return <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
	}
}

let MapStateToProps = (state: reduxStoreType) => {
	return {
		profile: state.profilePageReducer.profile,
		status: state.profilePageReducer.status
	}
}

export default compose<React.ComponentClass>(
	connect(MapStateToProps, { getUserProfile, getStatus, updateStatus}),
	withRouter,
	WithAuthRedirect
)(ProfileContainer)
