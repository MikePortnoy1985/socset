import { ActionType, followACType, setUsersACType, unfollowACType, UsersPageType } from './redux-store'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialStore = {
	users: [],
}

const usersPageReducer = (state: UsersPageType = initialStore, action: ActionType) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				// eslint-disable-next-line array-callback-return
				users: state.users.map((i) => {
					if (i.id === action.userId) {
						return { ...i, followed: true }
					}
					return i
				}),
			}
		case UNFOLLOW:
			return {
				...state,
				// eslint-disable-next-line array-callback-return
				users: state.users.map((i) => {
					if (i.id === action.userId) {
						return { ...i, followed: false }
					}
					return i
				}),
			}
		case SET_USERS:
			return {
				...state,
				users: action.users,
			}
		default:
			return state
	}
}

export const followAC = (userId: number): followACType => ({ type: FOLLOW, userId })
export const unfollowAC = (userId: number): unfollowACType => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users: UsersPageType): setUsersACType => ({ type: SET_USERS, users })

export default usersPageReducer
