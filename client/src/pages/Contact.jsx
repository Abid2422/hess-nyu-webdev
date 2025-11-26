const palette = {
  background: '#0F172A',
  surface: 'rgba(255,255,255,0.03)',
  border: 'rgba(255,255,255,0.06)',
  accent: '#6D28D9',
  text: '#E2E8F0',
  muted: '#94A3B8',
};

const heading = {
  fontFamily: 'Montserrat, system-ui, -apple-system, "Segoe UI", sans-serif',
  fontWeight: 800,
};

const paragraph = {
  fontFamily: heading.fontFamily,
  color: palette.text,
  lineHeight: 1.6,
};

export default function Contact() {
  return (
    <div style={{ backgroundColor: palette.background, color: palette.text, minHeight: '100vh', padding: '96px 0 104px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px', display: 'grid', gap: '28px' }}>
        <header style={{ textAlign: 'center', display: 'grid', gap: '12px' }}>
          <h1 style={{ ...heading, fontSize: 'clamp(2.2rem, 5vw, 3rem)' }}>Stay in touch with HESS</h1>
          <p style={{ ...paragraph, color: palette.muted }}>
            We’re happy to connect about collaborations, speaking opportunities, and ways to join our community.
          </p>
        </header>

        <section
          style={{
            backgroundColor: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: '24px',
            padding: '32px',
            boxShadow: '0 24px 48px rgba(9,13,22,0.45)',
            display: 'grid',
            gap: '20px',
          }}
        >
          <div>
            <h2 style={{ ...heading, fontSize: '1.6rem', marginBottom: '8px' }}>Email</h2>
            <p style={{ ...paragraph }}>
              <a href="mailto:nyuhemmes@gmail.com" style={{ color: palette.accent, textDecoration: 'underline', fontWeight: 600 }}>
                nyuhemmes@gmail.com
              </a>
            </p>
          </div>
          <div>
            <h2 style={{ ...heading, fontSize: '1.6rem', marginBottom: '8px' }}>Instagram</h2>
            <p style={{ ...paragraph }}>
              <a href="https://www.instagram.com/hess.nyu/" target="_blank" rel="noreferrer" style={{ color: palette.accent, textDecoration: 'underline', fontWeight: 600 }}>
                @hess.nyu
              </a>
            </p>
          </div>
          <div>
            <h2 style={{ ...heading, fontSize: '1.6rem', marginBottom: '8px' }}>Location</h2>
            <p style={{ ...paragraph, color: palette.muted }}>
              25 West 4th Street · 5th Floor<br />
              New York, NY 10012
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}


