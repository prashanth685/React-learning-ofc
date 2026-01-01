import React, { Component } from 'react'
import Childcomponenet from './Childcomponenet'

 class ParentComponent extends Component {
        constructor(props) {
      super(props)
    
      this.state = {
         parentName:"parent"
      }
      this.greetParent= this.greetParent.bind(this)
    }
    greetParent(){
        alert(`hello ,${this.state.parentName}`)
    }
  render() {
    return (
      <div><Childcomponenet greethandler={this.greetParent}/></div>
    )
  }
}

export default ParentComponent