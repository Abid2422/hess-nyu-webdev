import '../styles/PageLayout.css';

export default function ScholarSync() {
  return (
    <div className="page page--scholarsync">
      <div className="page-content" style={{ alignItems: 'center', textAlign: 'center' }}>
        <section className="glass-section" style={{ width: '100%', justifyItems: 'center' }}>
          <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)' }}>Coming Soon</h1>
          <p className="section-description" style={{ maxWidth: '640px' }}>
            ScholarSync is preparing its next launch. Stay tuned for upcoming updates and the next chapter of our research accelerator.
          </p>
        </section>
      </div>
    </div>
  );
}
