import React, { useState } from "react";

const StateCounter =()=>{
    const[count,setcount]=useState(0)
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>increment</button>
        <button onClick={()=>setcount(count-1)}>decrement</button>
        <button onClick={()=>setcount(0)}>reset</button>
        <button onClick={()=>setcount(prevState=>prevState+5)}>increment by 5</button>
        </>
    );
}
export default StateCounter