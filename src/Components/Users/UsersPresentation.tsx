import React from 'react'
import s from './Users.module.css'
import avatar from '../assets/images/index.jpg'
import { UsersPageType } from '../redux/redux-store'
import { NavLink } from 'react-router-dom'

type PropsType = {
   users: UsersPageType
   switchPage: (page: number) => void
   onFollowChange: (id: number) => void
   onUnFollowChange: (id: number) => void
}

const UsersPresentation = ({ users, switchPage, onFollowChange, onUnFollowChange }: PropsType) => {
   const pagesCount = Math.ceil(users.totalUsersCount / users.pageSize)
   const pages: number[] = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }
   return (
      <div>
         <div>
            {pages.map((p) => (
               <span
                  key={p}
                  className={users.currentPage === p ? s.selectedPage : ''}
                  onClick={() => {
                     switchPage(p)
                  }}>
                  {p}
               </span>
            ))}
         </div>
         {users.users.map((i) => (
            <div key={i.id}>
               <span>
                  <div>
                     <NavLink to={'/profile/' + i.id}>
                        <img
                           className={s.userPhoto}
                           src={i.photos.small === null ? avatar : i.photos.small}
                           alt={'avatar'}
                        />
                     </NavLink>
                  </div>
                  <div>
                     {i.followed ? (
                        <button
                           disabled={users.followingInProgress.some((id) => id === i.id)}
                           onClick={() => {
                              onUnFollowChange(i.id)
                           }}>
                           Unfollow
                        </button>
                     ) : (
                        <button
                           disabled={users.followingInProgress.some((id) => id === i.id)}
                           onClick={() => {
                              onFollowChange(i.id)
                           }}>
                           Follow
                        </button>
                     )}
                  </div>
               </span>
               <span>
                  <div>{i.name}</div>
                  <div>{i.status}</div>
               </span>
            </div>
         ))}
      </div>
   )
}

export default UsersPresentation
