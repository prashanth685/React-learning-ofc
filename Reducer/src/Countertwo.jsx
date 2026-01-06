import React,{useReducer} from 'react'

const initailstate={
    firstcounter:0
}
const reducer=(state,action)=>{
    switch (action.type) {
        case "increment":
            return {firstcounter:state.firstcounter+1}
            break;
        case "decrement":
            return {firstcounter:state.firstcounter-1}
            break
        case "reset":
            return initailstate
            break
    
        default:
            return state
    }
}

const Countertwo = () => {
 const [count,dispatch]=   useReducer(reducer,initailstate)
  return (
    <>
    <h1>{count.firstcounter}</h1>
    <button onClick={()=>dispatch({type:'increment'})}>increment</button>
    <button  onClick={()=>dispatch({type:'decrement'})}>decrement</button>
    <button  onClick={()=>dispatch({type:'reset'})}>reset</button>
    </>
  )
}

export default Countertwo