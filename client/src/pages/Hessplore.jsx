import '../styles/PageLayout.css';

const scholars = [
  {
    name: 'Prof. Isaac Suborno Bari',
    title: 'Mathematics & Physics, NYU — “World’s Youngest Professor”',
    blurb: 'Embodies limitless curiosity, inspiring students to pursue discovery without boundaries.',
  },
  {
    name: 'Dean Wendy Suzuki',
    title: 'Dean, NYU College of Arts & Science',
    blurb: 'Neuroscientist and Donald B. Lindsley Prize recipient leading research on brain plasticity, learning, and memory.',
  },
  {
    name: 'Prof. Dr. Justin Blau',
    title: 'Professor of Biology & Neural Science',
    blurb: 'Eppendorf & Science Essay Prize winner advancing our understanding of neural circuitry.',
  },
  {
    name: 'Prof. Dr. Joseph Osmundson',
    title: 'Clinical Professor, NYU — Biophysicist & Author',
    blurb: 'Author of VIROLOGY whose work spans Cell, PNAS, The New York Times, and TIME, merging science, literature, and activism.',
  },
  {
    name: 'Prof. Dr. Claude Desplan',
    title: 'Professor, Neuroscience Institute, NYU Langone',
    blurb: 'Leads developmental neurobiology research uncovering how neuronal diversity is established.',
  },
  {
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
    <div className="page page--hessplore">
      <div className="page-content">
        <header className="page-header">
          <h1>HESSplore</h1>
          <p>Dive into NYU’s engineering, medicine, and science universe. We curate the scholars, students, and programs that define our community.</p>
        </header>

        <section className="glass-section">
          <h2 className="section-title">Meet Our Distinguished Scholars</h2>
          <div className="card-grid">
            {scholars.map((scholar) => (
              <article key={scholar.name} className="glass-card glass-card--hoverable">
                <h3>{scholar.name}</h3>
                <h4>{scholar.title}</h4>
                <p>{scholar.blurb}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="glass-section">
          <h2 className="section-title">Rising Scholars & Innovators</h2>
          <p className="section-description">These student leaders represent the future of engineering, medicine, and scientific discovery.</p>
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            {risingScholars.map((item) => (
              <article key={item} className="glass-card">
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="glass-section">
          <h2 className="section-title">What Is HESSplore?</h2>
          <p className="section-description">
            HESSplore is your gateway into the world of engineering, medicine, and scientific excellence at NYU. We curate:
          </p>
          <article className="glass-card">
            <ul style={{ listStyle: 'disc', paddingLeft: '20px', margin: 0, display: 'grid', gap: '8px' }}>
              <li>Faculty spotlights & research breakthroughs</li>
              <li>Student innovation & academic achievement</li>
              <li>HESS events, seminars, and accelerator programs</li>
              <li>Opportunities to join NYU’s scientific community</li>
            </ul>
          </article>
          <p className="section-description">
            Our purpose is to bridge students with mentors, ideas, and pathways that shape the future of STEM.
          </p>
        </section>

        <section className="glass-section">
          <h2 className="section-title">Programs & Opportunities</h2>
          <article className="glass-card">
            <h3>NYU Startup Bootcamp (HESS x ScholarSync)</h3>
            <p>A hands-on accelerator guiding students through innovation, research translation, and product development. Participants finish with the foundations needed to launch real-world ventures.</p>
          </article>
          <article className="glass-card">
            <h3>NYU HESS Membership</h3>
            <p>Open to all majors passionate about science, discovery, and impact. Past deadline: 15 September, 11:59 PM. Students across disciplines collaborate to explore new scientific frontiers.</p>
          </article>
        </section>

        <section className="glass-section" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Our Philosophy</h2>
          <p className="section-description" style={{ fontStyle: 'italic', fontSize: '1.2rem' }}>
            “Faith. Knowledge. Listen Yourself.”
          </p>
          <p className="section-description">
            Featured across HESSplore’s cover images, this mantra reflects the balance of belief, reason, and introspection that guides our community. We celebrate the shared journey of exploration—scientific and personal—across our scholars and faculty.
          </p>
        </section>
      </div>
    </div>
  );
}
