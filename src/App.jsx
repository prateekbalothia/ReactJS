// import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Homepage from './pages/Homepage'
import Services from './pages/Services'
import Header from './components/Header'
import Portfolio from './pages/Portfolio'
import Practice from './pages/Practice'
// import Counter from './counter'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/practice' element={<Practice/>}/>
      </Routes>




      


    </>
  )
}

export default App
