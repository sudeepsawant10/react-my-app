import React from "react"
import { render } from "@testing-library/react";

class Channel extends React.Component
{
    constructor(){
        super();
        // creating state
        this.state = {
            msg: "Hello from state"
        }
    }

    changeStateMsg() {
        // console.log("clicked");
       this.setState({
            msg:"Message changed on button clicked"
       })
    }

    render(){
        return(
            <div>
                <h2>React class component </h2>
                <span>{this.state.msg}</span>
                <button onClick={()=>{this.changeStateMsg()}}>Click Button</button>
            </div>
        )
    }
}

export default Channel;