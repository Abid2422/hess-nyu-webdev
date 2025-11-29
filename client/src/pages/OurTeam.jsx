import '../styles/PageLayout.css';

const members = [
  {
    name: 'Muhummad Zain Naveed',
    role: 'President · HESS',
    school: 'CAS | Tandon',
    photo: '/members/President.png',
  },
  {
    name: 'Shahriza Mashafi',
    role: 'Vice President',
    school: 'CAS · Executive Leadership',
    photo: '/members/VicePresident.png',
  },
  {
    name: 'Elizabeth Kuznetsov',
    role: 'Secretary',
    school: 'CAS · Communications',
    photo: '/members/Secretary.png',
  },
  {
    name: 'Shru Singh',
    role: 'Assistant Secretary',
    school: 'CAS · Communications',
    photo: '/members/AssistantSecretary.png',
  },
  {
    name: 'Ellie Chen',
    role: 'Assistant Secretary (Brooklyn)',
    school: 'Tandon · Engineering',
    photo: '/members/AssistantSecretary1.png',
  },
  {
    name: 'Shahzad Awan',
    role: 'Treasurer',
    school: 'CAS · Finance & Accounting',
    photo: '/members/Treasurer.png',
  },
  {
    name: 'Aziz Ball',
    role: 'Director General',
    school: 'NYU · Programs',
    photo: '/members/DirectorGeneral.png',
  },
  {
    name: 'Giovanni Oliveta',
    role: 'Director General (Global)',
    school: 'NYU · Global Network',
    photo: '/members/DirectorGeneral1.png',
  },
];

export default function OurTeam() {
  return (
    <div className="page page--team">
      <div className="page-content">
        <header className="page-header">
          <h1>Meet the team powering NYU’s STEM storytelling engine</h1>
          <p>Strategists, makers, and storytellers from CAS, Tandon, and across the global network—working together to connect NYU’s labs with its students.</p>
        </header>

        <section className="card-grid">
          {members.map((member) => (
            <article
              key={member.name}
              className="glass-card glass-card--hoverable"
              style={{
                textAlign: 'center',
                display: 'grid',
                justifyItems: 'center',
                gap: '14px',
                padding: '24px',
                minHeight: '360px',
              }}
            >
              {member.photo && (
                <figure
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 0,
                    width: '100%',
                  }}
                >
                  <div
                    style={{
                      width: '200px',
                      height: '200px',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: '1px solid rgba(148,163,184,0.18)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      src={member.photo}
                      alt={`${member.name}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </div>
                </figure>
              )}
              <h3>{member.name}</h3>
              <p style={{ color: '#bfdbfe', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.85rem', fontWeight: 600 }}>{member.role}</p>
              {member.school && <p style={{ color: '#cbd5f5', margin: 0 }}>🎓 {member.school}</p>}
            </article>
          ))}
        </section>

        <section className="glass-section" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Join the leadership</h2>
          <p className="section-description">
            Interested in joining the board? Applications open each semester—watch the mailing list or DM <a className="ghost-link" href="https://www.instagram.com/hess.nyu/" target="_blank" rel="noreferrer">@hess.nyu</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
