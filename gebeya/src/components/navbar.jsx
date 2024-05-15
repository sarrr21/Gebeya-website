import { NavLink } from "react-router-dom"
function Navbar() {
  return (
    <nav className="flex border p-3">
      <NavLink className=" text-xl font-semibold" to="./" >
        GebeyaShop 
      </NavLink>
      <ul className="flex mx-auto items-center space-x-4">
        <li>
            <NavLink to='./'>Home</NavLink>
            </li>
            <li>
            <NavLink to='./product'>Product</NavLink>
            </li>
            <li>
            <NavLink to='./about'>About</NavLink>
            </li>
            <li>
            <NavLink to='./contact'>Contact</NavLink>
        </li>
      </ul>
      <div className="space-x-4">
        <NavLink to="./login">Login</NavLink>
        <NavLink to="./register">Register</NavLink>
        <NavLink to="./cart">Cart</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;
