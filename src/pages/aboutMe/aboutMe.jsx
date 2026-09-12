import "./aboutMe.css";
import { useState } from "react";

import profilePicture from "../../assets/images/profile-pic.jpg";
import coreKeeper from "../../assets/images/core-keeper.jpg";
import clashOfCritters from "../../assets/images/clash-of-critters.jpg";
import galleryPic1 from "../../assets/images/gallery-pic1.jpg";
import galleryPic2 from "../../assets/images/gallery-pic2.jpg";
import galleryPic3 from "../../assets/images/gallery-pic3.jpg";
import galleryPic4 from "../../assets/images/gallery-pic4.jpg";
import galleryPic5 from "../../assets/images/gallery-pic5.jpg";
import galleryPic6 from "../../assets/images/gallery-pic6.jpg";
import philippines from "../../assets/images/philippines.png";

function AboutMe({ isOpen, onClose }) {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);

        setTimeout(() => {
            onClose();
        }, 800);
    };

    if (!isOpen) {
        return null;
    }

    const birthday = new Date(2003, 10, 20);
    const today = new Date();

    let age = today.getFullYear() - birthday.getFullYear();

    if (
        today.getMonth() < birthday.getMonth() ||
        (today.getMonth() === birthday.getMonth() &&
            today.getDate() < birthday.getDate())
    ) {
        age--;
    }

    const birthdayFormatted = birthday.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    return (
        <section className={`about-sheet ${isClosing ? "closing" : ""}`}>
            <button className="about-go-back" onClick={handleClose}>
                ← Go Back
            </button>

            <div className="about-content">

                <div className="profile-header">
                    <div className="profile-picture">
                        <img src={profilePicture} alt="My Profile Picture" />
                    </div>

                    <div className="profile-info">

                        <h1>Heidel Berg Valerio</h1>

                        <p className="profile-title">
                            Front-End Developer
                        </p>

                        <p className="profile-description">
                            I enjoy creating websites, designing interfaces,
                            and making digital art.
                        </p>

                        <div className="profile-stats">
                            <div>
                                <strong>{age}</strong>
                                <span>Age</span>
                            </div>

                            <div>
                                <strong>2003</strong>
                                <span>Born</span>
                            </div>

                            <div>
                                <strong>BSIT</strong>
                                <span>Degree</span>
                            </div>
                            <div>
                                <img
                                className = "flag"
                                src={philippines} alt="Philippine Flag" />
                                <span>From</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-divider"></div>

                <div className="profile-sections">

                    <div className="profile-section">
                        <h2>About Me</h2>

                        <p>
                            I'm a BS Information Technology graduate in the Philippines interested
                            in front-end development, visual design, and building
                            interactive digital experiences. I'm eager to explore new technologies and continue growing as a developer.
                        </p>
                    </div>

                    <div className="profile-section">
                        <h2>Favorites</h2>

                        <div className="favorites">
                            <div className="favorite-games">
                                <strong>Games</strong>
                                <p>Games I currently enjoy playing</p>

                                <div className="game-images">
                                    <div className="game-card">
                                        <img src={coreKeeper} alt="Core Keeper" />
                                        <span>Core Keeper</span>
                                    </div>

                                    <div className="game-card">
                                        <img src={clashOfCritters} alt="Clash of Critters" />
                                        <span>Clash of Critters</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="profile-section">
                        <h2>Personal</h2>

                        <div className="personal-info">
                            <p>
                                <strong>Birthday</strong>
                                <span>{birthdayFormatted}</span>
                            </p>

                            <p>
                                <strong>Age</strong>
                                <span>{age} years old</span>
                            </p>
                        </div>
                    </div> */}

                    <div className="profile-section">
                        <h2>Hobbies</h2>

                        <div className="interest-list">
                            <span className = "hobby illust">Digital Illustration</span>
                            <span className = "hobby games">Gaming</span>
                            <span className = "hobby crochet">Crocheting</span>
                        </div>
                    </div>


                    <div className="profile-section tech-section">
                        <h2>Tech Stack</h2>

                        <div className="tech-list">
                            <span className = "techstack html">HTML</span>
                            <span className = "techstack css">CSS</span>
                            <span className = "techstack javascript">JavaScript</span>
                            <span className = "techstack react">React</span>
                            <span className = "techstack nodejs">Node.js</span>
                            <span className = "techstack php">PHP</span>
                            <span className = "techstack python">Python</span>
                            <span className = "techstack mysql">MySQL</span>
                            <span className = "techstack github">GitHub</span>
                            <span className = "techstack figma">Figma</span>
                            <span className = "techstack krita">Krita</span>
                            <span className = "techstack gdevelop">GDevelop</span>
                        </div>
                    </div>

                </div>

                <div className="about-gallery">
                    <div className="gallery-heading">
                        <h2>My Gallery</h2>
                        <p>
                            Little pieces of my life outside of coding.
                        </p>
                    </div>

                    <div className="gallery-grid">
                        <div className="gallery-placeholder">
                            <img src={galleryPic1} alt="Gallery Picture 1" />
                        </div>
                        <div className="gallery-placeholder">
                            <img src={galleryPic2} alt="Gallery Picture 2" />
                        </div>
                        <div className="gallery-placeholder">
                            <img src={galleryPic3} alt="Gallery Picture 3" />
                        </div>
                        <div className="gallery-placeholder">
                            <img src={galleryPic4} alt="Gallery Picture 4" />
                        </div>
                        <div className="gallery-placeholder">
                            <img src={galleryPic5} alt="Gallery Picture 5" />
                        </div>
                        <div className="gallery-placeholder">
                            <img src={galleryPic6} alt="Gallery Picture 6" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutMe;