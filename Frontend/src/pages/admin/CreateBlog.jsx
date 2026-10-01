// // src/pages/admin/CreateBlog.jsx
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { supabase } from "../../lib/supabaseClient";
// import { useAuth } from '../../hooks/useAuth';
// import { Loader2, ArrowLeft, Save } from 'lucide-react';
// import './Admin.css';

// const slugify = (text) =>
//   text
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9\s-]/g, '')
//     .replace(/\s+/g, '-')
//     .replace(/-+/g, '-');

// const Section = ({ title, children }) => (
//   <div className="admin-form-section">
//     <h2>{title}</h2>
//     <div className="admin-form-grid">{children}</div>
//   </div>
// );

// const Field = ({ label, children, full }) => (
//   <div className={`admin-field ${full ? 'full' : ''}`}>
//     <label>{label}</label>
//     {children}
//   </div>
// );

// const CreateBlog = () => {
//   const navigate = useNavigate();
//   const { user } = useAuth();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [form, setForm] = useState({
//     title: '', slug: '', excerpt: '', content: '',
//     featured_image: '', featured_image_alt: '',
//     category_name: '', status: 'draft', reading_time: 5,
//     meta_title: '', meta_description: '', focus_keyword: '',
//     secondary_keywords: '', og_title: '', og_description: '',
//     og_image: '', twitter_title: '', twitter_description: '', twitter_image: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//       ...(name === 'title' && !prev.slug ? { slug: slugify(value) } : {}),
//     }));
//   };

//   const handleSubmit = async (e, publish = false) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     const payload = {
//       ...form,
//       status: publish ? 'published' : form.status,
//       published_at: publish ? new Date().toISOString() : null,
//       author_id: user?.id,
//       author_name: user?.email?.split('@')[0] || 'Admin',
//       secondary_keywords: form.secondary_keywords
//         ? form.secondary_keywords.split(',').map((k) => k.trim())
//         : [],
//     };
//     const { error } = await supabase.from('blogs').insert([payload]);
//     setLoading(false);
//     if (error) { setError(error.message); return; }
//     navigate('/admin/dashboard');
//   };

