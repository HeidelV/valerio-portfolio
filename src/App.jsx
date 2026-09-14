import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { useRef, useState } from "react";

import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import MyWorks from "./pages/myWorks/my-works.jsx";
import AboutMe from "./pages/aboutMe/aboutMe.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    const [aboutOpen, setAboutOpen] = useState(false);
    const [myWorksOpen, setMyWorksOpen] = useState(false);

    const closeMyWorksRef = useRef(null);
    const aboutCloseRef = useRef(null);
    const aboutTransitionRef = useRef(false);

    const scrollToSection = (section) => {
        document.getElementById(section)?.scrollIntoView({
            behavior: "smooth"
        });
    };

    const navigateTo = (section) => {
        const goToSection = () => {
            requestAnimationFrame(() => {
                document.getElementById(section)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            });
        };

        if (aboutOpen && aboutCloseRef.current) {
            aboutCloseRef.current(goToSection);
            return;
        }

        if (myWorksOpen && closeMyWorksRef.current) {
            closeMyWorksRef.current(goToSection);
            return;
        }

        goToSection();
    };

    const openAbout = () => {
        if (aboutOpen || aboutTransitionRef.current) {
            return;
        }

        aboutTransitionRef.current = true;

        if (myWorksOpen && closeMyWorksRef.current) {
            closeMyWorksRef.current(() => {
                setMyWorksOpen(false);

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                setAboutOpen(true);

                requestAnimationFrame(() => {
                    aboutTransitionRef.current = false;
                });
            });

            return;
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        setAboutOpen(true);

        requestAnimationFrame(() => {
            aboutTransitionRef.current = false;
        });
    };

    const closeAbout = () => {
        setAboutOpen(false);
    };

    return (
        <BrowserRouter>
            <Navbar
                onAboutClick={openAbout}
                onNavigate={navigateTo}
            />

            {aboutOpen ? (
                <AboutMe
                    isOpen={aboutOpen}
                    onClose={closeAbout}
                    onCloseReady={(closeFunction) => {
                        aboutCloseRef.current = closeFunction;
                    }}
                />
            ) : (
                <>
                    <Home />

                    <MyWorks
                        onCloseReady={(closeFunction) => {
                            closeMyWorksRef.current = closeFunction;
                        }}
                        onOpenChange={setMyWorksOpen}
                    />

                    <Footer />
                </>
            )}
        </BrowserRouter>
    );
}

export default App;