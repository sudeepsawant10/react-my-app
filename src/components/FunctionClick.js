import React from 'react'

function FunctionClick() {
    function changeEvent(){
        console.log("Hello event handling", this);
    }
    
  // return (
  //   <div><button onClick={changeEvent}>FunctionClick</button></div>
  // )
  
  // map eg
  const numbers = [3,4,5,6,7];
  // const newNumbers = numbers.map((item)=> {
  //   return <li>{item}</li>;
  // });


  return (
    <React.Fragment>
      <h1>React fragment h1</h1>
      <span>React fragment span</span>
      <ul>
        {
          numbers.map((item)=> <li key={item}>{item}</li>)
        }
      </ul>
    </React.Fragment>
  )
}

export default FunctionClick