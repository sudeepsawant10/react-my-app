import React from "react";

// Directly taking values without props object
function Header2({ firstValue, secondValue, value }) {
  return (
    <div>
      <ul>
        <li>{firstValue}</li>
        <li>{secondValue}</li>
        <li>{value.name}</li>
      </ul>
    </div>
  );
}

export default Header2;
