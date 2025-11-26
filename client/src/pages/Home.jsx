import { useEffect, useMemo, useState } from 'react';
import { apiRequest } from '../api/client.js';

const palette = {
  background: '#0F172A',
  surface: 'rgba(255,255,255,0.03)',
  border: 'rgba(255,255,255,0.06)',
  accent: '#6D28D9',
  text: '#E2E8F0',
  muted: '#94A3B8',
  heroPanel: '#1E2A3F',
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

const buttonStyle = {
  display: 'inline-block',
  padding: '16px 32px',
  borderRadius: '10px',
  fontWeight: 700,
  fontSize: '1.05rem',
  textDecoration: 'none',
  backgroundColor: palette.accent,
  color: '#fff',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  boxShadow: '0 12px 25px rgba(109, 40, 217, 0.25)',
};

const secondaryLink = {
  marginLeft: '18px',
  fontWeight: 600,
  color: palette.muted,
  textDecoration: 'none',
};

const cardStyle = {
  backgroundColor: palette.surface,
  borderRadius: '16px',
  padding: '28px',
  border: `1px solid ${palette.border}`,
  boxShadow: '0 20px 40px rgba(11,15,25,0.35)',
  backdropFilter: 'blur(18px)',
};

const sectionWrapper = {
  maxWidth: '1080px',
  margin: '0 auto',
  padding: '0 24px',
};

const listBullet = {
  marginBottom: '0.75rem',
  color: palette.text,
  fontSize: '1.05rem',
  lineHeight: 1.6,
};

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
    highlight: 'BS NYU · University of Toronto SHPEP · Medical Assistant, NYU Langone · Research at Albert Einstein College of Medicine and Columbia University · Academic Achievement Program Scholar, NYU.',
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

  const closeEventModal = () => setSelectedEventId(null);
  const closePastModal = () => setIsPastModalOpen(false);

  const modalOverlayStyle = {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(11, 15, 25, 0.78)',
    backdropFilter: 'blur(12px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    zIndex: 100,
  };

  const modalCardStyleLarge = {
    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(15,23,42,0.95) 100%)',
    borderRadius: '20px',
    border: `1px solid ${palette.border}`,
    boxShadow: '0 30px 60px rgba(10,12,24,0.6)',
  padding: '48px 32px 32px',
    maxWidth: '640px',
  maxHeight: '80vh',
    width: '100%',
    color: palette.text,
  overflowY: 'auto',
  position: 'relative',
  };

  const modalCardStyleSmall = {
    ...modalCardStyleLarge,
  maxWidth: '480px',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '18px',
    right: '18px',
    background: 'transparent',
    border: `1px solid ${palette.border}`,
    color: palette.muted,
    borderRadius: '999px',
    padding: '6px 12px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: heading.fontFamily,
  };

  return (
    <div style={{ backgroundColor: palette.background, color: palette.text, minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ padding: '96px 0 72px' }}>
        <div style={{ ...sectionWrapper }}>
          <div
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.02) 65%)`,
              borderRadius: '28px',
              padding: '56px clamp(24px, 4vw, 72px)',
              border: `1px solid ${palette.border}`,
              boxShadow: '0 45px 90px rgba(11,15,25,0.35)',
              display: 'grid',
              gap: '28px',
            }}
          >
            <div>
              <span
                style={{
                  ...paragraph,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: palette.muted,
                  fontSize: '0.85rem',
                }}
              >
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '999px',
                    backgroundColor: palette.accent,
                    boxShadow: `0 0 12px ${palette.accent}`,
                  }}
                />
                Hemmes' Engineering & Science Society · NYU
              </span>
            </div>
            <div>
              <h1
                style={{
                  ...heading,
                  fontSize: 'clamp(2.6rem, 5vw, 4.4rem)',
                  margin: '0 0 18px',
                  color: palette.text,
                  lineHeight: 1.12,
                }}
              >
                The student-led hub for engineering and science across NYU
              </h1>
              <p
                style={{
                  ...paragraph,
                  fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)',
                  maxWidth: '720px',
                  margin: 0,
                  color: palette.text,
                  opacity: 0.92,
                }}
              >
                We connect CAS and Tandon through workshops, HESSPLORE research spotlights, and hands-on projects so STEM students can collaborate, communicate, and find their next opportunity.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://forms.gle/8aseSignUp" // placeholder
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(109,40,217,0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 12px 25px rgba(109,40,217,0.25)';
                }}
              >
                Join the mailing list
              </a>
              <a href="#events" style={secondaryLink}>
                or see the next event →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section style={{ padding: '0 0 72px' }}>
        <div style={sectionWrapper}>
          <h2 style={{ ...heading, fontSize: '2.2rem', color: palette.text, marginBottom: '28px' }}>
            What HESS makes possible
          </h2>
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {[{
              title: 'Workshops & Skill-Building',
              body: 'Career pathways, grad school navigation, prototyping, and storytelling sessions designed for STEM majors.',
            }, {
              title: 'Research Spotlights (HESSPLORE)',
              body: 'We translate complex NYU research into digestible videos, podcasts, and social posts to amplify student work.',
            }, {
              title: 'Industry & Faculty Speakers',
              body: 'Conversations with NYU researchers, alumni, and company partners tackling emerging science and engineering problems.',
            }, {
              title: 'Community across CAS ↔ Tandon',
              body: 'Cross-campus mixers, hack nights, and collaborations with other NYU orgs to help you find your project team.',
            }].map((item) => (
              <article key={item.title} style={cardStyle}>
                <h3 style={{ ...heading, fontSize: '1.35rem', marginBottom: '12px', color: palette.text }}>{item.title}</h3>
                <p style={{ ...paragraph, color: palette.muted }}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" style={{ padding: '0 0 72px' }}>
        <div style={sectionWrapper}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
            <h2 style={{ ...heading, fontSize: '2.2rem', color: palette.text }}>Upcoming events</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {eventsLoading && <p style={{ ...paragraph, color: palette.muted, fontSize: '0.9rem' }}>Loading…</p>}
              {eventsError && <p style={{ ...paragraph, color: '#fca5a5', fontSize: '0.9rem' }}>{eventsError}</p>}
              <button
                type="button"
                onClick={() => setIsPastModalOpen(true)}
                style={{
                  background: 'rgba(148,163,184,0.08)',
                  border: `1px solid ${palette.border}`,
                  color: palette.text,
                  fontWeight: 600,
                  fontFamily: heading.fontFamily,
                  padding: '8px 16px',
                  borderRadius: '999px',
                  cursor: 'pointer',
                  letterSpacing: '0.02em',
                  transition: 'background 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(148,163,184,0.15)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(148,163,184,0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Past events
              </button>
            </div>
          </div>
          <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {upcomingEvents.map((event) => (
              <article
                key={event._id}
                style={{ ...cardStyle, cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
                onClick={() => setSelectedEventId(event._id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedEventId(event._id);
                  }
                }}
              >
                <p style={{ ...paragraph, color: palette.muted, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.88rem' }}>{event.displayDate}</p>
                <h3 style={{ ...heading, fontSize: '1.5rem', margin: '10px 0 12px', color: palette.text }}>{event.title}</h3>
                <p style={{ ...paragraph, color: palette.text, opacity: 0.88, marginBottom: '10px' }}>{event.description}</p>
                <p style={{ ...paragraph, color: palette.muted, fontSize: '0.95rem' }}>📍 {event.location}</p>
              </article>
            ))}
            {!eventsLoading && upcomingEvents.length === 0 && !eventsError && (
              <div style={{ ...cardStyle }}>
                <p style={{ ...paragraph, color: palette.muted }}>Stay tuned—new events are rolling out soon.</p>
              </div>
            )}
          </div>
          <p style={{ ...paragraph, color: palette.muted, marginTop: '20px' }}>
            Want more? Follow <a href="https://www.instagram.com/hess.nyu/" style={{ color: palette.text, textDecoration: 'underline', fontWeight: 600 }}>@hess.nyu</a> for live updates.
          </p>
        </div>
      </section>

      {/* Spotlights */}
      <section style={{ padding: '0 0 72px' }}>
        <div style={sectionWrapper}>
          <h2 style={{ ...heading, fontSize: '2.2rem', color: palette.text, marginBottom: '24px' }}>
            HESSPLORE & Student Spotlights
          </h2>
          <p style={{ ...paragraph, marginBottom: '24px', color: palette.muted }}>
            We highlight NYU students who are publishing, prototyping, and winning scholarships. Catch the latest features on Instagram and the HESSPLORE feed.
          </p>
          <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {spotlights.map((item) => (
              <article key={item.name} style={{ ...cardStyle, padding: '24px' }}>
                <h3 style={{ ...heading, fontSize: '1.2rem', color: palette.text, marginBottom: '8px' }}>{item.name}</h3>
                <p style={{ ...paragraph, color: palette.muted }}>{item.highlight}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Get involved */}
      <section style={{ padding: '0 0 96px' }}>
        <div style={sectionWrapper}>
          <h2 style={{ ...heading, fontSize: '2.2rem', color: palette.text, marginBottom: '20px' }}>
            Get involved with HESS
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px' }}>
            <li style={listBullet}>• Join the community listserv for weekly opportunities, events, and internal applications.</li>
            <li style={listBullet}>• Volunteer as a HESSPLORE storyteller—help film, edit, or write features that translate research.</li>
            <li style={listBullet}>• Apply to the board to lead programming, partnerships, technology, or communications.</li>
          </ul>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px' }}>
            <a href="https://forms.gle/8aseSignUp" style={buttonStyle}>Sign up to join</a>
            <a href="mailto:contact@hess-nyu.org" style={{ ...secondaryLink, marginLeft: 0 }}>Email the board →</a>
          </div>
      </div>
    </section>

      {/* Footer-like info */}
      <footer style={{ borderTop: `1px solid ${palette.border}`, padding: '36px 0', backgroundColor: '#0B0F19' }}>
        <div style={{ ...sectionWrapper, textAlign: 'center' }}>
          <p style={{ ...paragraph, color: palette.muted, marginBottom: '12px' }}>
            Find us at 25 W 4th St, 5th Floor · <a href="mailto:nyuhemmes@gmail.com" style={{ color: palette.text, textDecoration: 'underline' }}>nyuhemmes@gmail.com</a> · Instagram <a href="https://www.instagram.com/hess.nyu/" style={{ color: palette.text, textDecoration: 'underline', fontWeight: 600 }}>@hess.nyu</a>
          </p>
          <p style={{ ...paragraph, fontSize: '0.9rem', color: palette.muted }}>
            HESS is where NYU’s engineers and scientists connect, communicate, and collaborate across CAS ↔ Tandon.
          </p>
        </div>
      </footer>
      {selectedEvent && (
        <div
          style={modalOverlayStyle}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`event-modal-${selectedEvent._id}`}
          onClick={closeEventModal}
        >
          <div
            style={modalCardStyleLarge}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" onClick={closeEventModal} style={closeButtonStyle}>
              Close
            </button>
            <p style={{ ...paragraph, color: palette.muted, letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '12px' }}>
              {selectedEvent.displayDate}
            </p>
            <h3 id={`event-modal-${selectedEvent._id}`} style={{ ...heading, fontSize: '2rem', marginBottom: '16px' }}>
              {selectedEvent.title}
            </h3>
            <p style={{ ...paragraph, color: palette.muted, marginBottom: '20px', display: 'flex', gap: '8px', alignItems: 'center', fontSize: '1rem' }}>
              <span role="img" aria-hidden="true">📍</span>
              {selectedEvent.location}
            </p>
            <p style={{ ...paragraph, marginBottom: '18px', opacity: 0.95 }}>
              {selectedEvent.description}
            </p>
            {selectedEvent.details && (
              <p style={{ ...paragraph, color: palette.muted }}>
                {selectedEvent.details}
              </p>
            )}
          </div>
        </div>
      )}
      {isPastModalOpen && (
        <div
          style={modalOverlayStyle}
          role="dialog"
          aria-modal="true"
          aria-labelledby="past-events-heading"
          onClick={closePastModal}
        >
          <div
            style={modalCardStyleSmall}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" onClick={closePastModal} style={closeButtonStyle}>
              Close
            </button>
            <h3 id="past-events-heading" style={{ ...heading, fontSize: '1.8rem', marginBottom: '16px' }}>
              Past events
            </h3>
            <p style={{ ...paragraph, color: palette.muted, marginBottom: '18px' }}>
              A snapshot of recent gatherings—ask the board for slide decks or recordings.
            </p>
            <div style={{ maxHeight: '60vh', overflowY: 'auto', paddingRight: '4px' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '16px' }}>
                {pastEvents.map((event) => (
                  <li key={event._id} style={{ padding: '16px 18px', borderRadius: '14px', backgroundColor: 'rgba(148,163,184,0.06)', border: `1px solid ${palette.border}` }}>
                    <p style={{ ...paragraph, color: palette.muted, fontSize: '0.88rem', marginBottom: '6px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                      {event.displayDate}
                    </p>
                    <p style={{ ...paragraph, fontWeight: 700, marginBottom: '6px' }}>
                      {event.title}
                    </p>
                    <p style={{ ...paragraph, color: palette.muted, marginBottom: '6px' }}>
                      {event.description}
                    </p>
                    <p style={{ ...paragraph, color: palette.muted, fontSize: '0.9rem' }}>
                      📍 {event.location}
                    </p>
                  </li>
                ))}
                {!eventsLoading && pastEvents.length === 0 && !eventsError && (
                  <li style={{ padding: '16px 18px', borderRadius: '14px', backgroundColor: 'rgba(148,163,184,0.06)', border: `1px solid ${palette.border}` }}>
                    <p style={{ ...paragraph, color: palette.muted }}>Past events will appear here once we archive them.</p>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
