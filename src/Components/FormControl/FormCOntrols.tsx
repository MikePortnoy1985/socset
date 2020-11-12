import React from 'react'

export const TextArea = ({ input, meta, ...props }: any) => {
   const hasError = meta.touched && meta.error
   return (
      <>
         <div>
            <textarea {...input} {...props} />
         </div>
         {hasError && <span>{meta.error}</span>}
      </>
   )
}

export const Input = ({ input, meta, ...props }: any) => {
   const hasError = meta.touched && meta.error
   return (
      <>
         <div>
            <input {...input} {...props} />
         </div>
         {hasError && <span>{meta.error}</span>}
      </>
   )
}

export default TextArea
