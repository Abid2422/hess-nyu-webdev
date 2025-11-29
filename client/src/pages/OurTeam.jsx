import '../styles/PageLayout.css';

const members = [
  {
    name: 'Muhummad Zain Naveed',
    role: 'President · HESS',
    school: 'CAS | Tandon',
    pronouns: 'he/him',
    bio: 'Chairs the executive board, sets the society’s vision, and builds cross-campus partnerships to amplify NYU STEM.',
    focus: 'Strategy & Partnerships',
    photo: '/members/President.png',
  },
  {
    name: 'Shahriza Mashafi',
    role: 'Vice President',
    school: 'CAS · Executive Leadership',
    pronouns: 'he/him',
    bio: 'Operational lead, coordinating board initiatives, budgeting, and supporting each program track day-to-day.',
    focus: 'Operations & Alignment',
    photo: '/members/VicePresident.png',
  },
  {
    name: 'Elizabeth Kuznetsov',
    role: 'Secretary',
    school: 'CAS · Communications',
    pronouns: 'they/them',
    bio: 'Keeps HESS organized—meeting notes, board documentation, and communication pipelines across CAS ↔ Tandon.',
    focus: 'Org Infrastructure',
    photo: '/members/Secretary.png',
  },
  {
    name: 'Shru Singh',
    role: 'Assistant Secretary',
    school: 'CAS · Communications',
    pronouns: 'she/her',
    bio: 'Supports outreach, archives content, and ensures project handoffs stay clear between media and engineering teams.',
    focus: 'Content Ops',
    photo: '/members/AssistantSecretary.png',
  },
  {
    name: 'Ellie Chen',
    role: 'Assistant Secretary (Brooklyn)',
    school: 'Tandon · Engineering',
    pronouns: 'he/him',
    bio: 'Anchors the Brooklyn campus presence, bridging MakerSpace projects with the downtown storytelling crew.',
    focus: 'Tandon Liaison',
    photo: '/members/AssistantSecretary1.png',
  },
  {
    name: 'Shahzad Awan',
    role: 'Treasurer',
    school: 'CAS · Finance & Accounting',
    pronouns: 'she/her',
    bio: 'Manages the society’s budget, sponsorships, and resource allocations so every program has what it needs.',
    focus: 'Finance & Sponsorship',
    photo: '/members/Treasurer.png',
  },
  {
    name: 'Aziz Ball',
    role: 'Director General',
    school: 'NYU · Programs',
    pronouns: 'he/him',
    bio: 'Leads major initiatives like ScholarSync Studio and HESSPLORE, guiding student teams from idea to delivery.',
    focus: 'Program Direction',
    photo: '/members/DirectorGeneral.png',
  },
  {
    name: 'Giovanni Oliveta',
    role: 'Director General (Global)',
    school: 'NYU · Global Network',
    pronouns: 'she/her',
    bio: 'Extends HESS programming to NYU global campuses, coordinating research spotlights and alumni mentors abroad.',
    focus: 'Global Programs',
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
            <article key={member.name} className="glass-card glass-card--hoverable" style={{ textAlign: 'center' }}>
              {member.photo && (
                <figure style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', width: '220px', height: '220px', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(148,163,184,0.18)' }}>
                  <img src={member.photo} alt={`${member.name}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </figure>
              )}
              <h3>{member.name}</h3>
              <p style={{ color: '#bfdbfe', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.85rem', fontWeight: 600 }}>{member.role}</p>
              {(member.school || member.pronouns) && (
                <p style={{ color: '#cbd5f5', margin: 0 }}>🎓 {member.school} {member.pronouns ? `· ${member.pronouns}` : ''}</p>
              )}
              {member.bio && <p>{member.bio}</p>}
              {member.focus && <p style={{ color: '#94a3b8', fontStyle: 'italic', marginTop: '4px' }}>Focus: {member.focus}</p>}
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
