import React, { Component } from 'react'

export class Greetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloggedin:false
      }
    }

  render() {
    //     if(this.state.isloggedin){
    //         return <div>Welcome prasahnth</div>
    // }else{
    //     return <div>Welcome guest</div>
    // }
    // let message
    // if(this.state.isloggedin){
    //     message=<div></div>
    // }
    return (
      this.state.isloggedin ? ( <div>welcome prasi</div> ) : (<div> welcome guest</div>)
    )
  }
}

export default Greetings