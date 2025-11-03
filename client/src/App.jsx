import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import OurTeam from './pages/OurTeam.jsx';
import Programs from './pages/Programs.jsx';
import Join from './pages/Join.jsx';
import Contact from './pages/Contact.jsx';
import Hessplore from './pages/Hessplore.jsx';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main style={{ margin: 0, padding: 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hessplore" element={<Hessplore />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}


