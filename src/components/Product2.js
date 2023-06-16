import React, { Component } from 'react'

export class Product2 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           productId :0, quantity:0
        }
      }
  
      addToCart = (pid) =>{
        this.setState({
            productId:pid,
            quantity:this.state.quantity + 1
        })
      }
  render() {
    return (
      <div>Product2
       
        <button onClick={()=> {this.addToCart(1)}}>Add to cart</button>

        <Cart productId={this.state.productId} quantity={this.state.quantity} />
      </div>
      
    )
  }
}

export default Product2

class Cart extends Component {
    constructor(props) {
      super(props)
    // Setting state from props
      this.state = {
        quantity:this.props.quantity,
      }
    }

    static getDerivedStateFromProps(props, state){
        console.log(props.quantity);
        console.log(state.quantity);
        if (props.quantity !== state.quantity){
            return {quantity : props.quantity}
        }
        return null;
    }

    componentDidUpdate(){
      console.log("Component state updated");
  }
  render() {
    return (
      <div>cart
         <span>Cart : {this.state.quantity}</span><br/>
      </div>
    )
  }
}
