import React, { Component } from "react";

class Counter extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment(){
        this.setState(prevState=>({
            count:prevState.count+1
        }))
        console.log(this.state.count)
    }
    render(){
        return(
            <>
            <h3>
                {this.state.count}
            </h3>
            <button onClick={()=>this.increment()}>increment</button>
            <button>decrement</button>
            <button>reset</button>
            </>
        )
    }
}

export default Counter



