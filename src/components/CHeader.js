import React from "react";
import Testing from "./Testing";

class CHeader extends React.Component{
    constructor(props){
        super();
    }
    state = {
        users : [
            {id:1, name:"Brain", class:"A"},
            {id:3, name:"David", class:"B"},
        ]
    }
    render(){
        // console.log(this.state.users[0].name)
        const userList = this.state.users.map(function(user){
            return <h1 key={user.id}>{user.name} | {user.class}</h1>
        })
        return (
            <div>

                {this.props.name}
                {/* {userList} */}
                {this.state.users.map(function(user){
                    return(
                        
                        //  <h1 key={user.id}>{user.name} | {user.class}</h1>
                         <Testing key={user.id} value={user.id}></Testing>
                    )

                 })}

            </div>
        )
    }
}

export default CHeader