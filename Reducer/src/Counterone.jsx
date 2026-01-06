import React,{useReducer} from 'react'

const initailstate=0
const reducer=(state,action)=>{
    switch (action) {
        case "increment":
            return state+1
            break;
        case "decrement":
            return state-1
            break
        case "reset":
            return initailstate
            break
    
        default:
            return state
    }
}

const Counterone = () => {
 const [count,dispatch]=   useReducer(reducer,initailstate)
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>dispatch('increment')}>increment</button>
    <button  onClick={()=>dispatch('decrement')}>decrement</button>
    <button  onClick={()=>dispatch('reset')}>reset</button>
    </>
  )
}

export default Counterone