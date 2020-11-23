import { ActionType, AuthReducerStateType, setUserDataACType } from './redux-store'
import { Dispatch } from 'redux'
import { authAPI } from '../../api/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'auth/SET-USER-DATA'

const initialState: AuthReducerStateType = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
}

const authReducer = (state = initialState, action: setUserDataACType): AuthReducerStateType => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.data,
         }
      default:
         return state
   }
}

export const setUserData = (data: AuthReducerStateType): setUserDataACType => ({ type: SET_USER_DATA, data })

export const getAuthUserData = () => async (dispatch: Dispatch<ActionType>) => {
   const response = await authAPI.me()
   if (response.data.resultCode === 0) {
      const { id, email, login } = response.data.data
      dispatch(setUserData({ id, email, login, isAuth: true }))
   }
}

export const login = (email: string, password: string, rememberMe = false) => async (dispatch: any) => {
   const response = await authAPI.login(email, password, rememberMe)
   if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
   } else {
      const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
      dispatch(stopSubmit('login', { _error: message }))
   }
}

export const logout = () => async (dispatch: any) => {
   const response = await authAPI.logout()
   if (response.data.resultCode === 0) {
      dispatch(setUserData({ id: null, email: null, login: null, isAuth: false }))
   }
}

export default authReducer
