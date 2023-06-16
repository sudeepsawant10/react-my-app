import React, { Component } from 'react'
import axios from 'axios'
export class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         error:''
      }
    }

    // After loading the component
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(resp =>{
            console.log(resp);
            this.setState({
                posts:resp.data,
            })
        })
        .catch(error=>{
            console.log(error);
            this.setState({error:'Url Not Found'})
        })
    }

  render() {
    // obj destructing
    const {posts, error} = this.state;
    return (
      <div>Post List Data
        {   posts.length?
            posts.map(post => <div key={post.id}>{post.title}</div>): null
        }
        {
            error ? <div>URL EROR</div>:null
        }
      </div>
    )
  }
}

export default PostList