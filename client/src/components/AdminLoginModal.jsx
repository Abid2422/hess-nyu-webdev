import { useState } from 'react';
import { apiRequest } from '../api/client.js';
import { useAuth } from '../context/AuthContext.jsx';

const palette = {
  background: '#0F172A',
  surface: 'rgba(255,255,255,0.05)',
  border: 'rgba(255,255,255,0.08)',
  accent: '#6D28D9',
  text: '#E2E8F0',
  muted: '#94A3B8',
};

export function AdminLoginModal({ isOpen, onClose }) {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);
    try {
      const data = await apiRequest('/auth/login', {
        method: 'POST',
        body: { username, password },
      });
      login(data);
      setUsername('');
      setPassword('');
      onClose();
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(10,15,25,0.8)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 200,
        padding: '20px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(15,23,42,0.92) 100%)',
          borderRadius: '20px',
          border: `1px solid ${palette.border}`,
          boxShadow: '0 35px 70px rgba(8,12,24,0.6)',
          padding: '32px',
          width: '100%',
          maxWidth: '420px',
          color: palette.text,
          fontFamily: 'Montserrat, system-ui, -apple-system, "Segoe UI", sans-serif',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Admin login</h2>
          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'transparent',
              border: `1px solid ${palette.border}`,
              color: palette.muted,
              borderRadius: '999px',
              padding: '6px 12px',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
          <label style={{ display: 'grid', gap: '6px', fontSize: '0.95rem', color: palette.muted }}>
            Username
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="username"
              required
              style={{
                backgroundColor: palette.surface,
                border: `1px solid ${palette.border}`,
                borderRadius: '10px',
                padding: '10px 14px',
                color: palette.text,
              }}
            />
          </label>
          <label style={{ display: 'grid', gap: '6px', fontSize: '0.95rem', color: palette.muted }}>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
              style={{
                backgroundColor: palette.surface,
                border: `1px solid ${palette.border}`,
                borderRadius: '10px',
                padding: '10px 14px',
                color: palette.text,
              }}
            />
          </label>
          {error && (
            <p style={{ color: '#fca5a5', fontSize: '0.9rem' }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              marginTop: '12px',
              padding: '12px 18px',
              borderRadius: '12px',
              border: 'none',
              fontWeight: 700,
              fontSize: '1rem',
              background: isSubmitting ? 'rgba(109,40,217,0.4)' : palette.accent,
              color: '#fff',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              transition: 'transform 0.2s ease',
            }}
          >
            {isSubmitting ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}


