import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloggedin:false
      }
    }
  render() {
    // if (this.state.isloggedin) {
    //     return (
    //         <div>
    //             Welcome prashanth
    //         </div>
    //     )
        
    // } else {
    //             return (
    //         <div>
    //             Welcome guest
    //         </div>
    //     )
        
    // }
    let message
    if(this.state.isloggedin){
        message=<div>Welcome prashanth</div>
    }
    else{
        message=<div>Welcome guest</div>

    }
    return (

        this.state.isloggedin ? (<div>Welcome Prashanth</div>) : (<div>Welcome guest</div>)
    )

   
  }
}

export default UserGreeting