import {
   ActionType,
   addPostACType,
   PostItemType,
   ProfilePageType,
   ProfileType,
   setProfileACType,
   setStatusACType,
} from './redux-store'
import { profileAPI, usersAPI } from '../../api/api'
import { Dispatch } from 'redux'

const ADD_POST = 'ADD-POST'
const SET_PROFILE = 'SET-PROFILE'
const SET_STATUS = 'SET-STATUS'

const initialStore = {
   posts: [
      { id: 1, post: 'Hi,how are you?', likesCount: 12 },
      { id: 2, post: 'This is my first post', likesCount: 712 },
      { id: 3, post: 'Kuku', likesCount: 142 },
      { id: 4, post: 'Wazzup', likesCount: 120 },
      { id: 5, post: 'Salut', likesCount: 122 },
      { id: 6, post: 'Zdarova', likesCount: 512 },
   ],
   profile: {
      aboutMe: null,
      contacts: {
         facebook: null,
         website: null,
         vk: null,
         twitter: null,
         instagram: null,
         youtube: null,
         github: null,
         mainLink: null,
      },
      lookingForAJob: false,
      lookingForAJobDescription: null,
      fullName: null,
      userId: 0,
      photos: {
         small: null,
         large: null,
      },
   },
   status: '',
}

const profilePageReducer = (state: ProfilePageType = initialStore, action: ActionType) => {
   switch (action.type) {
      case ADD_POST: {
         const newPost: PostItemType = {
            id: 5,
            post: action.text,
            likesCount: 0,
         }
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: '',
         }
      }
      case SET_PROFILE: {
         return {
            ...state,
            profile: action.profile,
         }
      }
      case SET_STATUS: {
         return {
            ...state,
            status: action.status,
         }
      }
      default:
         return state
   }
}

export const addPost = (text: string): addPostACType => ({ type: ADD_POST, text })

export const setProfile = (profile: ProfileType): setProfileACType => ({ type: SET_PROFILE, profile: profile })
export const setStatus = (status: string): setStatusACType => ({ type: SET_STATUS, status })

export const getUserProfile = (id: string) => async (dispatch: Dispatch<ActionType>) => {
   const response = await usersAPI.getProfile(id)
   dispatch(setProfile(response.data))
}
export const getStatus = (id: string) => async (dispatch: Dispatch<ActionType>) => {
   const response = await profileAPI.getStatus(id)
   dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch<ActionType>) => {
   const response = await profileAPI.updateStatus(status)
   if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
   }
}

export default profilePageReducer
