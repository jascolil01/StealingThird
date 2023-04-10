// import { useState } from 'react'
import './App.css'
import Home from './pages/ Home'
import Merch from './pages/ Merch'
import SetList from './pages/ SetList'
import About from './pages/About'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Merch' element={<Merch />} />
        <Route path='/SetList' element={<SetList />} />
      </Routes>
    </div>
  )
}

export default App