//   return (
//     <div className="admin-form-page">
//       <div className="admin-form-header">
//         <Link to="/admin/dashboard" className="admin-back-btn">
//           <ArrowLeft className="w-4 h-4" /> Back to Dashboard
//         </Link>
//         <h1>Create New Blog</h1>
//       </div>
//       {error && <div className="admin-form-error">{error}</div>}
//       <form className="admin-form">
//         <Section title="Basic Information">
//           <Field label="Title *">
//             <input name="title" value={form.title} onChange={handleChange} required />
//           </Field>
//           <Field label="Slug *">
//             <input name="slug" value={form.slug} onChange={handleChange} required />
//           </Field>
//           <Field label="Excerpt" full>
//             <textarea name="excerpt" rows={2} value={form.excerpt} onChange={handleChange} />
//           </Field>
//           <Field label="Content *" full>
//             <textarea name="content" rows={12} value={form.content} onChange={handleChange} required />
//           </Field>
//           <Field label="Featured Image URL">
//             <input name="featured_image" value={form.featured_image} onChange={handleChange} />
//           </Field>
//           <Field label="Image Alt Text">
//             <input name="featured_image_alt" value={form.featured_image_alt} onChange={handleChange} />
//           </Field>
//         </Section>
//         <Section title="Classification">
//           <Field label="Category">
//             <input name="category_name" value={form.category_name} onChange={handleChange} />
//           </Field>
//           <Field label="Status">
//             <select name="status" value={form.status} onChange={handleChange}>
//               <option value="draft">Draft</option>
//               <option value="published">Published</option>
//               <option value="archived">Archived</option>
//             </select>
//           </Field>
//           <Field label="Reading Time (min)">
//             <input type="number" name="reading_time" value={form.reading_time} onChange={handleChange} />
//           </Field>
//         </Section>
//         <Section title="SEO / Meta">
//           <Field label="Meta Title">
//             <input name="meta_title" value={form.meta_title} onChange={handleChange} />
//           </Field>
//           <Field label="Focus Keyword">
//             <input name="focus_keyword" value={form.focus_keyword} onChange={handleChange} />
//           </Field>
//           <Field label="Meta Description" full>
//             <textarea name="meta_description" rows={2} value={form.meta_description} onChange={handleChange} />
//           </Field>
//           <Field label="Secondary Keywords (comma separated)" full>
//             <input name="secondary_keywords" value={form.secondary_keywords} onChange={handleChange} />
//           </Field>
//         </Section>
//         <Section title="Social Sharing">
//           <Field label="OG Title">
//             <input name="og_title" value={form.og_title} onChange={handleChange} />
//           </Field>
//           <Field label="OG Image URL">
//             <input name="og_image" value={form.og_image} onChange={handleChange} />
//           </Field>
//           <Field label="OG Description" full>
//             <textarea name="og_description" rows={2} value={form.og_description} onChange={handleChange} />
//           </Field>
//           <Field label="Twitter Title">
//             <input name="twitter_title" value={form.twitter_title} onChange={handleChange} />
//           </Field>
//           <Field label="Twitter Image">
//             <input name="twitter_image" value={form.twitter_image} onChange={handleChange} />
//           </Field>
//           <Field label="Twitter Description" full>
//             <textarea name="twitter_description" rows={2} value={form.twitter_description} onChange={handleChange} />
//           </Field>
//         </Section>
//         <div className="admin-form-actions">
//           <button type="button" onClick={(e) => handleSubmit(e, false)} disabled={loading} className="admin-btn admin-btn-ghost">
//             {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
//             Save as Draft
//           </button>
//           <button type="button" onClick={(e) => handleSubmit(e, true)} disabled={loading} className="admin-btn admin-btn-primary">
//             {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
//             Publish
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateBlog;









// src/pages/admin/CreateBlog.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from "../../lib/supabaseClient";
import { useAuth } from '../../hooks/useAuth';
import {
  Loader2, ArrowLeft, Save, Plus, X, Pencil, Trash2, Check, AlertCircle,
} from 'lucide-react';
import './Admin.css';

/* ---------- HELPERS ---------- */
const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

const Section = ({ title, children }) => (
  <div className="admin-form-section">
    <h2>{title}</h2>
    <div className="admin-form-grid">{children}</div>
  </div>
);

const Field = ({ label, children, full }) => (
  <div className={`admin-field ${full ? 'full' : ''}`}>
    <label>{label}</label>
    {children}
  </div>
);

/* ============================================================
   CREATE BLOG
   ============================================================ */
