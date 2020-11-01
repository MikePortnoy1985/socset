import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { reduxStoreType } from '../redux/redux-store'

type RedirectType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: reduxStoreType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const WithAuthRedirect = <T extends object>(Component: React.ComponentType<T>) => {
    class RedirectComponent extends React.Component<RedirectType>{
        render(){
        const {isAuth,...props} = this.props
        if(!isAuth) return <Redirect to='/login' />

        return <Component {...props as T} />
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedRedirectComponent
}

export default WithAuthRedirect