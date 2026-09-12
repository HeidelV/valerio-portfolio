import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import MyWorks from "./pages/myWorks/my-works.jsx";
import AboutMe from "./pages/aboutMe/aboutMe.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    const [aboutOpen, setAboutOpen] = useState(false);

    return (
        <BrowserRouter>
            <Navbar
                onAboutClick={() => {
                    window.scrollTo(0, 0);
                    setAboutOpen(true);
                }}
                onCloseAbout={() => setAboutOpen(false)}
            />

            {aboutOpen ? (
                <AboutMe
                    isOpen={aboutOpen}
                    onClose={() => setAboutOpen(false)}
                />
            ) : (
                <>
                    <Home />
                    <MyWorks />
                    <Footer />
                </>
            )}
        </BrowserRouter>
    );
}

export default App;