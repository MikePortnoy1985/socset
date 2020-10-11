import { AuthReducerStateType, setUserDataACType } from './redux-store'

const SET_USER_DATA = 'SET-USER-DATA'


let initialState: AuthReducerStateType = {
	id: null,
	email: null,
	login: null,
	isAuth: false
}

const authReducer = (state = initialState, action:setUserDataACType):AuthReducerStateType=> {
		switch (action.type){
			case SET_USER_DATA:
				debugger
				return {
				 ...state,
					...action.data,
			}
			default:
				return state
		}
}

export const setUserData = (data:AuthReducerStateType): setUserDataACType  => ({type:SET_USER_DATA, data})

export default authReducer