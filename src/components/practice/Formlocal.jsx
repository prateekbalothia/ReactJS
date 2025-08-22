import { useState } from "react"


function Formlocal() {
    const [name, setName] = useState('')
    const [password, setPass] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        // collect form data
        const newRecord = {
            name,
            password,
            email,
        };

        const existingData = JSON.parse(localStorage.getItem("formData")) || [];

        existingData.push(newRecord);

        // Save to localStorage (or sessionStorage if you prefer)
        localStorage.setItem("formData", JSON.stringify(existingData));

        alert("Form data saved successfully!");

        setName("");
        setPass("");
        setEmail("");
    };

    return (
        <>
            <div className="container-fluid bg-dark">

                <div className="row">
                    <div className="col text-center text-secondary">
                        <form onSubmit={handleSubmit}>
                            <h1>Controller Component:</h1>
                            <input className="form-control d-inline-block w-25 my-2" type="text" placeholder="Name" value={name} onChange={(event) => { setName(event.target.value) }} /><br />
                            <input className="form-control d-inline-block w-25 my-2" type="password" placeholder="Password" value={password} onChange={(event) => { setPass(event.target.value) }} /><br />
                            <input className="form-control d-inline-block w-25 my-2" type="text" placeholder="Email" value={email} onChange={(event) => { setEmail(event.target.value) }} /><br />
                            <button type="submit" className="btn btn-outline-primary mx-1">submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Formlocal;