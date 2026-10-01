// src/pages/admin/AdminLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from "../../lib/supabaseClient";
import { Lock, Mail, Loader2, AlertCircle } from 'lucide-react';
import './Admin.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="admin-login-card"
      >
        <div className="admin-login-header">
          <span className="admin-login-icon">
            <Lock className="w-6 h-6" />
          </span>
          <h1>Admin Login</h1>
          <p>Sign in to manage blogs & content</p>
        </div>

        {error && (
          <div className="admin-login-error">
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="admin-field">
            <label>Email Address</label>
            <div className="admin-input-wrap">
              <Mail className="admin-input-icon" />
              <input
                type="email"
                required
                placeholder="admin@thecoderbox.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>

          <div className="admin-field">
            <label>Password</label>
            <div className="admin-input-wrap">
              <Lock className="admin-input-icon" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
          </div>

          <button type="submit" disabled={loading} className="admin-submit-btn">
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;