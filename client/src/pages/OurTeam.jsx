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
  borderRadius: '24px',
  padding: '24px',
  boxShadow: '0 24px 48px rgba(9,13,22,0.45)',
  display: 'grid',
  gap: '18px',
  textAlign: 'center',
};

const photoWrapper = {
  position: 'relative',
  width: '220px',
  height: '220px',
  margin: '0 auto',
  borderRadius: '20px',
  overflow: 'hidden',
  border: `1px solid ${palette.border}`,
  background: 'rgba(255,255,255,0.08)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const photoStyle = {
  width: '100%',
  height: '100%',
  display: 'block',
  objectFit: 'cover',
};

const members = [
  {
    name: 'Muhammad Zain Naveed',
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
    school: 'NYU · Communications',
    pronouns: 'they/them',
    bio: 'Keeps HESS organized—meeting notes, board documentation, and communication pipelines across CAS ↔ Tandon.',
    focus: 'Org Infrastructure',
    photo: '/members/Secretary.png',
  },
  {
    name: 'Shru Singh',
    role: 'Assistant Secretary',
    school: 'NYU · Communications',
    pronouns: 'she/her',
    bio: 'Supports outreach, archives content, and ensures project handoffs stay clear between media and engineering teams.',
    focus: 'Content Ops',
    photo: '/members/AssistantSecretary.png',
  },
  {
    name: 'Ellie Chen',
    role: 'Assistant Secretary',
    school: 'NYU Tandon · Engineering',
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
    role: 'Director General',
    school: 'NYU · Global Network',
    pronouns: 'she/her',
    bio: 'Extends HESS programming to NYU global campuses, coordinating research spotlights and alumni mentors abroad.',
    focus: 'Global Programs',
    photo: '/members/DirectorGeneral1.png',
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
              {member.photo && (
                <figure style={photoWrapper}>
                  <img
                    src={member.photo}
                    alt={`${member.name} portrait`}
                    style={photoStyle}
                  />
                </figure>
              )}
              <div>
                <h2 style={{ ...heading, fontSize: '1.6rem', marginBottom: '4px' }}>{member.name}</h2>
                <p style={{ ...paragraph, color: palette.muted, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                  {member.role}
                </p>
              </div>
              {(member.school || member.pronouns) && (
                <p style={{ ...paragraph, color: palette.muted, marginBottom: '4px', fontSize: '0.95rem' }}>
                  🎓 {member.school} {member.pronouns ? `· ${member.pronouns}` : ''}
                </p>
              )}
              {member.bio && (
                <p style={{ ...paragraph, opacity: 0.92 }}>
                  {member.bio}
                </p>
              )}
              {member.focus && (
                <p style={{ ...paragraph, color: palette.muted, fontStyle: 'italic', fontSize: '0.95rem' }}>
                  Focus: {member.focus}
                </p>
              )}
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
