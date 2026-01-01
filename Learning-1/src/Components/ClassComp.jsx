import React, { Component } from "react"

class ClassComp extends Component{
    render(){
        const{name,age}=this.props;
        return <h1>Hello,{name},ur age {age}</h1>
    }
}

export default ClassComp