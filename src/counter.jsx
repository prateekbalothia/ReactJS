import { useState } from "react";

function Counter(){
    const [count,setCounter] = useState(0);
    // const [count,setRCounter] = useState(0);
    return (
        <>
            <h2>Counter: {count}</h2>
            <button onClick={()=>setCounter(count+1)}>increment</button>
            <button onClick={()=>setCounter(count-1)}>decrement</button>
        </>
    )
}

export default Counter;