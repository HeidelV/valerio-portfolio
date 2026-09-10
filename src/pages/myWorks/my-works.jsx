import { useEffect, useState } from "react";
import "./my-works.css";

// Import Images
import mrBeanCafe from "../../assets/images/mrbean-cafe.png";
import comicApp1 from "../../assets/images/comic-app1.png";
import comicApp2 from "../../assets/images/comic-app2.png";

// LIVErary Screenshots: Client Side
import liveraryClient1 from "../../assets/images/liverary-client1.png";
import liveraryClient2 from "../../assets/images/liverary-client2.png";
import liveraryClient3 from "../../assets/images/liverary-client3.png";
import liveraryClient4 from "../../assets/images/liverary-client4.png";
import liveraryClient5 from "../../assets/images/liverary-client5.png";
import liveraryClient6 from "../../assets/images/liverary-client6.png";
import liveraryClient7 from "../../assets/images/liverary-client7.png";

// LIVErary Screenshots: Admin Side
import liveraryAdmin1 from "../../assets/images/liverary-admin1.png";
import liveraryAdmin2 from "../../assets/images/liverary-admin2.png";
import liveraryAdmin3 from "../../assets/images/liverary-admin3.png";
import liveraryAdmin4 from "../../assets/images/liverary-admin4.png";
import liveraryAdmin5 from "../../assets/images/liverary-admin5.png";

// Import Icons
import { ImArrowLeft2 } from "react-icons/im";

