import "./Footer.css";
import { BsGithub, BsLinkedin, BsEnvelopeFill } from "react-icons/bs";

function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="footer-content">
                <div className="footer-contact">
                    <span
                        className="footer-email"
                    >
                        <BsEnvelopeFill />
                        valerioheidelberg20@gmail.com
                    </span>

                    <div className="footer-socials">
                        <a
                            href="https://github.com/HeidelV"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <BsGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/heidel-berg-valerio-553bb8261/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <BsLinkedin />
                        </a>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <span>A web dev in the Philippines</span>
                    <span>© 2026 Heidel Berg Valerio</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;