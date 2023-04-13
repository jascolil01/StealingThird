import Drums from "../components/Drums"
import Bass from "../components/Bass"
import Singer from "../components/Singer"
import Guitar from "../components/Guitar"

export default function About() {

  let drum = false

  const handleClick = () => {
    console.log('nice')
  }
  return (
    <div>
      <h1>Meet the Members</h1>
      <div className="about">
        <div onClick={handleClick} className="test">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img src="https://cdn-icons-png.flaticon.com/512/2884/2884299.png" alt="bass" className="bass" />
        </div>
        <div onClick={handleClick} className="test">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img src="https://cdn-icons-png.flaticon.com/512/92/92997.png" alt="drums" className="drums" />
        </div>
        <div onClick={handleClick} className="test">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img src="https://cdn-icons-png.flaticon.com/512/3616/3616721.png" alt="singer" className="singer" />
        </div>
        <div onClick={handleClick} className="test">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img src="https://i.imgur.com/krcbEPd.png" alt="guitar" className="guitar" />
        </div>
        <div>{drum ? <Drums /> : <Click />}</div>
      </div>
    </div>
  )
}
