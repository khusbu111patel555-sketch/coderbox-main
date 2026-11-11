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
import DeferredSection from "./components/DeferredSection";

const Footer = lazy(() => import('./components/Footer'));

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

      {!isAdminRoute && <DeferredSection component={Footer} minHeight="28rem" rootMargin="800px" />}
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






