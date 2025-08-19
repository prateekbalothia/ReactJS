import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStates from './usestate'
import Counter from './counter'
import Prop from './prop'
import Wrapper from './wrapper'
import Textfields from './txtfield'
// import Counter from './counter'

function App() {
  const [count, setCount] = useState(0)
  const name="lala company";
  let emp1="Prateek";
  let emp2="Pankaj";
  function fruit(){
    return "Watermelon"
  }
  return (
    <>
      <h1>{name}</h1>
      <h2>Employee 1: {emp1}</h2>
      <h2>Employee 2: {emp2}</h2>
      <h2>{fruit()}</h2>
      <UseStates />
      {/* <Counter / */}
      <Counter/>
      <Prop name="Prateek" age={25}/>
      <Wrapper>
        <h1>Lala company ka malik:<br/> Nitesh Sultaniya</h1>
        <h2 style={{color:'pink'}}>Kya cheda be ________.</h2>
      </Wrapper>
      <Textfields/>
    </>
  )
}

export default App
