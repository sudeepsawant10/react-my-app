import React, { useEffect, useState } from 'react'

function UseEffectCounter() {

    const [count, changeCount] = useState(0);
    const [count2, changeCount2] = useState(0);

    const incrCount= ()=>{ changeCount(count+1)}
    const decrCount= ()=>{ changeCount2(count2-1)}

    useEffect(()=>{
        console.log("count change");
    }, [count2])
    
    const loopIncrement = ()=>{
      for(let i=1; i<=10; i++){
        // Not increment count by 10 bcoz not retaining previous value
          // changeCount(count + 1);
        // solution by call back
        changeCount(prevCount => prevCount + 1)

      }
    }

  return (
    <div>
        UseEffectCounter
        <h1>Counter : {count}</h1>
        <h1>Decrement Counter : {count2}</h1>

        <button onClick={incrCount}>Increment</button>
        <button onClick={decrCount}>Decrement</button>

        <button onClick={loopIncrement}>Increment by 10 : {count}</button>
    </div>
  )
}

export default UseEffectCounter