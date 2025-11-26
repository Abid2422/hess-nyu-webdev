import { useEffect, useMemo, useState } from 'react';
import { apiRequest } from '../api/client.js';
import { useAuth } from '../context/AuthContext.jsx';

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
  lineHeight: 1.5,
};

function SectionCard({ title, subtitle, children }) {
  return (
    <section
      style={{
        backgroundColor: palette.surface,
        border: `1px solid ${palette.border}`,
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 20px 45px rgba(10,14,23,0.45)',
        display: 'grid',
        gap: '18px',
      }}
    >
      <header style={{ display: 'grid', gap: '6px' }}>
        <h2 style={{ ...heading, fontSize: '1.6rem' }}>{title}</h2>
        {subtitle && <p style={{ ...paragraph, color: palette.muted, fontSize: '0.95rem' }}>{subtitle}</p>}
      </header>
      {children}
    </section>
  );
}

function Input({ label, ...rest }) {
  return (
    <label style={{ display: 'grid', gap: '6px', fontSize: '0.95rem', color: palette.muted }}>
      {label}
      <input
        {...rest}
        style={{
          backgroundColor: 'rgba(255,255,255,0.04)',
          border: `1px solid ${palette.border}`,
          borderRadius: '10px',
          padding: '10px 14px',
          color: palette.text,
        }}
      />
    </label>
  );
}

function Textarea({ label, rows = 3, ...rest }) {
  return (
    <label style={{ display: 'grid', gap: '6px', fontSize: '0.95rem', color: palette.muted }}>
      {label}
      <textarea
        rows={rows}
        {...rest}
        style={{
          backgroundColor: 'rgba(255,255,255,0.04)',
          border: `1px solid ${palette.border}`,
          borderRadius: '10px',
          padding: '10px 14px',
          color: palette.text,
          resize: 'vertical',
        }}
      />
    </label>
  );
}

