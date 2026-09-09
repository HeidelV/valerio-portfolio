import { NavLink } from "react-router-dom";

import "./Navbar.css";

// import icons
import { FaHouse } from "react-icons/fa6";
import { BsInfoCircleFill, BsTerminalFill, BsEnvelopeFill } from "react-icons/bs";

function Navbar() {
    return (
        <nav className="navbarMain">
            <NavLink className="nav-item" to="/">
                <FaHouse className="nav-icon" />
            </NavLink>

            <NavLink className="nav-item" to="/about">
                <BsInfoCircleFill className="nav-icon" />
            </NavLink>

            <NavLink className="nav-item" to="/projects">
                <BsTerminalFill className="nav-icon" />
            </NavLink>

            <NavLink className="nav-item" to="/contact">
                <BsEnvelopeFill className="nav-icon" />
            </NavLink>
        </nav>
    );
}

export default Navbar;