import '../styles/PageLayout.css';

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
    <div className="page page--join">
      <div className="page-content">
        <header className="page-header">
          <h1>Join the HESS teams</h1>
          <p>We’re opening roles across our storytelling, engineering, and community crews. Explore the tracks below—applications launch soon.</p>
        </header>

        <section className="card-grid">
          {teams.map((team) => (
            <article key={team.name} className="glass-card glass-card--hoverable">
              <h3>{team.name}</h3>
              <p>{team.description}</p>
            </article>
          ))}
        </section>

        <section className="glass-section" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Next steps</h2>
          <p className="section-description">
            More information about joining and applications will be available soon. In the meantime, questions are always welcome at{' '}
            <a className="ghost-link" href="mailto:nyuhemmes@gmail.com">nyuhemmes@gmail.com</a>.
          </p>
    </section>
      </div>
    </div>
  );
}


