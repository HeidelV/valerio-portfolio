import "./Navbar.css";

import { FaHouse } from "react-icons/fa6";
import {
    BsInfoCircleFill,
    BsTerminalFill,
    BsEnvelopeFill
} from "react-icons/bs";

function Navbar() {
    return (
        <nav className="navbarMain">
            <a className="nav-item" href="#home" aria-label="Home">
                <FaHouse className="nav-icon" />
            </a>

            <a className="nav-item" href="#about" aria-label="About Me">
                <BsInfoCircleFill className="nav-icon" />
            </a>

            <a className="nav-item" href="#projects" aria-label="My Works">
                <BsTerminalFill className="nav-icon" />
            </a>

            <a className="nav-item" href="#contact" aria-label="Contact">
                <BsEnvelopeFill className="nav-icon" />
            </a>
        </nav>
    );
}

export default Navbar;