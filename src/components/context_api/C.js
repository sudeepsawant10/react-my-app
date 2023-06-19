import React, { Component } from 'react'
import { mycontext } from './A';
export class C extends Component {

  render() {
    return (
      <div>
        C
        <mycontext.Consumer>
            {data =>  <h2>{data}</h2>}
        </mycontext.Consumer>
      </div>
    )
  }
}

export default C