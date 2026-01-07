import React, { useEffect,useRef } from 'react'

const Focusinput = () => {

    const inpuref=useRef(null)

    useEffect(() => {
        inpuref.current.focus()
      
    
      return () => {
        
      }
    }, [])
    
  return (
    <>
    <input type="text" ref={inpuref} />
    </>
  )
}

export default Focusinput