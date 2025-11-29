import { NavLink } from 'react-router-dom';

const navStyles = {
  container: {
    backgroundColor: '#0B0F19',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    position: 'sticky',
    top: 0,
    zIndex: 20,
  },
  inner: {
    maxWidth: '1080px',
    margin: '0 auto',
    padding: '18px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '24px',
    flexWrap: 'wrap',
  },
  brand: {
    fontFamily: 'Montserrat, system-ui, -apple-system, "Segoe UI", sans-serif',
    fontWeight: 800,
    color: '#E2E8F0',
    fontSize: '1.35rem',
    letterSpacing: '0.04em',
  },
  nav: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '14px',
  },
  link: {
    color: '#E2E8F0',
    textDecoration: 'none',
    fontWeight: 600,
    fontFamily: 'Montserrat, system-ui, -apple-system, "Segoe UI", sans-serif',
    padding: '8px 12px',
    borderRadius: '8px',
    transition: 'background-color 0.2s ease, color 0.2s ease',
  },
  active: {
    backgroundColor: 'rgba(148, 163, 184, 0.14)',
    color: '#E2E8F0',
  },
};

export function Navbar() {
  const linkStyle = ({ isActive }) => ({
    ...navStyles.link,
    ...(isActive ? navStyles.active : {}),
  });

  return (
    <header style={navStyles.container}>
      <div style={navStyles.inner}>
        <div style={navStyles.brand}>HESS · NYU</div>
        <nav style={navStyles.nav}>
          <NavLink to="/" end style={linkStyle}>Home</NavLink>
          <NavLink to="/our-team" style={linkStyle}>Our Team</NavLink>
          <NavLink to="/programs" style={linkStyle}>Programs</NavLink>
          <NavLink to="/join" style={linkStyle}>Join</NavLink>
          <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
          <NavLink to="/hessplore" style={linkStyle}>HESSPLORE</NavLink>
          <NavLink to="/scholarsync" style={linkStyle}>ScholarSync</NavLink>
        </nav>
      </div>
    </header>
  );
}
