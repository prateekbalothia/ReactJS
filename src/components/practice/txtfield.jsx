import { useState } from "react";

function Textfields() {
    const [val, setValue] = useState("");
    return (
        <>
            <div className="container-fluid bg-dark text-white">
                <div className="row text-center mb-9">
                    <div className="col mx-auto">
                            <h2>Get input field val</h2>
                            <input className="form-control d-inline-block w-25" type="text" value={val} onChange={(event) => setValue(event.target.value)} />
                            <button className="btn btn-outline-primary" onClick={() => setValue("")}>clear value</button>
                            <h2>{val}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Textfields