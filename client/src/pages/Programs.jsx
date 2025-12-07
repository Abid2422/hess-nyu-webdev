import { useEffect, useState } from 'react';
import { apiRequest } from '../api/client.js';
import '../styles/PageLayout.css';

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
    <div className="page page--programs">
      <div className="page-content">
        <header className="page-header">
          <h1>Explore HESS Programs</h1>
          <p>Hands-on labs, storytelling studios, and mentorship tracks that connect NYU&apos;s engineering and science communities.</p>
        </header>

        <section className="glass-section">
          <h2 className="section-title">Programs & initiatives</h2>
          {loading && <p className="page-note">Loading programs…</p>}
          {error && <p className="page-note" style={{ color: '#fca5a5' }}>{error}</p>}

          {!loading && !error && (
            <div className="card-grid">
              {programs.map((program) => (
                <article key={program._id} className="glass-card glass-card--hoverable">
                  <h3>{program.title}</h3>
                  {program.shortDescription && <h4>{program.shortDescription}</h4>}
                  {program.longDescription && <p>{program.longDescription}</p>}
                  {program.meetingFrequency && (
                    <p style={{ color: '#bfdbfe' }}>📅 {program.meetingFrequency}</p>
                  )}
                  {program.ctaLabel && program.ctaUrl && (
                    <a className="ghost-link" href={program.ctaUrl} target="_blank" rel="noreferrer">
                      {program.ctaLabel} →
                    </a>
                  )}
                </article>
              ))}
            </div>
          )}

          {!loading && !error && programs.length === 0 && (
            <p className="page-note" style={{ marginTop: '8px' }}>
              Sit tight—fresh programs are being finalized and will appear here soon.
            </p>
          )}
        </section>

        <section className="glass-section">
          <h2 className="section-title">Have an idea?</h2>
          <p className="section-description">
            Curious where you fit? Email <a className="ghost-link" href="mailto:nyuhemmes@gmail.com">nyuhemmes@gmail.com</a> and we’ll match you with the right track or help you launch the next one.
          </p>
    </section>
      </div>
    </div>
  );
}
