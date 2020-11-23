import React, { useState } from 'react'
import { UsersPageType } from '../redux/redux-store'
import s from './Users.module.css'

type PropsType = {
   users: UsersPageType
   switchPage: (page: number) => void
   protionSize: number
}

const Paginator = ({ users, switchPage, protionSize }: PropsType) => {
   const pagesCount = Math.ceil(users.totalUsersCount / users.pageSize)
   const pages: number[] = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }

   const portionCount = Math.ceil(pagesCount / protionSize)
   const [portionNumber, setPortionNumber] = useState(1)
   const leftPortion = (portionNumber - 1) * protionSize + 1
   const rightPortion = portionNumber * protionSize

   return (
      <div>
         {portionNumber > 1 && (
            <button onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => setPortionNumber(portionNumber - 1)}>
               PREV
            </button>
         )}
         {pages
            .filter((p) => p >= leftPortion && p <= rightPortion)
            .map((p) => (
               <span
                  key={p}
                  className={users.currentPage === p ? s.selectedPage : s.page}
                  onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => switchPage(p)}>
                  {p}
               </span>
            ))}
         {portionCount > portionNumber && (
            <button onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => setPortionNumber(portionNumber + 1)}>
               NEXT
            </button>
         )}
      </div>
   )
}

export default Paginator
