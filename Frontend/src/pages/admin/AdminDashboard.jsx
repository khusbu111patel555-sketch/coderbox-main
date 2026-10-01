// src/pages/admin/AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from "../../lib/supabaseClient";
import { useAuth } from '../../hooks/useAuth';
import {
  Plus, Edit3, Trash2, Eye, LogOut, FileText, TrendingUp,
  Clock, Search, Loader2, CheckCircle2, XCircle, BarChart3,
} from 'lucide-react';
import './Admin.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  // Redirect if not logged in
  useEffect(() => {
    if (!authLoading && !user) navigate('/admin/login');
  }, [user, authLoading, navigate]);

  // Fetch blogs
  const fetchBlogs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) setBlogs(data || []);
    setLoading(false);
  };

  useEffect(() => {
    if (user) fetchBlogs();
  }, [user]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;
    const { error } = await supabase.from('blogs').delete().eq('id', id);
    if (!error) setBlogs((prev) => prev.filter((b) => b.id !== id));
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const filtered = blogs.filter((b) => {
    const matchesSearch =
      b.title?.toLowerCase().includes(search.toLowerCase()) ||
      b.category_name?.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' || b.status === filter;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: blogs.length,
    published: blogs.filter((b) => b.status === 'published').length,
    drafts: blogs.filter((b) => b.status === 'draft').length,
    totalViews: blogs.reduce((sum, b) => sum + (b.views_count || 0), 0),
  };

  if (authLoading) {
    return (
      <div className="admin-loading">
        <Loader2 className="w-8 h-8 animate-spin text-[#01ADF0]" />
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <header className="admin-header">
        <div>
          <h1>Blog Dashboard</h1>
          <p>Welcome back, {user?.email}</p>
        </div>
        <div className="admin-header-actions">
          <Link to="/admin/create" className="admin-btn admin-btn-primary">
            <Plus className="w-4 h-4" />
            New Blog
          </Link>
          <button onClick={handleLogout} className="admin-btn admin-btn-ghost">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      {/* Stats */}
      <div className="admin-stats">
        {[
          { icon: FileText, label: 'Total Blogs', value: stats.total, color: 'blue' },
          { icon: CheckCircle2, label: 'Published', value: stats.published, color: 'green' },
          { icon: Clock, label: 'Drafts', value: stats.drafts, color: 'amber' },
          { icon: BarChart3, label: 'Total Views', value: stats.totalViews, color: 'purple' },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`admin-stat-card stat-${s.color}`}
            >
              <div className="admin-stat-icon">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="admin-stat-value">{s.value}</div>
                <div className="admin-stat-label">{s.label}</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="admin-filters">
        <div className="admin-search">
          <Search className="admin-search-icon" />
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="admin-filter-tabs">
          {['all', 'published', 'draft', 'archived'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`admin-filter-tab ${filter === f ? 'active' : ''}`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Table */}
      {loading ? (
        <div className="admin-loading">
          <Loader2 className="w-8 h-8 animate-spin text-[#01ADF0]" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="admin-empty">
          <FileText className="w-12 h-12" />
          <h3>No blogs found</h3>
          <p>Create your first blog post to get started.</p>
          <Link to="/admin/create" className="admin-btn admin-btn-primary">
            <Plus className="w-4 h-4" />
            Create Blog
          </Link>
        </div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Views</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((blog) => (
                <tr key={blog.id}>
                  <td>
                    <div className="admin-blog-title">
                      {blog.featured_image && (
                        <img
                          src={blog.featured_image}
                          alt={blog.featured_image_alt || blog.title}
                          className="admin-blog-thumb"
                        />
                      )}
                      <div>
                        <div className="admin-blog-name">{blog.title}</div>
                        <div className="admin-blog-slug">/{blog.slug}</div>
                      </div>
                    </div>
                  </td>
                  <td>{blog.category_name || '—'}</td>
                  <td>
                    <span className={`admin-badge badge-${blog.status}`}>
                      {blog.status}
                    </span>
                  </td>
                  <td>{blog.views_count || 0}</td>
                  <td>
                    {new Date(blog.created_at).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </td>
                  <td>
                    <div className="admin-row-actions">
                      <Link
                        to={`/blog/${blog.slug}`}
                        target="_blank"
                        className="admin-icon-btn"
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <Link
                        to={`/admin/edit/${blog.id}`}
                        className="admin-icon-btn"
                        title="Edit"
                      >
                        <Edit3 className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="admin-icon-btn danger"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;