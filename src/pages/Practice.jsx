import { useState } from 'react'
import Us from '../components/practice/Us';
import Counter from '../components/practice/counter'
import Prop from '../components/practice/prop'
import Wrapper from '../components/practice/wrapper'
import Textfields from '../components/practice/txtfield'
import Concom from '../components/practice/Concom';


export default function Practice() {
    const [count, setCount] = useState(0)
    const name = "lala company";
    let emp1 = "Prateek";
    let emp2 = "Pankaj";
    function fruit() {
        return "Watermelon"
    }
    return (
        <>
            <div className="container-fluid bg-dark text-secondary">
                <div className="row text-center">
                    <div className="col">
                        <h1>{name}</h1>
                        <h2>Employee 1: {emp1}</h2>
                        <h2>Employee 2: {emp2}</h2>
                        <h2>{fruit()}</h2>
                    </div>
                </div>
            </div>
            <Us />
            <Counter></Counter>
            <Prop name="Prateek" age={25} />
            <Wrapper>
                <h1>Lala company ka malik:<br /> Nitesh Sultaniya</h1>
                <h2 style={{ color: 'pink' }}>Kya cheda be ________.</h2>
            </Wrapper>
            <Textfields />
            <Concom/>
        </>
    )
}