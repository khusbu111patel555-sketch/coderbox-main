// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
//   useLocation,
// } from "react-router-dom";

// // Public Pages
// import HomePage from "./pages/HomePage";
// import Servicespage from "./pages/Servicespage";
// import PrivacyPolicy from "./components/PrivacyPolicy";
// import TermsConditions from "./components/TermsConditions";
// import ContactUs from "./components/ContactUs";
// import AboutUs from "./components/AboutUs";
// import Portfolio from "./components/Portfolio";
// import BlogDetailPage from "./pages/BlogDetailPage";
// import BlogPage from "./pages/BlogPage";

// // Layout
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// // Admin Pages
// import AdminLogin from "./pages/admin/AdminLogin";
// import AdminDashboard from "./pages/admin/AdminDashboard";
// import CreateBlog from "./pages/admin/CreateBlog";
// import EditBlog from "./pages/admin/EditBlog";

// /* ============================================================
//    LAYOUT WRAPPER
//    ============================================================ */
// const AppLayout = () => {
//   const location = useLocation();
//   const isAdminRoute = location.pathname.startsWith("/admin");

//   return (
//     <>
//       {!isAdminRoute && <Navbar />}

//       <Routes>
//         {/* ============ PUBLIC ROUTES ============ */}
//         <Route path="/" element={<HomePage />} />
//         <Route path="/services" element={<Servicespage />} />
//         <Route path="/services/:category/:slug" element={<Servicespage />} />

//         <Route path="/AboutUs" element={<AboutUs />} />
//         <Route path="/Portfolio" element={<Portfolio />} />
//         <Route path="/contact" element={<ContactUs />} />

//         {/* ============ BLOG ROUTES ============ */}
//         <Route path="/blog" element={<BlogPage />} />
//         <Route path="/blog/:slug" element={<BlogDetailPage />} />

//         {/* ============ LEGAL PAGES ============ */}
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="/terms-conditions" element={<TermsConditions />} />

//         {/* ============ ADMIN ROUTES ============ */}
//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route path="/admin/dashboard" element={<AdminDashboard />} />
//         <Route path="/admin/create" element={<CreateBlog />} />
//         <Route path="/admin/edit/:id" element={<EditBlog />} />

//         {/* 404 fallback */}
//         <Route path="*" element={<Navigate to="/services" replace />} />
//       </Routes>

//       {!isAdminRoute && <Footer />}
//     </>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <AppLayout />
//     </Router>
//   );
// };

// export default App;







import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy Loaded Public Pages
const HomePage = lazy(() => import("./pages/HomePage"));
const Servicespage = lazy(() => import("./pages/Servicespage"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./components/TermsConditions"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));

// Lazy Loaded Admin Pages
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const CreateBlog = lazy(() => import("./pages/admin/CreateBlog"));
const EditBlog = lazy(() => import("./pages/admin/EditBlog"));

/* ============================================================
   LAYOUT WRAPPER
   ============================================================ */
const AppLayout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}

      {/* Suspense fallback tab tak dikhega jab tak page load ho raha hoga */}
      <Suspense fallback={
        <div className="flex justify-center items-center h-screen bg-[#E6F8FF]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#008df1]"></div>
        </div>
      }>
        <Routes>
          {/* ============ PUBLIC ROUTES ============ */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Servicespage />} />
          <Route path="/services/:category/:slug" element={<Servicespage />} />

          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* ============ BLOG ROUTES ============ */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />

          {/* ============ LEGAL PAGES ============ */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />

          {/* ============ ADMIN ROUTES ============ */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/create" element={<CreateBlog />} />
          <Route path="/admin/edit/:id" element={<EditBlog />} />

          {/* 404 fallback */}
          <Route path="*" element={<Navigate to="/services" replace />} />
        </Routes>
      </Suspense>

      {!isAdminRoute && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;






