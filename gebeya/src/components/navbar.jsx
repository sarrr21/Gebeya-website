import { NavLink } from "react-router-dom"
import SearchBar from "./Searchbar";
function Navbar() {
  return (
    <nav className="flex border px-10 items-center justify-between">
      <NavLink className=" text-md font-semibold" to="./" >
        Gebeya 
      </NavLink>
      <div className=" p-2">
        <SearchBar />
      </div>
     
      <ul className="flex space-x-2 font-thin text-xs">
        <li><NavLink>Profile</NavLink></li>
        <li><NavLink>Products</NavLink></li>
        <li><NavLink>Orders</NavLink></li>
        <li><NavLink>My cart</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar;
