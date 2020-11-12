import { ActionType, AuthReducerStateType, setUserDataACType } from './redux-store'
import { Dispatch } from 'redux'
import { authAPI } from '../../api/api'

const SET_USER_DATA = 'SET-USER-DATA'

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

export const getAuthUserData = () => (dispatch: Dispatch<ActionType>) => {
   authAPI.me().then((response) => {
      if (response.data.resultCode === 0) {
         const { id, email, login } = response.data.data
         dispatch(setUserData({ id, email, login, isAuth: true }))
      }
   })
}

export const login = (email: string, password: string, rememberMe = false) => (dispatch: any) => {
   authAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
         dispatch(getAuthUserData())
      }
   })
}

export const logout = () => (dispatch: any) => {
   authAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
         dispatch(setUserData({ id: null, email: null, login: null, isAuth: true }))
      }
   })
}

export default authReducer
