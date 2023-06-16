import axios from 'axios'
import React, { Component } from 'react'

export class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:'',
      }
    }

    changeHandler = (e)=>{
        this.setState({
            [e.target.name]:e.target.value,
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(resp => console.log(resp))
        .catch(error => console.log(error));

    }

  render() {
    const {userId, title, body} = this.state;
    return (
      <div>
        PostForm
        <form onSubmit={this.handleSubmit}>
            <label>userId</label> 
            <input type='number' value={userId} name="userId" onChange={this.changeHandler}/>

            <label>title</label> 
            <input type='text' value={title} name="title" onChange={this.changeHandler}/>

            <label>Body</label> 
            <input type='text' value={body} name="body" onChange={this.changeHandler}/>
            <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm