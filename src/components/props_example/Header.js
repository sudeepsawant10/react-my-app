import React from "react";

export function Header(props) {
  console.log(props.name);
  // return(
  //     <div>
  //     <h1>Header Functional Component </h1>
  //     <span>{props.name} {props.last}</span>
  //     <div>{props.children}</div>
  //     </div>
  // );

  // Receiving props from TestHeader component
  return (
    <>
      <div>
        <li>{props.firstValue}</li>
        <li>{props.secondValue}</li>
        <li>{props.value.name}</li>
        <li>{props.value.age}</li>
      </div>
    </>
  );
}
