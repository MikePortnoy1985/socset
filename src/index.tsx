import store from './Components/redux/redux-store'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {Provider} from './StoreContext'

let rerenderEntireTree = () => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	)
}

rerenderEntireTree()

store.subscribe(() => {
	rerenderEntireTree()
})
