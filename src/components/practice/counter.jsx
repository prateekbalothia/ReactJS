import { useState } from "react";

function Counter() {
    const [count, setCounter] = useState(0);
    // const [count,setRCounter] = useState(0);
    return (
        <>
            <div className="container-fluid bg-dark text-secondary">
                <div className="row text-center">
                    <div className="col">
                        <h2>Counter: {count}</h2>
                        <button className="btn btn-outline-primary mx-2" onClick={() => setCounter(count + 1)}>increment</button>
                        <button className="btn btn-outline-primary mx-2" onClick={() => setCounter(count - 1)}>decrement</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter;