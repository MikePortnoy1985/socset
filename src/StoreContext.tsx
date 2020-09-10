import React from 'react'
import { ReduxType } from './Components/redux/redux-store'


const StoreContext = React.createContext({} as ReduxType)

export type Provider = {
	store: ReduxType
	children: any
}

export const Provider = (props:Provider) => {
	return(
		<StoreContext.Provider value={props.store}>
			{props.children}
		</StoreContext.Provider>
	)
}

export default StoreContext
