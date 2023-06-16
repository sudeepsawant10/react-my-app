import React, { Component } from 'react'

export class Product extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         quntity:0,
      }
    }

    componentDidMount(){
        console.log("Execute after component rendered");
    }

    componentDidUpdate(){
        console.log("Component state updated");
    }

    updateQuantity = ()=>{
        console.log("Updating quantity");
        this.setState({
            quntity: this.state.quntity + 1,
        })
    }

  render() {
    return (
      <div>Product Quantity : {this.state.quntity}<br />
      <button onClick={this.updateQuantity}>Update Quantity</button>
      </div>
    )
  }
}

export default Product