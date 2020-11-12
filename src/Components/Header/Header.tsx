import React from 'react'
import classes from './Header.module.css'
import { NavLink, Redirect } from 'react-router-dom'

type PropsType = {
   isAuth: boolean
   login: string | null
   logout: () => void
}

const Header = ({ isAuth, login, logout }: PropsType) => {
   return (
      <header className={classes.header}>
         <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_t4iHmch2cW1Dau22G0qNS9fzKr9XcBAq4vcTcDxDPAYXWdJdsZa234QINGhVd2a5FG1L9TNOeB_-26mroDnIbw&usqp=CAU&ec=45682161'
            alt={'missing img'}
         />
         <div className={classes.loginBlock}>
            <div>{isAuth ? login : <NavLink to={'/login'}>Login</NavLink>}</div>
            {login && <Logout logout={logout} />}
         </div>
      </header>
   )
}

type LogoutPropsType = {
   logout: () => void
}

const Logout = (props: LogoutPropsType) => {
   return (
      <>
         <button onClick={() => props.logout()}>Log out </button>
         <Redirect to={'/login'} />
      </>
   )
}

export default Header
