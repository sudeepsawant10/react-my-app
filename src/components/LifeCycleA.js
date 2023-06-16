import React, { Component } from 'react'

export class LifeCycleA extends Component {

    constructor(props) {
        console.log("LifeCycleA : constructor");

      super(props)
    
      this.state = {
         name:"Ajay"
      }
    }
    
    componentDidMount(){
        console.log("LifeCycleA : componentDidMount");
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleA : getDerivedStateFromProps");
        return null;
    }

  render() {
    console.log("LifeCycleA : render");

    return (
      <div>LifeCycleA</div>
    )
  }
}

export default LifeCycleA