import React from 'react'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Dialogs from './Components/Dialogs/Dialogs'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import { StoreType } from './Components/redux/state'

type AppPropsType = {
	store: StoreType
}

const App = (props: AppPropsType) => {
	const store = props.store.getState()
	return (
		<BrowserRouter>
			<div className='App-wrapper'>
				<Header />
				<Navbar friends={store.sideBar.friends} />
				<div className='app-wrapper-content'>
					<Route
						path='/dialogs'
						render={() => (
							<Dialogs
								dialogs={store.dialogsPage.dialogData}
								messages={store.dialogsPage.messageData}
								newMessageDataMessage={store.dialogsPage.newMessageDataMessage}
								dispatch={props.store.dispatch.bind(props.store)}
							/>
						)}
					/>
					<Route
						path='/profile'
						render={() => (
							<Profile
								posts={store.profilePage.posts}
								newText={store.profilePage.newPostText}
								dispatch={props.store.dispatch.bind(props.store)}
							/>
						)}
					/>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
