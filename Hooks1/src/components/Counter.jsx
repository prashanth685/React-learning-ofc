import React, { useMemo, useState } from 'react'

const Counter = () => {
    const [counterone, setCounterone] = useState(0)
    const [countertwo, setCountertwo] = useState(0)


    const incrementone=()=>{
        setCounterone(counterone+1)
    }

    const incrementtwo=()=>{
        setCountertwo(countertwo+1)
    }

   const isEven= useMemo( ()=>{
        let i=0;
        while(i<200000000) i++
        return counterone%2===0;
    },[counterone])

  return (
    <>
    <button onClick={incrementone}>count one {counterone}</button>
    <span>{isEven?"even":"odd"}</span>
    <button onClick={incrementtwo}>countertwo {countertwo}</button>
    </>
  )
}

export default Counter