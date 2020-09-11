import { ActionType, followACType, setUsersACType, unfollowACType, UsersPageType, UserType } from './redux-store'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialStore = {
	users: [
		{
			id: 1,
			photoUrl: 'https://www.eg.ru/wp-content/uploads/2020/05/nag-pre022109.jpg',
			followed: true,
			fullName: 'Dmitry',
			status: 'I am a boss',
			location: { city: 'Minsk', country: 'Belarus' },
		},
		{
			id: 2,
			photoUrl: 'https://www.eg.ru/wp-content/uploads/2020/05/nag-pre022109.jpg',
			followed: false,
			fullName: 'Vova',
			status: 'I am web developer',
			location: { city: 'Moscow', country: 'Russia' },
		},
		{
			id: 3,
			photoUrl: 'https://www.eg.ru/wp-content/uploads/2020/05/nag-pre022109.jpg',
			followed: true,
			fullName: 'Roma',
			status: 'I am a gamer',
			location: { city: 'Penza', country: 'Russia' },
		},
	],
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

export const followAC = (userId: number): followACType => ({ type: FOLLOW, userId: userId })
export const unfollowAC = (userId: number): unfollowACType => ({ type: UNFOLLOW, userId: userId })
export const setUsersAC = (users: UsersPageType): setUsersACType => ({ type: SET_USERS, users: users })

export default usersPageReducer
