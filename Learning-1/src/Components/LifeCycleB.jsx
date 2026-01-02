import React, { Component } from 'react'
import LifeCycleA from './LifeCycleA';

 class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'ajay'
      }
      console.log("Life cycle A: constructor");
      
    }
    static getDerivedStateFromProps(props,state){
        console.log("Life cycle getderived state");
        return null
    }
    componentDidMount(){
        console.log("compinent did mount")
    }
  render() {
    console.log("Lifeycle render")
    return (
      <div>LifeCycleB
        {/* <LifeCycleA/> */}
      </div>
    )
  }
}

export default LifeCycleB