import axios from 'axios'

export type usersAPIType={
	getUsers: (currentPage:number, pageSize:number)=>void
}

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '449db723-8aa5-493f-9ee5-86de5ac1dae8',
	},
})

export const usersAPI = {
	getUsers(currentPage:number , pageSize:number ){
		return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
				withCredentials: true,
			})
			.then((response) => response.data)
	}
}


