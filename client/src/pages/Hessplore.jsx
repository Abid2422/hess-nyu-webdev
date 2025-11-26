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

const scholars = [
  {
    emoji: '🧠',
    name: 'Prof. Isaac Suborno Bari',
    title: 'Mathematics & Physics, NYU — “World’s Youngest Professor”',
    blurb: 'Embodies limitless curiosity, inspiring students to pursue discovery without boundaries.',
  },
  {
    emoji: '🧬',
    name: 'Dean Wendy Suzuki',
    title: 'Dean, NYU College of Arts & Science',
    blurb: 'Neuroscientist and Donald B. Lindsley Prize recipient leading research on brain plasticity, learning, and memory.',
  },
  {
    emoji: '🔬',
    name: 'Prof. Dr. Justin Blau',
    title: 'Professor of Biology & Neural Science',
    blurb: 'Eppendorf & Science Essay Prize winner advancing our understanding of neural circuitry.',
  },
  {
    emoji: '🌈',
    name: 'Prof. Dr. Joseph Osmundson',
    title: 'Clinical Professor, NYU — Biophysicist & Author',
    blurb: 'Author of VIROLOGY whose work spans Cell, PNAS, The New York Times, and TIME, merging science, literature, and activism.',
  },
  {
    emoji: '🧠',
    name: 'Prof. Dr. Claude Desplan',
    title: 'Professor, Neuroscience Institute, NYU Langone',
    blurb: 'Leads developmental neurobiology research uncovering how neuronal diversity is established.',
  },
  {
    emoji: '🧪',
    name: 'Dr. Isabel Garon',
    title: 'Doctor of Philosophy, Neuroscience Institute, NYU',
    blurb: 'Explores cognitive and neural mechanisms, strengthening NYU’s neuroscience ecosystem.',
  },
];

const risingScholars = [
  'Daniel Tkach – Co-Founder, For Future Lungs · BS/DDS NYU',
  'Idriss Attard – CAS College Leader · Researcher at Columbia University',
  'Deven Huang – Founder, NYU Undergraduate Research Journal (URJ)',
  'Michael Arzanipour – Founder, NYU Pre-Vet Club · NYU AMSA Secretary',
  'Benjamin Rambourg – Presidential Honors Scholar · Clinical Associate at OnPoint NYC',
  'Marvellous Nwanna – Scholar · Researcher at Einstein College & Columbia',
  'Nathan Han – Research at NYU Langone & Mount Sinai · EMT at Ambulnz',
  'Mahdi HassanAli – NASA Intern · 2× Published Author · BS Physics NYU',
];

