import React, { useState,useEffect } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, sety] = useState(0)
    useEffect(()=>{
        console.log("useeffect called");
        window.addEventListener('mousemove',logmousepostion)
        return()=>{
            console.log("component unmounting phase")
            window.removeEventListener('mousemove',logmousepostion)
        }
    },[])
    const logmousepostion=e=>{
        console.log("mouse event");
        setX(e.clientX);
        sety(e.clinetY)
    }
  return (
    <div>Hooks {x},{y}</div>
  )
}

export default HookMouse