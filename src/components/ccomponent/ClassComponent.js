import React from "react";
import { render } from "@testing-library/react";

class ClassComponent extends React.Component
{
    // without arrow function using constructor to access this inside function
    constructor(props){
        super(props);
        this.changeEvent = this.changeEvent.bind(this);
        // this.changeStateEvent = this.changeStateEvent(this);
        this.state = {
            course:"MCA",
            rollNo: this.props.rollNo,
        }
    }
    changeEvent(e) {
        console.log("Hello ", this);
        console.log("State:", this.state.course);
        this.setState({
            course: "BCA",
        })
    }
    changeEvent2(e) {
       
        console.log("changeEvent2 ", this);
    }
    // if we use arrow function we don't need to bind this we can use it automatically
    myArrowFunc=()=>{
        console.log("Arrow function call ", this)
    }

    // 
    accessProps = ()=>{
        console.log("Props rollNo = ", this.state.rollNo);
    }

    // handling default behavior
    handleAnchorClick = (e)=>{
        e.preventDefault();
        console.log("Handling Anchor tag", this);
    }
    render(){
        return (
        <div>
            <h3>Hello from class component</h3>
            <span>{this.props.name} {this.props.last}</span>
            <button onClick={this.changeEvent}>Change event click</button>
            <button onClick={this.changeEvent2}>just antnother event click</button>
            <button onClick={this.myArrowFunc}>Arrow function call</button>
            <button onClick={this.accessProps}>Access props click</button><span>{this.props.rollNo}</span>
            <h4>Default behavior of html tag</h4>
            <a href = "www.google.com" onClick={this.handleAnchorClick}>Click Anchor</a>
        </div>
        
        )
    }
}

export default ClassComponent;