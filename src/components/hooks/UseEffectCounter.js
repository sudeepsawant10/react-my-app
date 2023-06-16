import React, { useEffect, useState } from 'react'

function UseEffectCounter() {

    const [count, changeCount] = useState(0);
    const [count2, changeCount2] = useState(0);

    const incrCount= ()=>{ changeCount(count+1)}
    const decrCount= ()=>{ changeCount2(count2-1)}

    useEffect(()=>{
        console.log("count change");
    }, [count2])
    

  return (
    <div>
        UseEffectCounter
        <h1>Counter : {count}</h1>
        <button onClick={incrCount}>Increment</button>
        <button onClick={decrCount}>Decrement</button>
    </div>
  )
}

export default UseEffectCounter