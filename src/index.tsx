import store from './Components/redux/redux-store'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import StoreContext from './StoreContext'

let rerenderEntireTree = () => {
	ReactDOM.render(
		<StoreContext.Provider value={store}>
			<App />
		</StoreContext.Provider>,
		document.getElementById('root')
	)
}

rerenderEntireTree()

store.subscribe(() => {
	rerenderEntireTree()
})