const CreateBlog = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  /* ---------- CATEGORIES STATE ---------- */
  const [categories, setCategories] = useState([]);
  const [loadingCats, setLoadingCats] = useState(true);

  /* ---------- CATEGORY MANAGER MODAL ---------- */
  const [showCatModal, setShowCatModal] = useState(false);
  const [newCat, setNewCat] = useState({ name: '', slug: '' });
  const [catSaving, setCatSaving] = useState(false);
  const [catError, setCatError] = useState('');
  const [catSuccess, setCatSuccess] = useState('');
  const [catSlugTouched, setCatSlugTouched] = useState(false);

  /* ---------- EDIT / DELETE STATE ---------- */
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', slug: '' });
  const [deletingId, setDeletingId] = useState(null);

  /* ---------- BLOG FORM STATE ---------- */
  const [form, setForm] = useState({
    title: '', slug: '', excerpt: '', content: '',
    featured_image: '', featured_image_alt: '',
    category_name: '', status: 'draft', reading_time: 5,
    meta_title: '', meta_description: '', focus_keyword: '',
    secondary_keywords: '', og_title: '', og_description: '',
    og_image: '', twitter_title: '', twitter_description: '', twitter_image: '',
  });

  /* ============================================================
     LOAD CATEGORIES
     ============================================================ */
  const loadCategories = async () => {
    setLoadingCats(true);
    const { data, error } = await supabase
      .from('categories')
      .select('id, name, slug, created_at')
      .order('name', { ascending: true });

    if (error) {
      console.error('Categories fetch error:', error.message);
      setCategories([]);
    } else {
      setCategories(data || []);
    }
    setLoadingCats(false);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  /* ============================================================
     BLOG FORM
     ============================================================ */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'title' && !prev.slug ? { slug: slugify(value) } : {}),
    }));
  };

  const handleSubmit = async (e, publish = false) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const payload = {
      ...form,
      status: publish ? 'published' : form.status,
      published_at: publish ? new Date().toISOString() : null,
      author_id: user?.id,
      author_name: user?.email?.split('@')[0] || 'Admin',
      secondary_keywords: form.secondary_keywords
        ? form.secondary_keywords.split(',').map((k) => k.trim())
        : [],
    };
    const { error } = await supabase.from('blogs').insert([payload]);
    setLoading(false);
    if (error) { setError(error.message); return; }
    navigate('/admin/dashboard');
  };

  /* ============================================================
     CATEGORY MODAL — OPEN/CLOSE
     ============================================================ */
  const openCatModal = () => {
    setNewCat({ name: '', slug: '' });
    setCatError('');
    setCatSuccess('');
    setCatSlugTouched(false);
    setEditingId(null);
    setDeletingId(null);
    setShowCatModal(true);
  };

  const closeCatModal = () => {
    if (catSaving) return;
    setShowCatModal(false);
    setNewCat({ name: '', slug: '' });
    setCatError('');
    setCatSuccess('');
    setEditingId(null);
    setDeletingId(null);
  };

  /* ============================================================
     ADD CATEGORY
     ============================================================ */
  const handleCatNameChange = (e) => {
    const value = e.target.value;
    setNewCat((prev) => ({
      name: value,
      slug: catSlugTouched ? prev.slug : slugify(value),
    }));
  };

  const handleCatSlugChange = (e) => {
    setCatSlugTouched(true);
    setNewCat((prev) => ({ ...prev, slug: e.target.value }));
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    setCatError('');
    setCatSuccess('');

    if (!newCat.name.trim()) { setCatError('Category name is required.'); return; }
    if (!newCat.slug.trim()) { setCatError('Slug is required.'); return; }

    const exists = categories.some(
      (c) => c.name.toLowerCase() === newCat.name.trim().toLowerCase()
    );
    if (exists) { setCatError('This category already exists.'); return; }

    setCatSaving(true);
    const { data, error } = await supabase
      .from('categories')
      .insert([{ name: newCat.name.trim(), slug: newCat.slug.trim() }])
      .select()
      .single();
    setCatSaving(false);

    if (error) { setCatError(error.message); return; }

    setCategories((prev) =>
      [...prev, data].sort((a, b) => a.name.localeCompare(b.name))
    );
    setForm((prev) => ({ ...prev, category_name: data.name }));
    setNewCat({ name: '', slug: '' });
    setCatSlugTouched(false);
    setCatSuccess('Category added successfully!');
    setTimeout(() => setCatSuccess(''), 2500);
  };

  /* ============================================================
     EDIT CATEGORY
     ============================================================ */
  const startEdit = (cat) => {
    setEditingId(cat.id);
    setEditForm({ name: cat.name, slug: cat.slug });
    setCatError('');
    setCatSuccess('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ name: '', slug: '' });
  };

  const handleEditNameChange = (e) => {
    const value = e.target.value;
    setEditForm((prev) => ({ ...prev, name: value }));
  };

  const handleEditSlugChange = (e) => {
    setEditForm((prev) => ({ ...prev, slug: e.target.value }));
  };

  const handleSaveEdit = async (id) => {
    setCatError('');
    setCatSuccess('');

    if (!editForm.name.trim()) { setCatError('Name is required.'); return; }
    if (!editForm.slug.trim()) { setCatError('Slug is required.'); return; }

    const duplicate = categories.some(
      (c) =>
        c.id !== id &&
        c.name.toLowerCase() === editForm.name.trim().toLowerCase()
    );
    if (duplicate) { setCatError('Another category with this name exists.'); return; }

    setCatSaving(true);
    const { data, error } = await supabase
      .from('categories')
      .update({ name: editForm.name.trim(), slug: editForm.slug.trim() })
      .eq('id', id)
      .select()
      .single();
    setCatSaving(false);

    if (error) { setCatError(error.message); return; }

    setCategories((prev) =>
      prev
        .map((c) => (c.id === id ? data : c))
        .sort((a, b) => a.name.localeCompare(b.name))
    );
    setEditingId(null);
    setEditForm({ name: '', slug: '' });
    setCatSuccess('Category updated successfully!');
    setTimeout(() => setCatSuccess(''), 2500);
  };

  /* ============================================================
     DELETE CATEGORY
     ============================================================ */
  const handleDeleteClick = (id) => {
    setDeletingId(id);
    setCatError('');
    setCatSuccess('');
  };

  const cancelDelete = () => setDeletingId(null);

  const confirmDelete = async (id, name) => {
    setCatSaving(true);
    const { error } = await supabase.from('categories').delete().eq('id', id);
    setCatSaving(false);

    if (error) { setCatError(error.message); return; }

    setCategories((prev) => prev.filter((c) => c.id !== id));
    // Clear selection if deleted category was selected
    if (form.category_name === name) {
      setForm((prev) => ({ ...prev, category_name: '' }));
    }
    setDeletingId(null);
    setCatSuccess('Category deleted.');
    setTimeout(() => setCatSuccess(''), 2500);
  };

  /* ============================================================
     RENDER
     ============================================================ */
  return (
    <div className="admin-form-page">
      <div className="admin-form-header">
        <Link to="/admin/dashboard" className="admin-back-btn">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <h1>Create New Blog</h1>
      </div>

      {error && <div className="admin-form-error">{error}</div>}

      <form className="admin-form">
        {/* ============ BASIC ============ */}
        <Section title="Basic Information">
          <Field label="Title *">
            <input name="title" value={form.title} onChange={handleChange} required />
          </Field>
          <Field label="Slug *">
            <input name="slug" value={form.slug} onChange={handleChange} required />
          </Field>
          <Field label="Excerpt" full>
            <textarea name="excerpt" rows={2} value={form.excerpt} onChange={handleChange} />
          </Field>
          <Field label="Content *" full>
            <textarea name="content" rows={12} value={form.content} onChange={handleChange} required />
          </Field>
          <Field label="Featured Image URL">
            <input name="featured_image" value={form.featured_image} onChange={handleChange} />
          </Field>
          <Field label="Image Alt Text">
            <input name="featured_image_alt" value={form.featured_image_alt} onChange={handleChange} />
          </Field>
        </Section>

        {/* ============ CLASSIFICATION ============ */}
        <Section title="Classification">
          <Field label="Category">
            <div className="admin-category-row">
              <select
                name="category_name"
                value={form.category_name}
                onChange={handleChange}
                disabled={loadingCats}
                className="admin-category-select"
              >
                <option value="">
                  {loadingCats ? 'Loading categories...' : '— Select category —'}
                </option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>

              {/* ---------- ICON-ONLY BUTTON WITH TOOLTIP ---------- */}
              <div className="admin-tooltip-wrap">
                <button
                  type="button"
                  onClick={openCatModal}
                  className="admin-icon-action-btn"
                  aria-label="Manage categories"
                >
                  <Plus className="w-4.5 h-4.5" strokeWidth={2.5} />
                </button>
                <span className="admin-tooltip">Manage Categories</span>
              </div>
            </div>
          </Field>

          <Field label="Status">
            <select name="status" value={form.status} onChange={handleChange}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </Field>

          <Field label="Reading Time (min)">
            <input
              type="number"
              name="reading_time"
              value={form.reading_time}
              onChange={handleChange}
            />
          </Field>
        </Section>

        {/* ============ SEO ============ */}
        <Section title="SEO / Meta">
          <Field label="Meta Title">
            <input name="meta_title" value={form.meta_title} onChange={handleChange} />
          </Field>
          <Field label="Focus Keyword">
            <input name="focus_keyword" value={form.focus_keyword} onChange={handleChange} />
          </Field>
          <Field label="Meta Description" full>
            <textarea name="meta_description" rows={2} value={form.meta_description} onChange={handleChange} />
          </Field>
          <Field label="Secondary Keywords (comma separated)" full>
            <input name="secondary_keywords" value={form.secondary_keywords} onChange={handleChange} />
          </Field>
        </Section>

        {/* ============ SOCIAL ============ */}
        <Section title="Social Sharing">
          <Field label="OG Title">
            <input name="og_title" value={form.og_title} onChange={handleChange} />
          </Field>
          <Field label="OG Image URL">
            <input name="og_image" value={form.og_image} onChange={handleChange} />
          </Field>
          <Field label="OG Description" full>
            <textarea name="og_description" rows={2} value={form.og_description} onChange={handleChange} />
          </Field>
          <Field label="Twitter Title">
            <input name="twitter_title" value={form.twitter_title} onChange={handleChange} />
          </Field>
          <Field label="Twitter Image">
            <input name="twitter_image" value={form.twitter_image} onChange={handleChange} />
          </Field>
          <Field label="Twitter Description" full>
            <textarea name="twitter_description" rows={2} value={form.twitter_description} onChange={handleChange} />
          </Field>
        </Section>

        {/* ============ ACTIONS ============ */}
        <div className="admin-form-actions">
          <button
            type="button"
            onClick={(e) => handleSubmit(e, false)}
            disabled={loading}
            className="admin-btn admin-btn-ghost"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Save as Draft
          </button>
          <button
            type="button"
            onClick={(e) => handleSubmit(e, true)}
            disabled={loading}
            className="admin-btn admin-btn-primary"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Publish
          </button>
        </div>
      </form>

      {/* ============================================================
          CATEGORY MANAGER MODAL
         ============================================================ */}
      {showCatModal && (
        <div className="admin-modal-backdrop" onClick={closeCatModal}>
          <div
            className="admin-modal admin-modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="admin-modal-header">
              <div>
                <h3>Manage Categories</h3>
                <p>Add, edit or delete categories for your blog posts</p>
              </div>
              <button
                type="button"
                onClick={closeCatModal}
                className="admin-modal-close"
                aria-label="Close"
                disabled={catSaving}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Alerts */}
            {catError && (
              <div className="admin-modal-alert admin-modal-alert-error">
                <AlertCircle className="w-4 h-4" />
                <span>{catError}</span>
              </div>
            )}
            {catSuccess && (
              <div className="admin-modal-alert admin-modal-alert-success">
                <Check className="w-4 h-4" />
                <span>{catSuccess}</span>
              </div>
            )}

            {/* ============================================================
                ADD NEW FORM (inline at top)
               ============================================================ */}
            <form onSubmit={handleAddCategory} className="admin-add-cat-form">
              <div className="admin-add-cat-form-title">
                <Plus className="w-4 h-4" /> Add New Category
              </div>
              <div className="admin-add-cat-form-fields">
                <input
                  type="text"
                  value={newCat.name}
                  onChange={handleCatNameChange}
                  placeholder="Category name"
                  className="admin-add-cat-name"
                />
                <input
                  type="text"
                  value={newCat.slug}
                  onChange={handleCatSlugChange}
                  placeholder="category-slug"
                  className="admin-add-cat-slug"
                />
                <button
                  type="submit"
                  className="admin-btn admin-btn-primary admin-add-cat-submit"
                  disabled={catSaving}
                >
                  {catSaving ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                  Add
                </button>
              </div>
            </form>

            {/* ============================================================
                CATEGORIES TABLE
               ============================================================ */}
            <div className="admin-cat-table-wrap">
              {loadingCats ? (
                <div className="admin-cat-loading">
                  <Loader2 className="w-6 h-6 animate-spin text-[#18239D]" />
                  <span>Loading categories...</span>
                </div>
              ) : categories.length === 0 ? (
                <div className="admin-cat-empty">
                  <p>No categories yet.</p>
                  <p className="admin-cat-empty-hint">Add your first category above ↑</p>
                </div>
              ) : (
                <table className="admin-cat-table">
                  <thead>
                    <tr>
                      <th style={{ width: '40%' }}>Name</th>
                      <th style={{ width: '35%' }}>Slug</th>
                      <th style={{ width: '25%', textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((cat) => {
                      const isEditing = editingId === cat.id;
                      const isDeleting = deletingId === cat.id;

                      return (
                        <tr key={cat.id} className={isEditing ? 'admin-cat-row-editing' : ''}>
                          {/* NAME */}
                          <td>
                            {isEditing ? (
                              <input
                                type="text"
                                value={editForm.name}
                                onChange={handleEditNameChange}
                                className="admin-cat-inline-input"
                                autoFocus
                              />
                            ) : (
                              <span className="admin-cat-name">{cat.name}</span>
                            )}
                          </td>

                          {/* SLUG */}
                          <td>
                            {isEditing ? (
                              <input
                                type="text"
                                value={editForm.slug}
                                onChange={handleEditSlugChange}
                                className="admin-cat-inline-input admin-cat-inline-slug"
                              />
                            ) : (
                              <code className="admin-cat-slug">{cat.slug}</code>
                            )}
                          </td>

                          {/* ACTIONS */}
                          <td>
                            <div className="admin-cat-actions">
                              {isDeleting ? (
                                <>
                                  <span className="admin-cat-confirm-text">Delete?</span>
                                  <button
                                    type="button"
                                    onClick={() => confirmDelete(cat.id, cat.name)}
                                    className="admin-cat-btn admin-cat-btn-danger"
                                    disabled={catSaving}
                                  >
                                    <Check className="w-3.5 h-3.5" />
                                    Yes
                                  </button>
                                  <button
                                    type="button"
                                    onClick={cancelDelete}
                                    className="admin-cat-btn admin-cat-btn-ghost"
                                    disabled={catSaving}
                                  >
                                    No
                                  </button>
                                </>
                              ) : isEditing ? (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => handleSaveEdit(cat.id)}
                                    className="admin-cat-btn admin-cat-btn-success"
                                    disabled={catSaving}
                                  >
                                    {catSaving ? (
                                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                    ) : (
                                      <Check className="w-3.5 h-3.5" />
                                    )}
                                    Save
                                  </button>
                                  <button
                                    type="button"
                                    onClick={cancelEdit}
                                    className="admin-cat-btn admin-cat-btn-ghost"
                                    disabled={catSaving}
                                  >
                                    <X className="w-3.5 h-3.5" />
                                    Cancel
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => startEdit(cat)}
                                    className="admin-cat-icon-btn"
                                    title="Edit"
                                    disabled={catSaving}
                                  >
                                    <Pencil className="w-3.5 h-3.5" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteClick(cat.id)}
                                    className="admin-cat-icon-btn admin-cat-icon-danger"
                                    title="Delete"
                                    disabled={catSaving}
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>

            {/* Footer */}
            <div className="admin-modal-footer">
              <span className="admin-modal-count">
                {categories.length} {categories.length === 1 ? 'category' : 'categories'}
              </span>
              <button
                type="button"
                onClick={closeCatModal}
                className="admin-btn admin-btn-primary"
                disabled={catSaving}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateBlog;