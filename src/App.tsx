import React from 'react'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import DialogsContainer from './Components/Dialogs/DialogsContainer'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

const App = () => {
	debugger
	return (
		<BrowserRouter>
			<div className='App-wrapper'>
				<Header />
				<Navbar />
				<div className='app-wrapper-content'>
					<Route path='/dialogs' render={() => <DialogsContainer />} />
					<Route path='/profile' render={() => <Profile />} />
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