export default function Hessplore() {
  return (
    <div style={{ backgroundColor: palette.background, color: palette.text, minHeight: '100vh', padding: '96px 0 104px' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 24px', display: 'grid', gap: '48px' }}>
        <header style={{ textAlign: 'center', display: 'grid', gap: '16px' }}>
          <h1 style={{ ...heading, fontSize: 'clamp(2.3rem, 5vw, 3.4rem)' }}>HESSplore</h1>
          <p style={{ ...paragraph, color: palette.muted, maxWidth: '780px', margin: '0 auto' }}>
            Dive into NYU’s engineering, medicine, and science universe. HESSplore curates the scholars, students, and programs that define our community.
          </p>
        </header>

        {/* Section 1 */}
        <section
          style={{
            backgroundColor: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: '28px',
            padding: '32px',
            boxShadow: '0 32px 64px rgba(9,13,22,0.45)',
            display: 'grid',
            gap: '20px',
          }}
        >
          <h2 style={{ ...heading, fontSize: '1.9rem' }}>⭐ Section 1 — Meet Our Distinguished Scholars</h2>
          <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {scholars.map((scholar) => (
              <article
                key={scholar.name}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  border: `1px solid ${palette.border}`,
                  borderRadius: '20px',
                  padding: '20px',
                  display: 'grid',
                  gap: '10px',
                }}
              >
                <span style={{ fontSize: '2rem' }}>{scholar.emoji}</span>
                <h3 style={{ ...heading, fontSize: '1.2rem' }}>{scholar.name}</h3>
                <p style={{ ...paragraph, color: palette.muted, fontWeight: 600 }}>{scholar.title}</p>
                <p style={{ ...paragraph, color: palette.muted }}>{scholar.blurb}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Section 2 */}
        <section
          style={{
            backgroundColor: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: '28px',
            padding: '32px',
            boxShadow: '0 32px 64px rgba(9,13,22,0.45)',
            display: 'grid',
            gap: '16px',
          }}
        >
          <h2 style={{ ...heading, fontSize: '1.9rem' }}>🚀 Section 2 — Rising Scholars & Innovators</h2>
          <p style={{ ...paragraph, color: palette.muted }}>
            These student leaders represent the future of engineering, medicine, and scientific discovery.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
            {risingScholars.map((item) => (
              <li key={item} style={{ ...paragraph, color: palette.text }}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Section 3 */}
        <section
          style={{
            backgroundColor: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: '28px',
            padding: '32px',
            boxShadow: '0 32px 64px rgba(9,13,22,0.45)',
            display: 'grid',
            gap: '16px',
          }}
        >
          <h2 style={{ ...heading, fontSize: '1.9rem' }}>🌐 Section 3 — What Is HESSplore?</h2>
          <p style={{ ...paragraph }}>
            HESSplore is your gateway into the world of engineering, medicine, and scientific excellence at NYU. We curate:
          </p>
          <ul style={{ ...paragraph, color: palette.muted, paddingLeft: '20px' }}>
            <li>Faculty spotlights & research breakthroughs</li>
            <li>Student innovation & academic achievement</li>
            <li>HESS events, seminars, and accelerator programs</li>
            <li>Opportunities to join NYU’s scientific community</li>
          </ul>
          <p style={{ ...paragraph, color: palette.muted }}>
            Our purpose is to bridge students with mentors, ideas, and pathways that shape the future of STEM.
          </p>
        </section>

        {/* Section 4 */}
        <section
          style={{
            backgroundColor: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: '28px',
            padding: '32px',
            boxShadow: '0 32px 64px rgba(9,13,22,0.45)',
            display: 'grid',
            gap: '16px',
          }}
        >
          <h2 style={{ ...heading, fontSize: '1.9rem' }}>🚧 Section 4 — Programs & Opportunities</h2>
          <article style={{ ...paragraph }}>
            <h3 style={{ ...heading, fontSize: '1.3rem', marginBottom: '8px', color: palette.accent }}>🔥 NYU Startup Bootcamp (HESS x ScholarSync)</h3>
            <p style={{ color: palette.muted }}>
              A hands-on accelerator guiding students through innovation, research translation, and product development. Participants finish with the foundations needed to launch real-world ventures.
            </p>
          </article>
          <article style={{ ...paragraph }}>
            <h3 style={{ ...heading, fontSize: '1.3rem', marginBottom: '8px', color: palette.accent }}>🟣 NYU HESS Membership</h3>
            <p style={{ color: palette.muted }}>
              Open to all majors passionate about science, discovery, and impact. Past deadline: 15 September, 11:59 PM. Students across disciplines collaborate to explore new scientific frontiers.
            </p>
          </article>
        </section>

        {/* Section 5 */}
        <section
          style={{
            backgroundColor: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: '28px',
            padding: '32px',
            boxShadow: '0 32px 64px rgba(9,13,22,0.45)',
            display: 'grid',
            gap: '12px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ ...heading, fontSize: '1.9rem' }}>🌄 Section 5 — Our Philosophy</h2>
          <p style={{ ...paragraph, fontStyle: 'italic', fontSize: '1.2rem' }}>
            “Faith. Knowledge. Listen Yourself.”
          </p>
          <p style={{ ...paragraph, color: palette.muted }}>
            Featured across HESSplore’s cover images, this mantra reflects the balance of belief, reason, and introspection that guides our community. We celebrate the shared journey of exploration—scientific and personal—across our scholars and faculty.
          </p>
        </section>
      </div>
    </div>
  );
}