function SubmitButton({ children, ...rest }) {
  return (
    <button
      type="submit"
      {...rest}
      style={{
        marginTop: '12px',
        padding: '12px 18px',
        borderRadius: '12px',
        border: 'none',
        fontWeight: 700,
        fontSize: '1rem',
        background: palette.accent,
        color: '#fff',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}

function DeleteButton({ disabled, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? 'rgba(239,68,68,0.2)' : 'rgba(239,68,68,0.12)',
        color: disabled ? '#fca5a5' : '#f87171',
        border: `1px solid rgba(239,68,68,0.3)`,
        borderRadius: '10px',
        padding: '8px 12px',
        fontWeight: 600,
        fontSize: '0.9rem',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      Delete
    </button>
  );
}

function formatDateForInput(date) {
  if (!date) return '';
  const d = new Date(date);
  const offset = d.getTimezoneOffset();
  const local = new Date(d.getTime() - offset * 60 * 1000);
  return local.toISOString().slice(0, 16);
}

function formatDateDisplay(date) {
  if (!date) return '';
  return new Date(date).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export default function AdminDashboard() {
  const { token, logout } = useAuth();
  const [events, setEvents] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [eventForm, setEventForm] = useState({
    title: '',
    displayDate: '',
    location: '',
    status: 'upcoming',
    startAt: '',
    details: '',
    description: '',
  });

  const [programForm, setProgramForm] = useState({
    title: '',
    shortDescription: '',
    longDescription: '',
    meetingFrequency: '',
    ctaLabel: '',
    ctaUrl: '',
  });

  const hasEvents = events.length > 0;
  const hasPrograms = programs.length > 0;

  const loadData = useMemo(() => async () => {
    setLoading(true);
    setError('');
    try {
    const [upcoming, past, programData] = await Promise.all([
        apiRequest('/events?status=upcoming'),
        apiRequest('/events?status=past'),
        apiRequest('/programs'),
      ]);
      setEvents([...upcoming, ...past]);
      setPrograms(programData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleEventSubmit = async (event) => {
    event.preventDefault();
    try {
      await apiRequest('/events', {
        method: 'POST',
        body: {
          ...eventForm,
          startAt: eventForm.startAt,
          displayDate: eventForm.displayDate,
        },
        token,
      });
      setEventForm({
        title: '',
        displayDate: '',
        location: '',
        status: 'upcoming',
        startAt: '',
        details: '',
        description: '',
      });
      await loadData();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleProgramSubmit = async (event) => {
    event.preventDefault();
    try {
      await apiRequest('/programs', {
        method: 'POST',
        body: {
          ...programForm,
          longDescription: programForm.longDescription || programForm.shortDescription,
        },
        token,
      });
      setProgramForm({
        title: '',
        shortDescription: '',
        longDescription: '',
        meetingFrequency: '',
        ctaLabel: '',
        ctaUrl: '',
      });
      await loadData();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (type, id) => {
    try {
      await apiRequest(`/${type}/${id}`, {
        method: 'DELETE',
        token,
      });
      await loadData();
    } catch (err) {
      setError(err.message);
    }
  };

  if (!token) {
    return (
      <div style={{ backgroundColor: palette.background, color: palette.text, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ ...paragraph, color: palette.muted }}>You must be logged in to view the admin dashboard.</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: palette.background, color: palette.text, minHeight: '100vh', padding: '96px 0 104px', fontFamily: heading.fontFamily }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 24px', display: 'grid', gap: '32px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ ...heading, fontSize: '2.4rem', marginBottom: '6px' }}>HESS admin hub</h1>
            <p style={{ ...paragraph, color: palette.muted }}>Publish events, programs, and member profiles instantly.</p>
          </div>
          <button
            type="button"
            onClick={async () => {
              try {
                await apiRequest('/auth/logout', { method: 'POST', token });
              } catch {
                // ignore logout errors
              } finally {
                logout();
              }
            }}
            style={{
              background: 'transparent',
              border: `1px solid ${palette.border}`,
              color: palette.muted,
              borderRadius: '999px',
              padding: '8px 16px',
              cursor: 'pointer',
            }}
          >
            Sign out
          </button>
        </header>

        {error && (
          <div style={{ backgroundColor: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '12px', padding: '16px', color: '#fca5a5' }}>
            {error}
          </div>
        )}

        {loading ? (
          <p style={{ ...paragraph, color: palette.muted }}>Loading data…</p>
        ) : (
          <div style={{ display: 'grid', gap: '28px' }}>
            <SectionCard
              title="Events"
              subtitle="Add upcoming or past events. The site automatically splits them by status."
            >
              <form style={{ display: 'grid', gap: '16px' }} onSubmit={handleEventSubmit}>
                <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                  <Input label="Title" value={eventForm.title} onChange={(e) => setEventForm((prev) => ({ ...prev, title: e.target.value }))} required />
                  <Input label="Display date (e.g. Sept 12 · 6:00 PM)" value={eventForm.displayDate} onChange={(e) => setEventForm((prev) => ({ ...prev, displayDate: e.target.value }))} required />
                  <Input label="Location" value={eventForm.location} onChange={(e) => setEventForm((prev) => ({ ...prev, location: e.target.value }))} required />
                  <label style={{ display: 'grid', gap: '6px', fontSize: '0.95rem', color: palette.muted }}>
                    Status
                    <select
                      value={eventForm.status}
                      onChange={(e) => setEventForm((prev) => ({ ...prev, status: e.target.value }))}
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.04)',
                        border: `1px solid ${palette.border}`,
                        borderRadius: '10px',
                        padding: '10px 14px',
                        color: palette.text,
                      }}
                    >
                      <option value="upcoming">Upcoming</option>
                      <option value="past">Past</option>
                    </select>
                  </label>
                  <Input
                    label="Start date/time"
                    type="datetime-local"
                    value={eventForm.startAt ? formatDateForInput(eventForm.startAt) : ''}
                    onChange={(e) => setEventForm((prev) => ({ ...prev, startAt: e.target.value ? new Date(e.target.value).toISOString() : '' }))}
                    required
                  />
                </div>
                <Textarea
                  label="Short description"
                  rows={3}
                  value={eventForm.description}
                  onChange={(e) => setEventForm((prev) => ({ ...prev, description: e.target.value }))}
                  required
                />
                <Textarea
                  label="Additional details (optional)"
                  rows={3}
                  value={eventForm.details}
                  onChange={(e) => setEventForm((prev) => ({ ...prev, details: e.target.value }))}
                />
                <SubmitButton>Add event</SubmitButton>
              </form>
              <div style={{ display: 'grid', gap: '12px' }}>
                {events.map((eventItem) => (
                  <div key={eventItem._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '12px', padding: '12px 16px' }}>
                    <div>
                      <p style={{ ...paragraph, fontWeight: 600 }}>{eventItem.title}</p>
                      <p style={{ ...paragraph, color: palette.muted, fontSize: '0.9rem' }}>
                        {eventItem.displayDate} · {eventItem.status === 'past' ? 'Past' : 'Upcoming'} · {formatDateDisplay(eventItem.startAt)}
                      </p>
                    </div>
                    <DeleteButton
                      disabled={!hasEvents}
                      onClick={() => handleDelete('events', eventItem._id)}
                    />
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard
              title="Programs"
              subtitle="Share ongoing initiatives, maker nights, speaker series, and more."
            >
              <form style={{ display: 'grid', gap: '16px' }} onSubmit={handleProgramSubmit}>
                <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                  <Input label="Title" value={programForm.title} onChange={(e) => setProgramForm((prev) => ({ ...prev, title: e.target.value }))} required />
                  <Input label="Meeting frequency / cadence" value={programForm.meetingFrequency} onChange={(e) => setProgramForm((prev) => ({ ...prev, meetingFrequency: e.target.value }))} />
                </div>
                <Input label="CTA label (e.g. Apply now)" value={programForm.ctaLabel} onChange={(e) => setProgramForm((prev) => ({ ...prev, ctaLabel: e.target.value }))} />
                <Input label="CTA URL" value={programForm.ctaUrl} onChange={(e) => setProgramForm((prev) => ({ ...prev, ctaUrl: e.target.value }))} />
                <Textarea label="Short description" rows={3} value={programForm.shortDescription} onChange={(e) => setProgramForm((prev) => ({ ...prev, shortDescription: e.target.value }))} required />
                <Textarea label="Long description" rows={4} value={programForm.longDescription} onChange={(e) => setProgramForm((prev) => ({ ...prev, longDescription: e.target.value }))} />
                <SubmitButton>Add program</SubmitButton>
              </form>
              <div style={{ display: 'grid', gap: '12px' }}>
                {programs.map((program) => (
                  <div key={program._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '12px', padding: '12px 16px' }}>
                    <div>
                      <p style={{ ...paragraph, fontWeight: 600 }}>{program.title}</p>
                      <p style={{ ...paragraph, color: palette.muted, fontSize: '0.9rem' }}>{program.meetingFrequency}</p>
                    </div>
                    <DeleteButton
                      disabled={!hasPrograms}
                      onClick={() => handleDelete('programs', program._id)}
                    />
                  </div>
                ))}
              </div>
            </SectionCard>

          </div>
        )}
      </div>
    </div>
  );
}


