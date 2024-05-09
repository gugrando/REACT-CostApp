/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

let SucessClass = 'w-full p-4 border border-solid text-green-700 bg-slate-100 border-green-200 m-auto text-center mb-8 rounded-md'
let ErrorClass = 'w-full p-4 border border-solid text-red-900 bg-red-200 border-red-300 m-auto text-center mb-8 rounded-md'

function Message ({type, message}) {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
      if(!message) {
        setVisible(false)
        return
      }
      setVisible(true)  

      const timer = setTimeout(() => {
         setVisible(false) 
      },3000)

      return () => clearTimeout(timer)
    },[message])

    return (
        <>
            {visible && (<div className={type === 'sucess' ? SucessClass : ErrorClass}>{message}</div>)}
        </>
       
    )
}

export default Message