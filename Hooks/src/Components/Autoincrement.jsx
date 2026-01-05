import React,{useState,useEffect} from 'react'

function Autoincrement() {
    const [count, setCount] = useState(0);

    const ticks=()=>{
        setCount(count+1)
    }
    useEffect(() => {
        const interval=setInterval(ticks,1000)
      return () => {
        clearInterval(interval)
      }
    }, [count])
    
  return (
   <>
   <h1>{count}</h1>
   </>
  )
}

export default Autoincrement