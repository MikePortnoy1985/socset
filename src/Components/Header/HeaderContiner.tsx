import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { getAuthUserData, logout } from '../redux/auth-reducer'
import { AuthReducerStateType, reduxStoreType } from '../redux/redux-store'

type PropsType = {
   isAuth: boolean
   login: string | null
   getAuthUserData: () => void
   logout: () => void
}

class HeaderContainer extends React.Component<PropsType, AuthReducerStateType> {
   componentDidMount() {
      this.props.getAuthUserData()
   }

   render() {
      return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout} />
   }
}

const mapStateToProps = (state: reduxStoreType) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login,
   }
}

export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer)
