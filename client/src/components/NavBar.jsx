import { NavLink } from "react-router-dom"


export default function NavBar() {
  return (
    <div className="navbar">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/About'>About</NavLink>
      {/* <NavLink to='/Merch'>Merchandise</NavLink> */}
      {/* <NavLink to='/SetList'>Set List</NavLink> */}
    </div>
  )
}
