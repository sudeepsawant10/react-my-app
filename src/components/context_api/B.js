import React, { Component } from 'react'
import { mycontext } from './A';
export class B extends Component {

  render() {
    return (
      <div>
        B 
        <mycontext.Consumer>
            {data =>  <h2>{data}</h2>}
        </mycontext.Consumer>
      </div>
    )
  }
}

export default B