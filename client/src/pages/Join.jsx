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

const teams = [
  {
    name: 'Ambassadors',
    description: 'Represent HESS across NYU, welcoming new members and sharing opportunities at campus events.',
  },
  {
    name: 'Research & Development',
    description: 'Prototype new tools, run ScholarSync pilots, and explore emerging tech for STEM storytelling.',
  },
  {
    name: 'Collaboration',
    description: 'Build partnerships with faculty labs, student orgs, and industry friends to power ambitious programming.',
  },
  {
    name: 'Web Development',
    description: 'Ship new features for the HESS site and dashboards; help integrate ScholarSync and event tooling.',
  },
  {
    name: 'IT',
    description: 'Keep our internal systems organized—from email workflows to analytics dashboards and automation.',
  },
  {
    name: 'Entrepreneurship',
    description: 'Connect students with venture resources, run founder spotlights, and translate research into startups.',
  },
  {
    name: 'Publications',
    description: 'Edit HESSPLORE features, craft newsletters, and help faculty translate cutting-edge research for everyone.',
  },
  {
    name: 'Media & Externals',
    description: 'Produce video, photo, and social content; manage outward-facing campaigns and external communications.',
  },
];

export default function Join() {
  return (
    <div style={{ backgroundColor: palette.background, color: palette.text, minHeight: '100vh', padding: '96px 0 104px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px', display: 'grid', gap: '32px' }}>
        <header style={{ textAlign: 'center', display: 'grid', gap: '12px' }}>
          <h1 style={{ ...heading, fontSize: 'clamp(2.2rem, 5vw, 3.2rem)' }}>Join the HESS teams</h1>
          <p style={{ ...paragraph, color: palette.muted, maxWidth: '720px', margin: '0 auto' }}>
            We’re kicking off recruitment for specialized crews that keep HESS running. Each team focuses on a different part of our mission—choose where you want to build impact.
          </p>
        </header>

        <section style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {teams.map((team) => (
            <article
              key={team.name}
              style={{
                backgroundColor: palette.surface,
                border: `1px solid ${palette.border}`,
                borderRadius: '20px',
                padding: '24px',
                boxShadow: '0 24px 48px rgba(9,13,22,0.45)',
                display: 'grid',
                gap: '10px',
              }}
            >
              <h2 style={{ ...heading, fontSize: '1.4rem' }}>{team.name}</h2>
              <p style={{ ...paragraph, color: palette.muted }}>{team.description}</p>
            </article>
          ))}
        </section>

        <footer style={{ textAlign: 'center' }}>
          <p style={{ ...paragraph, color: palette.muted }}>
            More details about joining and applications will be released soon. In the meantime, questions are always welcome at{' '}
            <a href="mailto:nyuhemmes@gmail.com" style={{ color: palette.accent, textDecoration: 'underline', fontWeight: 600 }}>
              nyuhemmes@gmail.com
            </a>.
          </p>
        </footer>
      </div>
    </div>
  );
}


