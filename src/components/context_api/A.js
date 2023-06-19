import React, { Component } from 'react'
import B from './B';
import C from './C';
export const mycontext = React.createContext();
export class A extends Component {
    constructor(props) {
      super(props)
    
    }
    state = {
        firstName:"sudeep",
        rollNo:40
    }

  render() {
    return (
      <div>
        A
        <mycontext.Provider value={this.state}>
            <B/>
            <C/>
        </mycontext.Provider>
      </div>
    )
  }
}

export default A