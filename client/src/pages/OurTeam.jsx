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
  borderRadius: '18px',
  padding: '28px',
  boxShadow: '0 18px 36px rgba(9,13,22,0.45)',
  display: 'grid',
  gap: '14px',
};

const members = [
  {
    name: 'Maya R.',
    role: 'President · HESS',
    program: 'CAS · Neural Science & Computer Science',
    bio: 'Leads cross-campus partnerships and the HESSPLORE editorial team. Currently researching memory and perception.',
    focus: 'Strategy & Partnerships',
  },
  {
    name: 'Elias T.',
    role: 'Director of Technovation',
    program: 'Tandon · Mechatronics & Robotics',
    bio: 'Heads ScholarSync engineering and prototyping nights in the MakerSpace, helping teams bring hardware ideas to life.',
    focus: 'Product & Maker Initiatives',
  },
  {
    name: 'Sahana K.',
    role: 'Director of Storytelling',
    program: 'Steinhardt · Media, Culture, and Communication',
    bio: 'Translates complex research into digestible media, coaching student hosts and coordinating interview shoots.',
    focus: 'HESSPLORE Media',
  },
  {
    name: 'Jordan P.',
    role: 'Community & Events Lead',
    program: 'CAS · Physics',
    bio: 'Designs mixer formats, manages the speaker series pipeline, and keeps the events calendar humming.',
    focus: 'Events & Membership',
  },
];

export default function OurTeam() {
  return (
    <div style={{ backgroundColor: palette.background, color: palette.text, minHeight: '100vh', padding: '96px 0 104px' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 24px', display: 'grid', gap: '48px' }}>
        <header style={{ textAlign: 'center', display: 'grid', gap: '18px' }}>
          <span style={{ ...paragraph, color: palette.muted, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.82rem' }}>
            HESS Board · 2024–2025
          </span>
          <h1 style={{ ...heading, fontSize: 'clamp(2.4rem, 4.8vw, 3.6rem)' }}>
            Meet the team powering NYU’s STEM storytelling engine
          </h1>
          <p style={{ ...paragraph, color: palette.muted, maxWidth: '760px', margin: '0 auto' }}>
            Strategists, makers, and storytellers from CAS, Tandon, and across the global network—working together to connect NYU’s labs with its students.
          </p>
        </header>

        <section style={{ display: 'grid', gap: '28px', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {members.map((member) => (
            <article key={member.name} style={cardStyle}>
              <div>
                <h2 style={{ ...heading, fontSize: '1.6rem', marginBottom: '4px' }}>{member.name}</h2>
                <p style={{ ...paragraph, color: palette.muted, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                  {member.role}
                </p>
              </div>
              <p style={{ ...paragraph, color: palette.muted, marginBottom: '4px', fontSize: '0.95rem' }}>
                🎓 {member.program}
              </p>
              <p style={{ ...paragraph, opacity: 0.92 }}>
                {member.bio}
              </p>
              <p style={{ ...paragraph, color: palette.muted, fontStyle: 'italic', fontSize: '0.95rem' }}>
                Focus: {member.focus}
              </p>
            </article>
          ))}
        </section>

        <footer style={{ textAlign: 'center', display: 'grid', gap: '10px' }}>
          <p style={{ ...paragraph, color: palette.muted }}>
            Interested in joining the board? Applications open each semester—watch the mailing list or DM <a href="https://www.instagram.com/hess.nyu/" style={{ color: palette.text, textDecoration: 'underline', fontWeight: 600 }}>@hess.nyu</a>.
          </p>
        </footer>
      </div>
    </div>
  );
}
