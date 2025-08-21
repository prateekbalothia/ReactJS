import { useState } from "react";

function UseStates() {
    const [fruit, setfruit] = useState("Apple");
    const handleFruit = () => {
        setfruit((prevFruit) => (prevFruit === "Apple" ? "Guava" : "Apple"));
    }

    return (
        <>
            <div className="container-fluid bg-dark text-secondary">
                <div className="row text-center">
                    <div className="col">
                        <h1>{fruit}</h1>
                        <button className="btn btn-outline-primary" onClick={handleFruit}>Change fruit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseStates;