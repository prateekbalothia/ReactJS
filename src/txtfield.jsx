import { useState } from "react";

function Textfields() {
    const [val, setValue] = useState("Prateek");
    return (
        <div>
            <h2>Get input field val</h2>
            <input type="text" value={val} onChange={(event) => setValue(event.target.value)}/>
            <button onClick={()=>setValue("")}>clear value</button>
            <h2>{val}</h2>
        </div>
    )
}

export default Textfields