// src/pages/admin/EditBlog.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from "../../lib/supabaseClient";
import { Loader2, ArrowLeft, Save, Trash2 } from 'lucide-react';
import './Admin.css';

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState(null);

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        setError(error.message);
      } else {
        setForm({
          ...data,
          secondary_keywords: (data.secondary_keywords || []).join(', '),
        });
      }
      setLoading(false);
    };
    load();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (publish) => {
    setSaving(true);
    setError('');

    const payload = {
      ...form,
      status: publish ? 'published' : form.status,
      published_at:
        publish && !form.published_at ? new Date().toISOString() : form.published_at,
      secondary_keywords: form.secondary_keywords
        ? form.secondary_keywords.split(',').map((k) => k.trim())
        : [],
    };

    const { error } = await supabase.from('blogs').update(payload).eq('id', id);
    setSaving(false);

    if (error) {
      setError(error.message);
      return;
    }
    navigate('/admin/dashboard');
  };

  const handleDelete = async () => {
    if (!window.confirm('Delete this blog permanently?')) return;
    await supabase.from('blogs').delete().eq('id', id);
    navigate('/admin/dashboard');
  };

  if (loading) {
    return (
      <div className="admin-loading">
        <Loader2 className="w-8 h-8 animate-spin text-[#01ADF0]" />
      </div>
    );
  }

  if (!form) return <div className="admin-form-error">{error || 'Blog not found'}</div>;

  return (
    <div className="admin-form-page">
      <div className="admin-form-header">
        <Link to="/admin/dashboard" className="admin-back-btn">
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>
        <h1>Edit Blog</h1>
      </div>

      {error && <div className="admin-form-error">{error}</div>}

      <form className="admin-form" onSubmit={(e) => e.preventDefault()}>
        <Section title="Basic Information">
          <Field label="Title *">
            <input name="title" value={form.title || ''} onChange={handleChange} />
          </Field>
          <Field label="Slug *">
            <input name="slug" value={form.slug || ''} onChange={handleChange} />
          </Field>
          <Field label="Excerpt" full>
            <textarea name="excerpt" rows={2} value={form.excerpt || ''} onChange={handleChange} />
          </Field>
          <Field label="Content *" full>
            <textarea name="content" rows={12} value={form.content || ''} onChange={handleChange} />
          </Field>
          <Field label="Featured Image URL">
            <input name="featured_image" value={form.featured_image || ''} onChange={handleChange} />
          </Field>
          <Field label="Image Alt Text">
            <input name="featured_image_alt" value={form.featured_image_alt || ''} onChange={handleChange} />
          </Field>
        </Section>

        <Section title="Classification">
          <Field label="Category">
            <input name="category_name" value={form.category_name || ''} onChange={handleChange} />
          </Field>
          <Field label="Status">
            <select name="status" value={form.status || 'draft'} onChange={handleChange}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </Field>
          <Field label="Reading Time (min)">
            <input type="number" name="reading_time" value={form.reading_time || 5} onChange={handleChange} />
          </Field>
        </Section>

        <Section title="SEO / Meta">
          <Field label="Meta Title">
            <input name="meta_title" value={form.meta_title || ''} onChange={handleChange} />
          </Field>
          <Field label="Focus Keyword">
            <input name="focus_keyword" value={form.focus_keyword || ''} onChange={handleChange} />
          </Field>
          <Field label="Meta Description" full>
            <textarea name="meta_description" rows={2} value={form.meta_description || ''} onChange={handleChange} />
          </Field>
          <Field label="Secondary Keywords" full>
            <input name="secondary_keywords" value={form.secondary_keywords || ''} onChange={handleChange} />
          </Field>
        </Section>

        <Section title="Social Sharing">
          <Field label="OG Title">
            <input name="og_title" value={form.og_title || ''} onChange={handleChange} />
          </Field>
          <Field label="OG Image URL">
            <input name="og_image" value={form.og_image || ''} onChange={handleChange} />
          </Field>
          <Field label="OG Description" full>
            <textarea name="og_description" rows={2} value={form.og_description || ''} onChange={handleChange} />
          </Field>
          <Field label="Twitter Title">
            <input name="twitter_title" value={form.twitter_title || ''} onChange={handleChange} />
          </Field>
          <Field label="Twitter Image">
            <input name="twitter_image" value={form.twitter_image || ''} onChange={handleChange} />
          </Field>
          <Field label="Twitter Description" full>
            <textarea name="twitter_description" rows={2} value={form.twitter_description || ''} onChange={handleChange} />
          </Field>
        </Section>

        <div className="admin-form-actions">
          <button
            type="button"
            onClick={handleDelete}
            className="admin-btn admin-btn-danger"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
          <button
            type="button"
            onClick={() => handleSave(false)}
            disabled={saving}
            className="admin-btn admin-btn-ghost"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Save Draft
          </button>
          <button
            type="button"
            onClick={() => handleSave(true)}
            disabled={saving}
            className="admin-btn admin-btn-primary"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

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

export default EditBlog;