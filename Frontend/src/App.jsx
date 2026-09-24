// // import React from "react";
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import HomePage from "./pages/HomePage"
// // import Navbar from "./components/Navbar"
// // import Footer from "./components/Footer"
// // import AboutUs from "./components/AboutUs";
// // import WebDevelopment from "./components/WebDevelopment"
// // import ContactUs from "./components/ContactUs"

// // const App = () => {
// //   return <Router>
// //    <Navbar/>
// //     <Routes>
// //       <Route path="/" element={<HomePage/>} />
// //        <Route path="/AboutUs" element={<AboutUs />} />
// //        <Route path="/services/digital/web-development" element={<WebDevelopment />} />
// //       <Route path="/contact" element={<ContactUs/>} />
// //     </Routes>
// //     <Footer/>
// //   </Router>;
// // };

// // export default App;








// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import Servicespage from "./pages/Servicespage";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import AboutUs from "./components/AboutUs";
// import ContactUs from "./components/ContactUs";




// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/" element={<Servicespage />} />
//         <Route path="/AboutUs" element={<AboutUs />} />
//         <Route path="/contact" element={<ContactUs />} />

//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;





import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Servicespage from "./pages/Servicespage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";
import WebDevelopment from "./components/Services/WebDevelopment";
import DataAnalytics from "./components/Services/DataAnalytics";
import DataScience from "./components/Services/DataScience";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Servicespage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* ⭐ Individual Service Routes */}
        <Route
          path="/services/digital/web-development"
          element={<WebDevelopment />}
        />
        <Route
          path="/services/cognitive/data-analytics"
          element={<DataAnalytics />}
        />
          <Route
          path="/services/cognitive/data-science"
          element={<DataScience />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;