import { useState } from "react"

export default function Formhndl() {

    // textfield
    const [name, setName] = useState('')
    const [password, setPass] = useState('')
    const [email, setEmail] = useState('')


    // checkbox
    const [skill, setSkill] = useState([])
    const handleSkill = (event) => {
        console.log(event.target.value, event.target.checked)
        if (event.target.checked) {
            setSkill([...skill, event.target.value])
        } else {
            setSkill([...skill.filter((item) => item != event.target.value)])
        }
    }


    // radio
    const [gender,setGender] = useState('Male');

    // Select
    const [city,setCity] = useState('jaipur')
    return (
        <>

            <div className="container-fluid bg-dark">


                <div className="row">
                    <div className="col text-center text-secondary">
                        <h1>Controller Component:</h1>
                        <input className="form-control d-inline-block w-25 my-2" type="text" placeholder="Name" value={name} onChange={(event) => { setName(event.target.value) }} /><br />
                        <input className="form-control d-inline-block w-25 my-2" type="password" placeholder="Password" value={password} onChange={(event) => { setPass(event.target.value) }} /><br />
                        <input className="form-control d-inline-block w-25 my-2" type="text" placeholder="Email" value={email} onChange={(event) => { setEmail(event.target.value) }} /><br />
                        <button className="btn btn-outline-primary mx-1">submit</button>
                        <button className="btn btn-outline-primary mx-1" onClick={() => { setName(""), setEmail(""), setPass("") }}>clear</button>
                        <h2 className="text-secondary">{name}</h2>
                        <h2 className="text-secondary">{password}</h2>
                        <h2 className="text-secondary">{email}</h2>
                    </div>
                </div>



                <div className="row">
                    <div className="col text-center text-secondary">
                        <h1>Handling Checkboxes: </h1>
                        <input className="form control" onChange={handleSkill} type="checkbox" id="php" value='PHP' />
                        <label htmlFor="php">PHP</label><br />
                        <input className="form control" onChange={handleSkill} type="checkbox" id="js" value='Java Script' />
                        <label htmlFor="js">Java Script</label><br />
                        <input className="form control" onChange={handleSkill} type="checkbox" id="python" value="Python" />
                        <label htmlFor="python">Python</label><br />
                        <h1>{skill.toString()}</h1>
                    </div>
                </div>


                <div className="row">
                    <div className="col text-center text-secondary">
                        <h1>Handling Radio</h1>
                        <h3>Select gender</h3>
                        <div>
                        <input className="form-check-input d-inline-block" type="radio" id="male" name="gender" onChange={(event)=>{setGender(event.target.value)}} value={"Male"} checked={gender=='Male'}/>
                        <label htmlFor="male">Male</label>
                        </div>
                        <div>
                        <input className="form-check-input d-inline-block" type="radio" id="female" name="gender" onChange={(event)=>{setGender(event.target.value)}} value={"Female"}/><label htmlFor="female">Female</label>
                        </div>
                        <h4>Selected gender: {gender}</h4>
                    </div>
                </div>


                <div className="row">
                    <div className="col text-center text-secondary">
                        <h1>Handling dropdown</h1>
                        <h3>Select City: </h3>
                        <div>
                            <select className="form-select d-inline-block w-25" defaultValue={'jaipur'} onChange={(event)=>setCity(event.target.value)}>
                                <option value={'jaipur'}>Jaipur</option>
                                <option value={'sikar'}>Sikar</option>
                                <option value={'kota'}>Kota</option>
                            </select>
                            <h3>Selected city: {city}</h3>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}