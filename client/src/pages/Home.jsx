import { useEffect, useMemo, useState } from 'react';
import { apiRequest } from '../api/client.js';
import '../styles/PageLayout.css';

const impactItems = [
  {
    title: 'Workshops & Skill-Building',
    body: 'Career pathways, grad school navigation, prototyping, and storytelling sessions designed for STEM majors.',
  },
  {
    title: 'Research Spotlights (HESSPLORE)',
    body: 'We translate complex NYU research into digestible videos, podcasts, and social posts to amplify student work.',
  },
  {
    title: 'Industry & Faculty Speakers',
    body: 'Conversations with NYU researchers, alumni, and company partners tackling emerging science and engineering problems.',
  },
  {
    title: 'Community across CAS ↔ Tandon',
    body: 'Cross-campus mixers, hack nights, and collaborations with other NYU orgs to help you find your project team.',
  },
];

const spotlights = [
  {
    name: 'Daniel Tkach · Co-Founder, For Future Lungs',
    highlight: 'Based in New York · BS/DDS NYU · Leading respiratory innovation to empower patient communities.',
  },
  {
    name: 'Idriss Attard · CAS College Leader',
    highlight: 'BS NYU · Presidential Honors Scholar · Ambassador, Whats Good Doctor · Research at Columbia University.',
  },
  {
    name: 'Deven Huang · Founder, NYU Undergraduate Research Journal',
    highlight: 'BA NYU · CAS College Leader · Presidential Honors Scholar · Research at NYU Langone.',
  },
  {
    name: 'Marvellous Nwanna · CAS Merit Scholar',
    highlight: 'BS NYU · University of Toronto SHPEP · Medical Assistant at NYU Langone · Research at Albert Einstein College of Medicine and Columbia University.',
  },
];

