import Drums from '../components/Drums'
import Bass from '../components/Bass'
import Singer from '../components/Singer'
import Guitar from '../components/Guitar'
import { useState, useEffect } from "react";

export default function About() {

  const [drum, setDrum] = useState(false)
  const [singer, setSinger] = useState(false)
  const [guitar, setGuitar] = useState(false)
  const [bass, setBass] = useState(false)


  const handleClick = (x) => {
    if (x === 1) {
      setBass((current) => !current)
      setDrum(false)
      setGuitar(false)
      setSinger(false)
    } else if (x === 2) {
      setBass(false)
      setDrum((current) => !current)
      setGuitar(false)
      setSinger(false)
    } else if (x === 3) {
      setBass(false)
      setDrum(false)
      setGuitar(false)
      setSinger((current) => !current)
    } else if (x === 4) {
      setBass(false)
      setDrum(false)
      setGuitar((current) => !current)
      setSinger(false)
    }
  }
  return (
    <div>
      <h1>Meet the crew</h1>
      <div className="about">
        <div onClick={() => handleClick(1)} className={bass ? 'test showing' : 'test'}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img src="https://cdn-icons-png.flaticon.com/512/2884/2884299.png" alt="bass" className="bass" />
        </div>
        <div onClick={() => handleClick(2)} className={drum ? 'test showing' : 'test'}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img src="https://cdn-icons-png.flaticon.com/512/92/92997.png" alt="drums" className="drums" />
        </div>
        <div className="member">{
          drum ? (
            <Drums />
          ) : guitar ? (
            <Guitar />
          ) : bass ? (<Bass />)
            : singer ? (<Singer />) : (
              <h1>Click for the crew</h1>
            )
        }</div>
        <div onClick={() => handleClick(3)} className={singer ? 'test showing' : 'test'}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img src="https://cdn-icons-png.flaticon.com/512/3616/3616721.png" alt="singer" className="singer" />
        </div>
        <div onClick={() => handleClick(4)} className={guitar ? 'test showing' : 'test'}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img src="https://i.imgur.com/krcbEPd.png" alt="guitar" className="guitar" />
        </div>
      </div>
    </div>
  )
}
