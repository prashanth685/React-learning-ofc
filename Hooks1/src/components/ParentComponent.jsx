import React, { useState,useCallback } from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'

const ParentComponent = () => {
    const [Age, setAge] = useState(25)
    const [salary, setSalary] = useState(20000)
    
    const incrementAge=useCallback(()=>{
        setAge(Age+1)
    },[Age])




    const incrementSalary=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
  return (
        <>
        <Title/>
        <Count text="Age" count={Age}/>
        <Button handleClick={incrementAge}>incrementAge</Button>
        <Count text="salary" count={salary}/>
        <Button handleClick={incrementSalary}>incrementSalary</Button> 
        </>
  )
}

export default ParentComponent