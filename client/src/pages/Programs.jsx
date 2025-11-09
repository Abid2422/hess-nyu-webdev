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

const programs = [
  {
    title: 'ScholarSync Studio',
    tagline: 'From journal article to story in under 48 hours.',
    description: 'Our media lab where storytellers and engineers translate dense research into short videos, scripts, and social spotlights. Teams pair with NYU labs to publish every week.',
    cadence: 'Meets bi-weekly · Wednesdays 6–8 PM · 25 W 4th St Media Studio',
    callout: 'Looking for video editors, copywriters, and on-camera hosts.',
  },
  {
    title: 'Pathways Program',
    tagline: 'Helping STEM students land research and industry roles.',
    description: 'Workshops, alumni mentorship, and curated internship drops tailored for CAS ↔ Tandon students. Includes resume clinics, mock interviews, and introductions to faculty labs.',
    cadence: 'Monthly cohort sessions + 1:1 mentor check-ins',
    callout: 'Applications open each semester; priority for active HESS members.',
  },
  {
    title: 'Maker Nights',
    tagline: 'Prototype sprints linking hardware + software.',
    description: 'Hands-on evenings in the MakerSpace for sensors, robotics, and rapid prototyping. Industry mentors rotate through to offer design reviews and technical feedback.',
    cadence: 'Fridays 7–10 PM · Tandon MakerSpace',
    callout: 'BYO project or join an existing sprint team.',
  },
  {
    title: 'Faculty Firesides',
    tagline: 'Small-group conversations with NYU researchers.',
    description: 'Curated salon-style gatherings featuring emerging science across NYU. Guests from Courant, Grossman, and Stern unpack their latest findings with plenty of time for Q&A.',
    cadence: 'Twice per month · Hybrid (in-person + Zoom)',
    callout: 'RSVPs required; spots released to the mailing list first.',
  },
];

export default function Programs() {
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

        <section style={{ display: 'grid', gap: '28px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {programs.map((program) => (
            <article key={program.title} style={cardStyle}>
              <div>
                <h2 style={{ ...heading, fontSize: '1.8rem', marginBottom: '6px' }}>{program.title}</h2>
                <p style={{ ...paragraph, color: palette.muted, fontStyle: 'italic' }}>{program.tagline}</p>
              </div>
              <p style={{ ...paragraph, opacity: 0.92 }}>
                {program.description}
              </p>
              <p style={{ ...paragraph, color: palette.muted, fontSize: '0.95rem' }}>
                📅 {program.cadence}
              </p>
              <p style={{ ...paragraph, color: palette.accent, fontWeight: 600 }}>
                {program.callout}
              </p>
            </article>
          ))}
        </section>

        <footer style={{ textAlign: 'center', display: 'grid', gap: '10px' }}>
          <p style={{ ...paragraph, color: palette.muted }}>
            Curious where you fit? Email <a href="mailto:programs@hess-nyu.org" style={{ color: palette.text, textDecoration: 'underline', fontWeight: 600 }}>programs@hess-nyu.org</a> and we’ll match you with the right track.
          </p>
        </footer>
      </div>
    </div>
  );
}
