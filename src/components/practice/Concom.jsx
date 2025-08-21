import { useState } from "react"

export default function Concom() {
    const [name, setName] = useState('')
    const [password, setPass] = useState('')
    const [email, setEmail] = useState('')

    return (
        <>
            <div className="container-fluid bg-dark">
                <div className="row text-center">
                    <div className="col text-center">
                        <h1>Controller Component text-center:</h1>
                        <input className="form-control d-inline-block w-25 my-2" type="text" placeholder="Name"/><br/>
                        <input className="form-control d-inline-block w-25 my-2" type="password" placeholder="Password"/><br/>
                        <input className="form-control d-inline-block w-25 my-2" type="text" placeholder="Email"/><br/>
                        <button className="btn btn-outline-primary mx-1">submit</button>
                        <button className="btn btn-outline-primary mx-1">clear</button>
                    </div>
                </div>
            </div>
        </>
    )
}