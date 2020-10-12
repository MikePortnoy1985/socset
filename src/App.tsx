import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import UsersContainer from './Components/Users/UsersContainer'
import DialogsContainer from './Components/Dialogs/DialogsContainer'
import ProfileContainer from './Components/Profile/ProfileContainer'
import HeaderContainer from './Components/Header/HeaderContiner'
import Login from './Components/Login/Login'

const App = () => {
	return (
		<BrowserRouter>
			<div className="App-wrapper">
				<HeaderContainer />
				<Navbar />
				<div className="app-wrapper-content">
					<Route path="/dialogs" render={() => <DialogsContainer />} />
					<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
					<Route path="/users" render={() => <UsersContainer />} />
					<Route path="/login" render={() => <Login />} />
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
