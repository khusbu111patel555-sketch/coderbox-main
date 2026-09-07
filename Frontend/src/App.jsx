import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ContactUs from "./components/ContactUs"

const App = () => {
  return <Router>
   <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/contact" element={<ContactUs/>} />
    </Routes>
    <Footer/>
  </Router>;
};

export default App;
