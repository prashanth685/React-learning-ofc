import React, { useEffect, useState } from 'react'

const HookCounter1 = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("")

    useEffect(()=>{
        console.log("useefcey updateing title")
        document.title=`You clciked :${count}`
    },[count])
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Clcik {count}</button>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

    </div>
  )
}

export default HookCounter1