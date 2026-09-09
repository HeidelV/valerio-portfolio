import "./my-works.css";

import clientSide1 from "../../assets/images/client-side-1.png";
import mrBeanCafe from "../../assets/images/mrbean-cafe.png";
import comicApp1 from "../../assets/images/comic-app1.png";
import comicApp2 from "../../assets/images/comic-app2.png";

function MyWorks() {
    return (
        <div className="work-container">
            <div className="header">
                <h3 className="work-header">My Works</h3>
                <hr className="divider" />
            </div>

            <hr className="divider2" />

            <div className="project-info">
                <h4 className="date-title">DATE:</h4>
                <span className="date-span">2023 - NOW</span>
            </div>

            <hr className="divider-dotted" />

            <h3 className="project-name liverary">
                LIVErary: A Real Time and Smart Library Utilization System
            </h3>

            <hr className="divider3" />

            <div className="projects">
                <div>
                    <div className="image-container">
                        <img
                            className="project1"
                            src={clientSide1}
                            alt="LIVErary"
                        />
                    </div>
                </div>

                <div>
                    <div className="details-column">
                        <p className="project-details">
                            A system made for our capstone project. It uses an
                            RFID reader to log student visits and track library
                            usage. The system also includes features for
                            student billing, room reservations, timekeeping,
                            and usage reports, providing the library with a
                            centralized way to manage and monitor its resources.
                        </p>

                        <span>Learn More</span>

                        <hr className="divider3" />

                        <span className="techstack">HTML</span>
                        <span className="techstack">CSS</span>
                        <span className="techstack">Bootstrap</span>
                        <span className="techstack">nodeJS</span>
                        <span className="techstack">MySQL</span>
                    </div>
                </div>
            </div>

            <hr className="divider2" />

            <div className="project-info">
                <h4 className="date-title">DATE:</h4>
                <span className="date-span">2025</span>
            </div>

            <hr className="divider-dotted" />

            <h3 className="project-name comic-app">
                Digital Comic Reading Mobile App - Figma Design
            </h3>

            <hr className="divider3" />

            <div className="projects">
                <div>
                    <div className="image-container2">
                        <img
                            className="project2"
                            src={comicApp2}
                            alt="Digital comic app screen"
                        />

                        <img
                            className="project3"
                            src={comicApp1}
                            alt="Digital comic app screen"
                        />
                    </div>
                </div>

                <div>
                    <div className="details-column">
                        <p className="project-details">
                            I made a digital comic reading mobile app using
                            Figma for an academic project.
                        </p>

                        <a
                            href="https://www.figma.com/proto/nSvTY55i7bmgxz7GEkssEV/Digital-Comic-Reading-App?node-id=502-6&t=P2SRpwNueVzo5WtO-1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Here
                        </a>

                        <hr className="divider3" />

                        <span className="techstack">Figma</span>
                    </div>
                </div>
            </div>

            <hr className="divider2" />

            <div className="project-info">
                <h4 className="date-title">DATE:</h4>
                <span className="date-span">2023</span>
            </div>

            <hr className="divider-dotted" />

            <h3 className="project-name mr-bean">
                MR. BEAN Café Web Design
            </h3>

            <hr className="divider3" />

            <div className="projects">
                <div>
                    <div className="image-container3">
                        <img
                            className="project1"
                            src={mrBeanCafe}
                            alt="Mr. Bean Café website"
                        />
                    </div>
                </div>

                <div>
                    <div className="details-column">
                        <p className="project-details">
                            A cafe website designed to showcase its menu,
                            featured products, and essential information
                            through a clean and engaging web experience. Also
                            made for an academic project.
                        </p>

                        <a
                            href="https://heidelv.github.io/prin149_hvalerio_FinalProject/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Here
                        </a>

                        <hr className="divider3" />

                        <span className="techstack">HTML</span>
                        <span className="techstack">CSS</span>
                        <span className="techstack">Bootstrap</span>
                    </div>
                </div>
            </div>

            <hr className="divider2" />
        </div>
    );
}

export default MyWorks;