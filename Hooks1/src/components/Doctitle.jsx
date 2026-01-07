import React,{useState,useEffect} from 'react'
import useDocument from '../Hooks/useDocument';

const Doctitle = () => {
    const [count, setCount] = useState(0);
    // useEffect(()=>{
    //     document.title=`count: ${count}`
    // },[count])
    useDocument(count)

  return (  
    <>
    <button onClick={()=>setCount(count+1)}>count {count}</button>
    </>
  )
}

export default Doctitle