import { Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const loggedIn = Boolean(localStorage.getItem('token'));

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <header className="navbar">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-mark"><LayoutDashboard size={18}/></span>
        Flow<span>Board</span>
      </Link>

      <button className="mobile-menu" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? 'nav-links open' : 'nav-links'}>
        <a href="/#features" onClick={() => setOpen(false)}>Features</a>
        <a href="/#workflow" onClick={() => setOpen(false)}>Workflow</a>
        <a href="/#pricing" onClick={() => setOpen(false)}>Pricing</a>
        {loggedIn ? (
          <>
            <Link to="/dashboard" className="nav-dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
            <button className="link-button" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={() => setOpen(false)}>Log in</Link>
            <Link to="/signup" className="nav-cta" onClick={() => setOpen(false)}>Get Started</Link>
          </>
        )}
      </nav>
    </header>
  );
}