function MyWorks() {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [viewSide, setViewSide] = useState("client");

    useEffect(() => {
        if (isOpen) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true);

        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 800);
    };

    return (
        <div className="work-container">

            {!isOpen && (
                <>
                    <div className="header">
                        <h3 className="work-header">My Works</h3>
                        <hr className="divider" />
                    </div>

                    <hr className="divider2" />

                    {/* PROJECT 1: LIVERARY */}
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
                                    src={liveraryClient1}
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

                                <button
                                    className="learn-more"
                                    onClick={() => setIsOpen(true)}
                                >
                                    Learn More
                                </button>

                                <hr className="divider3" />

                                <span className="techstack html">HTML</span>
                                <span className="techstack css">CSS</span>
                                <span className="techstack bootstrap">Bootstrap</span>
                                <span className="techstack nodejs">nodeJS</span>
                                <span className="techstack mysql">MySQL</span>
                            </div>
                        </div>
                    </div>

                    <hr className="divider2" />

                    {/* PROJECT 2: COMIC READING APP */}
                    <div className="project-info">
                        <h4 className="date-title">DATE:</h4>
                        <span className="date-span">2025</span>
                    </div>

                    <hr className="divider-dotted" />

                    <h3 className="project-name comic-app">
                        Digital Comic Reading Mobile App - Figma Design
                    </h3>

                    <hr className="divider3" />

                    <div className="projects comic-project">
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
                                    A digital comic reading mobile app using
                                    Figma for an academic project.
                                </p>

                                <a
                                    className="view-link"
                                    href="https://www.figma.com/proto/nSvTY55i7bmgxz7GEkssEV/Digital-Comic-Reading-App?node-id=502-6&t=P2SRpwNueVzo5WtO-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Here
                                </a>

                                <hr className="divider3" />

                                <span className="techstack figma">Figma</span>
                            </div>
                        </div>
                    </div>

                    <hr className="divider2" />

                    {/* PROJECT 3: FIGMA DESIGN - MR. BEAN */}
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
                                    className="view-link"
                                    href="https://heidelv.github.io/prin149_hvalerio_FinalProject/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Here
                                </a>

                                <hr className="divider3" />

                                <span className="techstack html">HTML</span>
                                <span className="techstack css">CSS</span>
                                <span className="techstack bootstrap">Bootstrap</span>
                            </div>
                        </div>
                    </div>

                    <hr className="divider2" />
                </>
            )}

            {isOpen && (
                <div
                    className={`project-page ${
                        isClosing ? "closing" : "turning"
                    }`}
                >
                    <button
                        className="go-back"
                        onClick={handleClose}
                    >
                        <ImArrowLeft2 className="nav-icon" />
                        Go Back
                    </button>

                    <h2 className="project-name new-sheet">
                        LIVErary: A Real Time and Smart Library Utilization System
                    </h2>

                    <span className="liverary-details">
                        A capstone developed for the CEU Malolos Library to replace
                        traditional pen-and-paper processes with a digital system.
                        LIVErary uses RFID scanning to record student visits, manages
                        computer-room reservations, and automates billing, while also
                        helping students access and navigate library services. This
                        gives library personnel more time to focus on assisting students.
                    </span>

                    <hr />

                    <div className="side-header">
                        <h3>
                            {viewSide === "client"
                                ? "Client Side"
                                : "Admin Side"}
                        </h3>

                        <div className="side-switch">
                            <button
                                className={
                                    viewSide === "client" ? "active" : ""
                                }
                                onClick={() => setViewSide("client")}
                            >
                                Client Side
                            </button>

                            <button
                                className={
                                    viewSide === "admin" ? "active" : ""
                                }
                                onClick={() => setViewSide("admin")}
                            >
                                Admin Side
                            </button>
                        </div>
                    </div>

                    <div className="image-container">
                        <div
                            id="liveraryCarousel"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-indicators">
                                {Array.from({
                                    length:
                                        viewSide === "client" ? 7 : 5,
                                }).map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        data-bs-target="#liveraryCarousel"
                                        data-bs-slide-to={index}
                                        className={
                                            index === 0 ? "active" : ""
                                        }
                                        aria-current={
                                            index === 0
                                                ? "true"
                                                : undefined
                                        }
                                        aria-label={`Slide ${index + 1}`}
                                    ></button>
                                ))}
                            </div>

                            <div className="carousel-inner">
                                {viewSide === "client" ? (
                                    <>
                                        <div className="carousel-item active">
                                            <img
                                                className="project1"
                                                src={liveraryClient1}
                                                alt="LIVErary client screen 1"
                                            />
                                        </div>

                                        <div className="carousel-item">
                                            <img
                                                className="project1"
                                                src={liveraryClient2}
                                                alt="LIVErary client screen 2"
                                            />
                                        </div>

                                        <div className="carousel-item">
                                            <img
                                                className="project1"
                                                src={liveraryClient3}
                                                alt="LIVErary client screen 3"
                                            />
                                        </div>

                                        <div className="carousel-item">
                                            <img
                                                className="project1"
                                                src={liveraryClient4}
                                                alt="LIVErary client screen 4"
                                            />
                                        </div>

                                        <div className="carousel-item">
                                            <img
                                                className="project1"
                                                src={liveraryClient5}
                                                alt="LIVErary client screen 5"
                                            />
                                        </div>

                                        <div className="carousel-item">
                                            <img
                                                className="project1"
                                                src={liveraryClient6}
                                                alt="LIVErary client screen 6"
                                            />
                                        </div>

                                        <div className="carousel-item">
                                            <img
                                                className="project1"
                                                src={liveraryClient7}
                                                alt="LIVErary client screen 7"
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="carousel-item active">
                                            <img
                                                className="project1"
                                                src={liveraryAdmin1}
                                                alt="LIVErary admin screen 1"
                                            />
                                        </div>

                                        <div className="carousel-item">
                                            <img
                                                className="project1"
                                                src={liveraryAdmin2}
                                                alt="LIVErary admin screen 2"
                                            />
                                        </div>

                                        <div className="carousel-item">
                                            <img
                                                className="project1"
                                                src={liveraryAdmin3}
                                                alt="LIVErary admin screen 3"
                                            />
                                        </div>

                                        <div className="carousel-item">
                                            <img
                                                className="project1"
                                                src={liveraryAdmin4}
                                                alt="LIVErary admin screen 4"
                                            />
                                        </div>

                                        <div className="carousel-item">
                                            <img
                                                className="project1"
                                                src={liveraryAdmin5}
                                                alt="LIVErary admin screen 5"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>

                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#liveraryCarousel"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon"></span>
                                <span className="visually-hidden">
                                    Previous
                                </span>
                            </button>

                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#liveraryCarousel"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon"></span>
                                <span className="visually-hidden">
                                    Next
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="side-description">
                        {viewSide === "client" ? (
                            <>
                                <p>
                                    Students can only access the Client Side of
                                    LIVErary. Upon entering, they are greeted
                                    and prompted to scan their student ID using
                                    the RFID reader. After scanning, students
                                    select the section of the library they will
                                    be using and choose the feature they need.
                                    Students who wish to use the computer room
                                    can proceed to a separate computer station
                                    equipped with its own RFID reader, where
                                    they can book and access the available
                                    computers. Students may also simply log
                                    their library visit without using any
                                    additional services, as shown in the images
                                    above.
                                </p>

                                <hr />

                                <table className="project-table">
                                    <tbody>
                                        <tr>
                                            <th>Project Type</th>
                                            <td>Group Project</td>
                                        </tr>

                                        <tr>
                                            <th>Role</th>
                                            <td>
                                                Lead Front-End, Back-End and
                                                Database Support
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>Client</th>
                                            <td>CEU Malolos Library</td>
                                        </tr>

                                        <tr>
                                            <th>Frontend</th>
                                            <td>
                                                HTML, CSS, Bootstrap, JavaScript
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>Backend</th>
                                            <td>Node.js</td>
                                        </tr>

                                        <tr>
                                            <th>Database</th>
                                            <td>MySQL</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </>
                        ) : (
                            <>
                                <p>
                                    The Admin Side is designed for library
                                    personnel to manage and monitor the
                                    different operations within LIVErary.
                                    Administrators can register and edit
                                    student records, manage student visit logs,
                                    oversee computer-room reservations, and
                                    update billing records when necessary. They
                                    can also modify the digital library map to
                                    keep the system aligned with the actual
                                    library layout. The system provides
                                    administrators with centralized access to
                                    library activities, allowing them to monitor
                                    records and make necessary changes without
                                    relying on traditional pen-and-paper
                                    processes. A Super Admin role is also
                                    available, giving authorized personnel the
                                    ability to add and manage administrator
                                    accounts.
                                </p>

                                <hr />

                                <table className="project-table">
                                    <tbody>
                                        <tr>
                                            <th>Project Type</th>
                                            <td>Group Project</td>
                                        </tr>

                                        <tr>
                                            <th>Role</th>
                                            <td>
                                                Lead Front-End, Back-End and
                                                Database Support
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>Client</th>
                                            <td>CEU Malolos Library</td>
                                        </tr>

                                        <tr>
                                            <th>Frontend</th>
                                            <td>
                                                HTML, CSS, Bootstrap, JavaScript
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>Backend</th>
                                            <td>Node.js</td>
                                        </tr>

                                        <tr>
                                            <th>Database</th>
                                            <td>MySQL</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default MyWorks;