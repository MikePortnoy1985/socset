import {
	ActionType,
	followACType, isFetchingACType,
	setCurrentPageACType, setTotalUsersCountACType,
	setUsersACType, toggleFollowingProgressACType,
	unfollowACType,
	UsersPageType,
} from './redux-store'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const IS_FETCHING = 'IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FETCHING'

let initialStore = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
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
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage,
			}
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.totalUsersCount,
			}
		case IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching ? [...state.followingInProgress, action.id] : state.followingInProgress.filter(id => id !== action.id)
			}
		default:
			return state
	}
}

export const follow = (userId: number): followACType => ({ type: FOLLOW, userId })
export const unfollow = (userId: number): unfollowACType => ({ type: UNFOLLOW, userId })
export const setUsers = (users: UsersPageType): setUsersACType => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage:number): setCurrentPageACType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount:number): setTotalUsersCountACType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const isFetching = (isFetching:boolean): isFetchingACType => ({type: IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching:boolean, id: number): toggleFollowingProgressACType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id})

export default usersPageReducer
