import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const handleCounter = ()=>{
        setCount(count+1);
    }
  return (
    <div>
        Counter : {count}
        <button onClick={handleCounter}>Count</button>
    </div>
  )
}

export default Counter