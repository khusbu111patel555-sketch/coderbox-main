// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage"
// import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"
// import AboutUs from "./components/AboutUs";
// import WebDevelopment from "./components/WebDevelopment"
// import ContactUs from "./components/ContactUs"

// const App = () => {
//   return <Router>
//    <Navbar/>
//     <Routes>
//       <Route path="/" element={<HomePage/>} />
//        <Route path="/AboutUs" element={<AboutUs />} />
//        <Route path="/services/digital/web-development" element={<WebDevelopment />} />
//       <Route path="/contact" element={<ContactUs/>} />
//     </Routes>
//     <Footer/>
//   </Router>;
// };

// export default App;








import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

// Service Components
import WebDevelopment from "./components/WebDevelopment";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* ✅ Services ke nested routes */}
        <Route path="/services">
          <Route path="digital">
            <Route path="web-development" element={<WebDevelopment />} />
         
          </Route>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;