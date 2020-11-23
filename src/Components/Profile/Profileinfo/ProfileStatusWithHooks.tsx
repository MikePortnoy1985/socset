import React, { ChangeEvent, useEffect, useState } from 'react'

type PropsType = {
   propsStatus: string
   updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = ({ propsStatus, updateStatus }: PropsType) => {
   const [editMode, setEditMode] = useState(false)
   const [status, setStatus] = useState(propsStatus)

   useEffect(() => {
      setStatus(propsStatus)
   }, [propsStatus])

   const activateEditMode = () => {
      setEditMode(true)
   }

   const deactiveteEditMode = () => {
      setEditMode(false)
      updateStatus(status)
   }

   const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
      setStatus(e.currentTarget.value)
   }

   return (
      <div>
         {!editMode && (
            <div>
               <span onDoubleClick={activateEditMode}>{status || '-------'}</span>
            </div>
         )}
         {editMode && (
            <div>
               <input onChange={onStatusChange} autoFocus onBlur={deactiveteEditMode} value={status} />
            </div>
         )}
      </div>
   )
}
