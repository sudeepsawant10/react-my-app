import React from 'react'

function FunctionClick() {
    function changeEvent(){
        console.log("Hello event handling", this);
    }
    
  // return (
  //   <div><button onClick={changeEvent}>FunctionClick</button></div>
  // )


  // Fragment example to avoid div
  return (
    <React.Fragment>
      <h1>React fragment h1</h1>
      <span>React fragment span</span>
    </React.Fragment>
  )
}

export default FunctionClick