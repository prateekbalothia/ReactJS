import { useState } from "react";

function UseStates(){
    const [fruit,setfruit] = useState("Apple");
    const handleFruit = ()=>{
        setfruit((prevFruit) => (prevFruit === "Apple" ? "Guava" : "Apple"));
    }
    
    return (
        <>
            <h1>{fruit}</h1>
            <button onClick={handleFruit}>Change fruit</button>
        </>
    )
}

export default UseStates;