import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { FriendsType } from '../redux/state'

type NavbarPropsTyp = {
	friends: Array<FriendsType>
}

const Navbar = (props: NavbarPropsTyp) => {
	const friend = props.friends.map((f: FriendsType) => <div className={classes.friend}>{f.name}</div>)

	return (
		<div className={classes.wrapper}>
			<nav className={classes.nav}>
				<div>
					<NavLink className={classes.item} activeClassName={classes.activeLink} to={'/profile'}>
						Profile
					</NavLink>
				</div>
				<div>
					<NavLink className={classes.item} activeClassName={classes.activeLink} to={'/dialogs'}>
						Messages
					</NavLink>
				</div>
				<div>
					<NavLink className={classes.item} activeClassName={classes.activeLink} to={'/news'}>
						News
					</NavLink>
				</div>
				<div>
					<NavLink className={classes.item} activeClassName={classes.activeLink} to={'/music'}>
						Music
					</NavLink>
				</div>
				<div>
					<NavLink className={classes.item} activeClassName={classes.activeLink} to={'/settings'}>
						Settings
					</NavLink>
				</div>
			</nav>
			<h2>Friends</h2>
			<div className={classes.mainFriend}>{friend}</div>
		</div>
	)
}

export default Navbar
