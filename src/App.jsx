import "./App.css";

import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";

import Home from "./pages/Home/Home.jsx";
import MyWorks from "./pages/myWorks/my-works.jsx";

import Footer from "./components/Footer/Footer.jsx";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Home />
            <MyWorks />
            <Footer />
        </BrowserRouter>
    );
}

export default App;