import './App.css'
import Home from './pages/ Home'
import SetList from './pages/ SetList'
import About from './pages/About'
import Guitar from './components/Guitar'
import Drums from './components/Drums'
import Bass from './components/Bass'
import Singer from './components/Singer'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/SetList' element={<SetList />} />
        <Route path='/Drums' element={<Drums />} />
        <Route path='/Guitar' element={<Guitar />} />
        <Route path='/Bass' element={<Bass />} />
        <Route path='/Singer' element={<Singer />} />
      </Routes>
    </div>
  )
}

export default App
