import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         textarea:'',
         options:''
      }
    }
    handleuserName=(event)=>{
        this.setState({
            username:event.target.value
        })

    }
    handletextarea=(e)=>{
        this.setState({
            textarea:e.target.value
        })
    }
    handleoptions=(event)=>{
        this.setState({
            options:event.target.value
        })
}
handlesubmit=(event)=>{
    alert(`Form submitted succesfully! ${this.state.username},${this.state.textarea},${this.state.options}`);
    event.preventDefault();
}
  render() {
    const {username,textarea,options}=this.state
    return (
      <div>
        <form action="" onSubmit={this.handlesubmit}>
        <label htmlFor="username">username</label>
        <input type="text" value={username} onChange={this.handleuserName}/>
        <textarea name="" id=""  value={textarea} onChange={this.handletextarea}></textarea>
        <select name="" id="" value={options} onChange={this.handleoptions}
        >
            <option value="">React</option>
            <option value="Css">css</option>
            <option value="js">js</option>
        </select>
        <button>submit</button>
        </form>
      </div>
    )
  }
}

export default Form