import { useEffect, useState } from 'react';
import { apiRequest } from '../api/client.js';

const palette = {
  background: '#0F172A',
  surface: 'rgba(255,255,255,0.03)',
  border: 'rgba(255,255,255,0.06)',
  accent: '#6D28D9',
  text: '#E2E8F0',
  muted: '#94A3B8',
};

const heading = {
  fontFamily: 'Montserrat, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontWeight: 800,
};

const paragraph = {
  fontFamily: 'Montserrat, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  lineHeight: 1.6,
  color: palette.text,
};

const cardStyle = {
  backgroundColor: palette.surface,
  border: `1px solid ${palette.border}`,
  borderRadius: '20px',
  padding: '32px',
  boxShadow: '0 20px 45px rgba(10,14,23,0.45)',
  display: 'grid',
  gap: '16px',
};

export default function Programs() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;
    async function loadPrograms() {
      setLoading(true);
      setError('');
      try {
        const data = await apiRequest('/programs');
        if (isMounted) {
          setPrograms(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Unable to load programs');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    loadPrograms();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div style={{ backgroundColor: palette.background, color: palette.text, minHeight: '100vh', padding: '96px 0 104px' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 24px', display: 'grid', gap: '48px' }}>
        <header style={{ textAlign: 'center', display: 'grid', gap: '18px' }}>
          <span style={{ ...paragraph, color: palette.muted, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.82rem' }}>
            HESS Programs · 2024–2025
          </span>
          <h1 style={{ ...heading, fontSize: 'clamp(2.4rem, 4.8vw, 3.6rem)' }}>
            Where HESS members build skills, stories, and community
          </h1>
          <p style={{ ...paragraph, color: palette.muted, maxWidth: '760px', margin: '0 auto' }}>
            Whether you’re prototyping hardware, translating research, or meeting mentors, there’s a track that keeps you connected to the people and labs shaping NYU STEM.
          </p>
        </header>

        {loading ? (
          <p style={{ ...paragraph, color: palette.muted, textAlign: 'center' }}>Loading programs…</p>
        ) : error ? (
          <p style={{ ...paragraph, color: '#fca5a5', textAlign: 'center' }}>{error}</p>
        ) : (
          <section style={{ display: 'grid', gap: '28px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {programs.map((program) => (
              <article key={program._id} style={cardStyle}>
                <div>
                  <h2 style={{ ...heading, fontSize: '1.8rem', marginBottom: '6px' }}>{program.title}</h2>
                  {program.shortDescription && (
                    <p style={{ ...paragraph, color: palette.muted, fontStyle: 'italic' }}>{program.shortDescription}</p>
                  )}
                </div>
                {program.longDescription && (
                  <p style={{ ...paragraph, opacity: 0.92 }}>
                    {program.longDescription}
                  </p>
                )}
                {program.meetingFrequency && (
                  <p style={{ ...paragraph, color: palette.muted, fontSize: '0.95rem' }}>
                    📅 {program.meetingFrequency}
                  </p>
                )}
                {program.ctaLabel && program.ctaUrl && (
                  <a href={program.ctaUrl} style={{ ...paragraph, color: palette.accent, fontWeight: 600 }}>
                    {program.ctaLabel}
                  </a>
                )}
              </article>
            ))}
            {programs.length === 0 && (
              <p style={{ gridColumn: '1/-1', ...paragraph, color: palette.muted, textAlign: 'center' }}>
                Sit tight—fresh programs are being finalized and will appear here soon.
              </p>
            )}
          </section>
        )}

        <footer style={{ textAlign: 'center', display: 'grid', gap: '10px' }}>
          <p style={{ ...paragraph, color: palette.muted }}>
            Curious where you fit? Email <a href="mailto:nyuhemmes@gmail.com" style={{ color: palette.text, textDecoration: 'underline', fontWeight: 600 }}>nyuhemmes@gmail.com</a> and we’ll match you with the right track.
          </p>
        </footer>
      </div>
    </div>
  );
}
