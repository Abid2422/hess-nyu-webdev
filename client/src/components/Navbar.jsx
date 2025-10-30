import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">HESS NYU</div>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/our-team">Our Team</NavLink>
        <NavLink to="/programs">Programs</NavLink>
        <NavLink to="/join">Join</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/hessplore">Hessplore</NavLink>
      </nav>
    </header>
  );
}


