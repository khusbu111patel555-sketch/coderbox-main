import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

// Public Pages
import HomePage from "./pages/HomePage";
import Servicespage from "./pages/Servicespage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import BlogDetailPage from "./pages/BlogDetailPage";
import BlogPage from "./pages/BlogPage";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateBlog from "./pages/admin/CreateBlog";
import EditBlog from "./pages/admin/EditBlog";

/* ============================================================
   LAYOUT WRAPPER
   ============================================================ */
const AppLayout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}

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