export default function Home() {
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [isPastModalOpen, setIsPastModalOpen] = useState(false);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [eventsError, setEventsError] = useState('');

  useEffect(() => {
    let isMounted = true;
    async function loadEvents() {
      setEventsLoading(true);
      setEventsError('');
      try {
        const [upcoming, past] = await Promise.all([
          apiRequest('/events?status=upcoming'),
          apiRequest('/events?status=past'),
        ]);
        if (isMounted) {
          setUpcomingEvents(upcoming);
          setPastEvents(past);
        }
      } catch (error) {
        if (isMounted) {
          setEventsError(error.message || 'Unable to load events');
        }
      } finally {
        if (isMounted) {
          setEventsLoading(false);
        }
      }
    }
    loadEvents();
    return () => {
      isMounted = false;
    };
  }, []);

  const allEvents = useMemo(
    () => [...upcomingEvents, ...pastEvents],
    [upcomingEvents, pastEvents],
  );

  const selectedEvent = useMemo(
    () => allEvents.find((event) => event._id === selectedEventId) || null,
    [selectedEventId, allEvents],
  );

  return (
    <div className="page page--home">
      <div className="page-content">
        <section className="page-hero">
          <div>
            <h1>Amplifying NYU&apos;s Scientific Authority.</h1>
            <p>
              The Hemmes Engineering & Science Society (HESS) is the student-led accelerator dedicated to translating
              NYU&apos;s multi-disciplinary research into global, accessible narratives.
            </p>
          </div>
          <div className="page-hero-actions">
            <a className="primary-button" href="/join">Join HESS</a>
            <a className="ghost-link" href="#events">See upcoming events →</a>
          </div>
        </section>

        <section className="glass-section">
          <h2 className="section-title">What HESS makes possible</h2>
          <p className="section-description">
            We create the bridge between NYU’s labs and the wider world—offering students, faculty, and partners a hub where ideas meet storytelling.
          </p>
          <div className="card-grid">
            {impactItems.map((item) => (
              <article key={item.title} className="glass-card glass-card--hoverable">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="glass-section" id="events">
          <div className="section-header">
            <h2 className="section-title">Upcoming events</h2>
            <div className="section-actions">
              {eventsLoading && <span className="page-note" style={{ margin: 0 }}>Loading…</span>}
              {eventsError && <span className="page-note" style={{ margin: 0, color: '#fca5a5' }}>{eventsError}</span>}
              <button type="button" className="pill-button" onClick={() => setIsPastModalOpen(true)}>
                Past events
              </button>
            </div>
          </div>

          <div className="card-grid">
            {upcomingEvents.map((event) => (
              <article
                key={event._id}
                className="glass-card glass-card--hoverable"
                role="button"
                tabIndex={0}
                onClick={() => setSelectedEventId(event._id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedEventId(event._id);
                  }
                }}
              >
                <div className="meta-row">
                  <span className="status-pill">Upcoming</span>
                  <span>📅 {event.displayDate}</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="meta-row">
                  <span>📍 {event.location}</span>
                </div>
              </article>
            ))}
            {!eventsLoading && !eventsError && upcomingEvents.length === 0 && (
              <article className="glass-card">
                <h3>More events soon</h3>
                <p>Stay tuned—new programs and gatherings are on the way.</p>
              </article>
            )}
          </div>

          <p className="page-note">
            Want more? Follow <a className="ghost-link" href="https://www.instagram.com/hess.nyu/" target="_blank" rel="noreferrer">@hess.nyu</a> for live updates.
          </p>
        </section>

        <section className="glass-section">
          <h2 className="section-title">HESSPLORE & Student Spotlights</h2>
          <p className="section-description">
            We highlight NYU students publishing, prototyping, and winning scholarships. Catch the latest features on Instagram and the HESSPLORE feed.
          </p>
          <div className="card-grid">
            {spotlights.map((item) => (
              <article key={item.name} className="glass-card glass-card--hoverable">
                <h3>{item.name}</h3>
                <p>{item.highlight}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="glass-section">
          <h2 className="section-title">Get involved with HESS</h2>
          <p className="section-description">
            Join the community listserv, volunteer as a HESSPLORE storyteller, or apply to the board to lead programming,
            partnerships, technology, or communications.
          </p>
          <div className="page-hero-actions">
            <a className="primary-button" href="/contact">
              Contact
            </a>
          </div>
        </section>

        <footer className="glass-section" style={{ textAlign: 'center' }}>
          <p className="page-footer-text">
            Find us at 25 W 4th St, 5th Floor · <a className="ghost-link" href="mailto:nyuhemmes@gmail.com">nyuhemmes@gmail.com</a> ·
            {' '}
            <a className="ghost-link" href="https://www.instagram.com/hess.nyu/" target="_blank" rel="noreferrer">@hess.nyu</a>
          </p>
          <p className="page-footer-text">
            HESS is where NYU’s engineers and scientists connect, communicate, and collaborate across CAS ↔ Tandon.
          </p>
        </footer>

        {selectedEvent && (
          <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby={`event-modal-${selectedEvent._id}`} onClick={() => setSelectedEventId(null)}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <button type="button" className="modal-close" onClick={() => setSelectedEventId(null)}>Close</button>
              <div className="meta-row" style={{ gap: '10px' }}>
                <span className="status-pill">Upcoming</span>
                <span>📅 {selectedEvent.displayDate}</span>
              </div>
              <h2 style={{ fontSize: '1.9rem', margin: 0 }}>{selectedEvent.title}</h2>
              <div className="meta-row">
                <span>📍 {selectedEvent.location}</span>
              </div>
              <p>{selectedEvent.description}</p>
              {selectedEvent.details && <p style={{ color: '#cbd5f5' }}>{selectedEvent.details}</p>}
            </div>
          </div>
        )}

        {isPastModalOpen && (
          <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="past-events-heading" onClick={() => setIsPastModalOpen(false)}>
            <div className="modal-card" style={{ maxWidth: '520px' }} onClick={(e) => e.stopPropagation()}>
              <button type="button" className="modal-close" onClick={() => setIsPastModalOpen(false)}>Close</button>
              <h2 id="past-events-heading" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>Past events</h2>
              <p style={{ color: '#cbd5f5', margin: '0 0 12px' }}>A snapshot of recent gatherings—ask the board for slide decks or recordings.</p>
              <div style={{ display: 'grid', gap: '12px', maxHeight: '60vh', overflowY: 'auto', paddingRight: '6px' }}>
                {pastEvents.map((event) => (
                  <article key={event._id} className="glass-card">
                    <div className="meta-row" style={{ gap: '10px' }}>
                      <span className="status-pill status-pill--past">Past</span>
                      <span>📅 {event.displayDate}</span>
                    </div>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <div className="meta-row">
                      <span>📍 {event.location}</span>
                    </div>
                  </article>
                ))}
                {!eventsLoading && pastEvents.length === 0 && (
                  <p className="page-note" style={{ margin: 0 }}>
                    Past events will appear here once we archive them.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
