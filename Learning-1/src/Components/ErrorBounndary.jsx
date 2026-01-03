import React, { Component } from 'react'

class ErrorBounndary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }

    static getDerivedStateFromroor(error){
        return{
            hasError:true
        }
    }

    componentDidCatch(error,info){
        console.log(error)
        console.log(info)

    }

  render() {
    if(this.state.hasError){
        return <h1>Something went wrong</h1>
    }
    return this.props.childern
    return (

      <div>ErrorBounndary</div>
    )
  }
}

export default ErrorBounndary