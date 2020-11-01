import axios from 'axios'

export type usersAPIType = {
	getUsers: (currentPage: number, pageSize: number) => void
}

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '449db723-8aa5-493f-9ee5-86de5ac1dae8',
	},
})

export const usersAPI = {
	getUsers(currentPage: number, pageSize: number) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data)
	},
	follow(id: number) {
		return instance.post(`follow/${id}`)
	},
	unfollow(id: number) {
		return instance.delete(`follow/${id}`)
	},
	getProfile(userId = '2') {
		return profileAPI.getProfile(userId)
	},
}

export const profileAPI = {
	getProfile(userId = '2') {
		return instance.get(`profile/${userId}`)
	},
	getStatus(userId = '2') {
		return instance.get(`profile/status/${userId}`)
	},
	updateStatus(status: string) {
		return instance.put(`profile/status`, {status})
	},
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`)
	},
}
