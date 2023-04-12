export default function About() {

  const handleClick = () => {
    console.log('nice')
  }
  return (
    <div>
      <h1>Meet the Members</h1>
      <div className="about">
        <div onClick={handleClick}>
          <img src="https://cdn-icons-png.flaticon.com/512/2884/2884299.png" alt="bass" className="bass" />
        </div>
        <div onClick={handleClick}>
          <img src="https://cdn-icons-png.flaticon.com/512/92/92997.png" alt="drums" className="drums" />
        </div>
        <div onClick={handleClick}>
          <img src="https://cdn-icons-png.flaticon.com/512/3616/3616721.png" alt="singer" className="singer" />
        </div>
        <div onClick={handleClick}>
          <img src="https://i.imgur.com/krcbEPd.png" alt="guitar" className="guitar" />
        </div>
      </div>
    </div>
  )
}
