import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
     increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }))
  }

  reset = () => {
    this.setState({
      count: 0
    })
}
  render() {
    return (
        <>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.increment()}>increment</button>
        <button onClick={()=>this.decrement()}>decrement</button>
        <button onClick={()=>this.reset()}>reset</button>
        </>
    )
  }
}

export default Counter