import React, { Component } from 'react'

class LifeCycleC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"ajay"
      }
    }
    static getDerivedStateFromProps(props,state){
        console.log("derived state from props");
        return null;
    }
    componentDidMount(){
        console.log("component did mount")
    }
    shouldComponentUpdate(){
        console.log("Lifeccycle c should compoenet updta")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("snapshot before")
        return null
    }
    componentDidUpdate(){
        console.log("lifecycle c component did update")
    }
    changeState= ()=>{
        this.setState({
            name:"kull"
        })
    }
  render() {
    return (
      <div>LifeCycleC
        <button onClick={this.changeState()}>change state</button>
      </div>
    )
  }
}

export default LifeCycleC