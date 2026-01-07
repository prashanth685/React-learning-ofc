import React, { useEffect, useState,useRef } from 'react'

const HookTimer = () => {
    const [timer, setTimer] = useState(0)

    const intervalref=useRef()
    useEffect(() => {
      intervalref.current=setInterval(() => {
        setTimer(prevtime=>prevtime+1)
      }, 1000);
    
      return () => {
        clearInterval(intervalref.current)
      }
    }, [])
    
  return (
    <>
    Hook timer---{timer}
    <button onClick={()=>clearInterval(intervalref.current)}>clear</button>
    </>
  )
}

export default HookTimer    