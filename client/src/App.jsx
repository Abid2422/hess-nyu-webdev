import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import { AdminLoginModal } from './components/AdminLoginModal.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import Home from './pages/Home.jsx';
import OurTeam from './pages/OurTeam.jsx';
import Programs from './pages/Programs.jsx';
import Join from './pages/Join.jsx';
import Contact from './pages/Contact.jsx';
import Hessplore from './pages/Hessplore.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import { useAuth } from './context/AuthContext.jsx';

export default function App() {
  const { isAuthenticated } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      if (event.key.toLowerCase() === 'a' && event.shiftKey) {
        setIsLoginOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main style={{ margin: 0, padding: 0, minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hessplore" element={<Hessplore />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SiteFooter isAdmin={isAuthenticated} onAdminLogin={() => setIsLoginOpen(true)} />
      <AdminLoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}


