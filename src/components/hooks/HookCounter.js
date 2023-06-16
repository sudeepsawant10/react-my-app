import React, { useState } from 'react'
import Counter from './Counter'
function HookCounter() {
    // const fullName = useState('Sudeep Sawant')

    // const name = fullName[0];
    // const setName = fullName[1];

    
    const [fullName, setName]= useState("Sudeep Sawant")
    const stateHandler = ()=>{
        // 1=> for array destrturing
        // fullName[1]("Shubham Sawant")
        setName("Shubham Sawant")
    }

  return (
    <div>
        <div>useState Hook</div>
        {fullName}
        <button onClick={stateHandler}>Change Name</button>
        <Counter />
    </div>
  )
}

export default HookCounter