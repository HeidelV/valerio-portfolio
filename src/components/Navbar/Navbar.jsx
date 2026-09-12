import "./Navbar.css";

import { FaHouse } from "react-icons/fa6";

import {
    BsInfoCircleFill,
    BsTerminalFill,
    BsEnvelopeFill
} from "react-icons/bs";

function Navbar({ onAboutClick, onCloseAbout }) {
    return (
        <nav className="navbarMain">
            <a
                className="nav-item"
                href="/#home"
                aria-label="Home"
                onClick={onCloseAbout}
            >
                <FaHouse className="nav-icon" />
            </a>

            <button
                className="nav-item"
                aria-label="About Me"
                onClick={onAboutClick}
            >
                <BsInfoCircleFill className="nav-icon" />
            </button>

            <a
                className="nav-item"
                href="/#projects"
                aria-label="My Works"
                onClick={onCloseAbout}
            >
                <BsTerminalFill className="nav-icon" />
            </a>

            <a
                className="nav-item"
                href="/#contact"
                aria-label="Contact"
                onClick={onCloseAbout}
            >
                <BsEnvelopeFill className="nav-icon" />
            </a>
        </nav>
    );
}

export default Navbar;