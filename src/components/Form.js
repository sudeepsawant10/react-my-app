import React, { Component } from 'react'

export class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:"",
            address:""
        }
    }
   
    handleUsername = (e)=>{
        this.setState({
            username:e.target.value
        })
    }
    handleAddress = (e)=>{
        this.setState({
            address:e.target.value
        })
    }
    handleSubmit = (e) =>{
        alert(`Username ${this.state.username}`);
        e.preventDefault();
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <lable>Username</lable> 
            <input type='text' value={this.state.username} onChange={this.handleUsername}/>

            <lable>Address</lable> 
            <input type='text' value={this.state.address} onChange={this.handleAddress}/>
            <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}

export default Form