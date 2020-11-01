import {
	ActionType,
	followACType,
	isFetchingACType,
	setCurrentPageACType,
	setTotalUsersCountACType,
	setUsersACType,
	toggleFollowingProgressACType,
	unfollowACType,
	UsersPageType,
} from './redux-store'
import { usersAPI } from '../../api/api'
import { Dispatch } from 'redux'

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
				isFetching: action.isFetching,
			}
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.id]
					: state.followingInProgress.filter((id) => id !== action.id),
			}
		default:
			return state
	}
}

export const followSuccess = (userId: number): followACType => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId: number): unfollowACType => ({ type: UNFOLLOW, userId })
export const setUsers = (users: UsersPageType): setUsersACType => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage: number): setCurrentPageACType => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountACType => ({
	type: SET_TOTAL_USERS_COUNT,
	totalUsersCount,
})
export const isFetching = (isFetching: boolean): isFetchingACType => ({ type: IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching: boolean, id: number): toggleFollowingProgressACType => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	isFetching,
	id,
})

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
	return (dispatch: Dispatch<ActionType>) => {
		dispatch(isFetching(true))
		usersAPI.getUsers(currentPage, pageSize).then((data) => {
			dispatch(isFetching(false))
			dispatch(setUsers(data.items))
			dispatch(setTotalUsersCount(data.totalCount / 100))
		})
	}
}

export const follow = (id: number) => {
	return (dispatch: Dispatch<ActionType>) => {
		dispatch(toggleFollowingProgress(true, id))
		usersAPI.follow(id).then((response) => {
			if (response.data.resultCode === 0) {
				dispatch(followSuccess(id))
			}
			dispatch(toggleFollowingProgress(false, id))
		})
	}
}

export const unfollow = (id: number) => {
	return (dispatch: Dispatch<ActionType>) => {
		dispatch(toggleFollowingProgress(true, id))
		usersAPI.unfollow(id).then((response) => {
			if (response.data.resultCode === 0) {
				dispatch(unfollowSuccess(id))
			}
			dispatch(toggleFollowingProgress(false, id))
		})
	}
}

export default usersPageReducer
