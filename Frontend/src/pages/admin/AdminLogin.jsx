// // src/pages/admin/AdminLogin.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { supabase } from "../../lib/supabaseClient";
// import { Lock, Mail, Loader2, AlertCircle } from 'lucide-react';
// import './Admin.css';

// const AdminLogin = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     const { data, error } = await supabase.auth.signInWithPassword({
//       email: form.email,
//       password: form.password,
//     });

//     setLoading(false);

//     if (error) {
//       setError(error.message);
//       return;
//     }

//     if (data.user) {
//       navigate('/admin/dashboard');
//     }
//   };

//   return (
//     <div className="admin-login-wrapper">
//       {/* Background effects */}
//       <div className="admin-login-bg" />
//       <div className="admin-login-orb orb-1" />
//       <div className="admin-login-orb orb-2" />

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="admin-login-card"
//       >
//         <div className="admin-login-header">
//           <span className="admin-login-icon">
//             <Lock className="w-6 h-6" />
//           </span>
//           <h1>Admin Login</h1>
//           <p>Sign in to manage blogs & content</p>
//         </div>

//         {error && (
//           <div className="admin-login-error">
//             <AlertCircle className="w-4 h-4" />
//             <span>{error}</span>
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="admin-login-form">
//           <div className="admin-field">
//             <label>Email Address</label>
//             <div className="admin-input-wrap">
//               <Mail className="admin-input-icon" />
//               <input
//                 type="email"
//                 required
//                 placeholder="admin@thecoderbox.com"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//               />
//             </div>
//           </div>

//           <div className="admin-field">
//             <label>Password</label>
//             <div className="admin-input-wrap">
//               <Lock className="admin-input-icon" />
//               <input
//                 type="password"
//                 required
//                 placeholder="••••••••"
//                 value={form.password}
//                 onChange={(e) => setForm({ ...form, password: e.target.value })}
//               />
//             </div>
//           </div>

//           <button type="submit" disabled={loading} className="admin-submit-btn">
//             {loading ? (
//               <>
//                 <Loader2 className="w-4 h-4 animate-spin" />
//                 Signing in...
//               </>
//             ) : (
//               'Sign In'
//             )}
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default AdminLogin;




// src/pages/admin/AdminLogin.jsx
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from "../../lib/supabaseClient";
import { Lock, Mail, Loader2, AlertCircle, Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react';
import './Admin.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Refs to remove readOnly on focus (stops Chrome autofill)
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    if (data.user) {
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="admin-login-wrapper">
      {/* Background effects */}
      <div className="admin-login-bg" />
      <div className="admin-login-orb orb-1" />
      <div className="admin-login-orb orb-2" />
      <div className="admin-login-grid" />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="admin-particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="admin-login-card"
      >
        {/* Top gradient bar */}
        <div className="admin-card-topbar" />

        {/* Header */}
        <div className="admin-login-header">
          <motion.span
            className="admin-login-icon"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4, type: 'spring' }}
          >
            <ShieldCheck className="w-7 h-7" />
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Admin <span>Login</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            Sign in to manage blogs & content
          </motion.p>
        </div>

        {/* Error */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="admin-login-error"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </motion.div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="admin-login-form" autoComplete="off">
          {/* Email */}
          <div className="admin-field">
            <label>Email Address</label>
            <div className="admin-input-wrap">
              <span className="admin-input-icon-wrap">
                <Mail className="admin-input-icon" />
              </span>
              <input
                ref={emailRef}
                type="email"
                required
                readOnly
                onFocus={() => emailRef.current?.removeAttribute('readonly')}
                autoComplete="off"
                name="admin-email-field"
                placeholder="admin@thecoderbox.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>

          {/* Password */}
          <div className="admin-field">
            <label>Password</label>
            <div className="admin-input-wrap">
              <span className="admin-input-icon-wrap">
                <Lock className="admin-input-icon" />
              </span>
              <input
                ref={passwordRef}
                type={showPassword ? 'text' : 'password'}
                required
                readOnly
                onFocus={() => passwordRef.current?.removeAttribute('readonly')}
                autoComplete="new-password"
                name="admin-password-field"
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <button
                type="button"
                className="admin-toggle-password"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={loading}
            className="admin-submit-btn"
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Signing in...
              </>
            ) : (
              <>
                Sign In
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </form>

        {/* Footer note */}
        <div className="admin-login-footer">
          <span className="admin-lock-dot" />
          Secure admin access only
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;