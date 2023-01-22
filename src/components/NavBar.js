import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <NavLink to="/" className={ ({isActive}) => isActive ? "active" : "link"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
            
        </div>
    )
}

export default NavBar;