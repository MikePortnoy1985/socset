import React from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'

type PropsType = {
	isAuth: boolean
	login: string | null
}

const Header = ({ isAuth, login }: PropsType) => {
	return (
		<header className={classes.header}>
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_t4iHmch2cW1Dau22G0qNS9fzKr9XcBAq4vcTcDxDPAYXWdJdsZa234QINGhVd2a5FG1L9TNOeB_-26mroDnIbw&usqp=CAU&ec=45682161"
				alt={'missing img'}
			/>
			<div className={classes.loginBlock}>{isAuth ? login : <NavLink to={'/login'}>Login</NavLink>}</div>
		</header>
	)
}

export default Header
