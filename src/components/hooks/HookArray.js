import React, { useState } from "react";

function HookArray() {
  const [items, setItem] = useState([]);
  // const [items, setItem] = useState([{id:1,value:1},{id:2,value:5}]);

  const addItem = () => {
    console.log("add item call");
    setItem([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10),
      },
    ]);
    // console.log(items)
  };
  return (
    <div>
      HookArray
      <div>
        <button onClick={addItem}>Add random item</button>
        <ul>
          {items.map((item) => {
            return <li key={item.id}>{item.value}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default HookArray;
