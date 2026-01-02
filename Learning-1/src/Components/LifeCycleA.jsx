import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

 class LifeCycleA extends Component {
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
      <div>LifeCycleA
        <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA