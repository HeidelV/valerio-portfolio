import "./Navbar.css";

import { FaHouse } from "react-icons/fa6";

import {
    BsInfoCircleFill,
    BsTerminalFill,
    BsEnvelopeFill
} from "react-icons/bs";

function Navbar({ onAboutClick, onNavigate }) {

    const handleNavigation = (section) => {
        onNavigate(section);
    };

    return (
        <nav className="navbarMain">

            <a
                className="nav-item"
                href="/#home"
                aria-label="Home"
                onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("home");
                }}
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
                onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("projects");
                }}
            >
                <BsTerminalFill className="nav-icon" />
            </a>

            <a
                className="nav-item"
                href="/#contact"
                aria-label="Contact"
                onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("contact");
                }}
            >
                <BsEnvelopeFill className="nav-icon" />
            </a>

        </nav>
    );
}

export default Navbar;