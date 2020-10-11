import React from 'react'
import Profile from './Profile'
import axios from 'axios'
import { connect } from 'react-redux'
import { ProfileType, reduxStoreType } from '../redux/redux-store'
import { setProfile } from '../redux/ProfilePageReducer'
import { withRouter, RouteComponentProps } from 'react-router-dom'

type PathParamsType = {
	userId : string
}

type PropsType = {
	profile: ProfileType
	setProfile: (response:ProfileType) => void
} & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType, ProfileType> {

	componentDidMount() {
		let userId = this.props.match.params.userId
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId?userId:2}`).then((response) => {
			this.props.setProfile(response.data)
		})
	}

	render() {
		return <Profile profile={this.props.profile} />
	}
}

let MapStateToProps = (state: reduxStoreType) => {
	return { profile: state.profilePageReducer.profile }
}

let WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(MapStateToProps, {setProfile})(WithURLDataContainerComponent)
