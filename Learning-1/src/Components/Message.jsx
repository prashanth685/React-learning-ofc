import React, { Component } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"Welcome visitor"
        }
    }
    changeMesaage(){
        this.setState({
            message:"thank you"
        })
    }
    render(){
        return(
            <>
            <h1>
                {this.state.message}
            </h1>
            <button onClick={()=>this.changeMesaage()}>click to change</button>
            </>
        )
    }
}

export default Message