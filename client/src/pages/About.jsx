import Drums from "../components/Drums"
import Bass from "../components/Bass"
import Singer from "../components/Singer"
import Guitar from "../components/Guitar"
import Click from "../components/Click"
import { useNavigate } from "react-router-dom";

export default function About() {

  const navigate = useNavigate()

  const handleClick = (x) => {
    if (x === 1) {
      navigate('/Bass')
    } else if (x === 2) {
      navigate('/Drums')
    } else if (x === 3) {
      navigate('/Singer')
    } else {
      navigate('/Guitar')
    }
  }
  return (
    <div>
      <h1>Meet the Members</h1>
      <div className="about">
        <div onClick={() => handleClick(1)} className="test">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img src="https://cdn-icons-png.flaticon.com/512/2884/2884299.png" alt="bass" className="bass" />
        </div>
        <div onClick={() => handleClick(2)} className="test">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img src="https://cdn-icons-png.flaticon.com/512/92/92997.png" alt="drums" className="drums" />
        </div>
        <div onClick={() => handleClick(3)} className="test">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img src="https://cdn-icons-png.flaticon.com/512/3616/3616721.png" alt="singer" className="singer" />
        </div>
        <div onClick={() => handleClick(4)} className="test">
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
