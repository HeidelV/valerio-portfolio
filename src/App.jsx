import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Home />
    </BrowserRouter>
  );
}

export default App
