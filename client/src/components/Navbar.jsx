import { useState, useEffect } from 'react';

const Navbar = ({ user, setUser, onOpenAuth }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
      setUser(null);
    } catch (e) {
      console.error(e);
    }
  };

  const navLinksClass = `nav-links ${menuOpen ? 'open' : ''}`;
  const navActionsClass = `nav-actions ${menuOpen ? 'open' : ''}`;

  return (
    <nav id="navbar" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <div className="logo-shield">
            <svg viewBox="0 0 36 36" fill="none">
              <path d="M18 3L5 9.5v9c0 8.28 5.54 16 13 17.5 7.46-1.5 13-9.22 13-17.5v-9L18 3z" fill="url(#lgA)" opacity="0.15" stroke="url(#lgA)" strokeWidth="1.5"/>
              <path d="M13 18l4 4 6-7" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="lgA" x1="5" y1="3" x2="31" y2="36">
                  <stop stopColor="#10B981"/><stop offset="1" stopColor="#059669"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="logo-text">AEGIS</span>
        </a>
        <ul className={navLinksClass} id="navLinks">
          <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#how-it-works" onClick={() => setMenuOpen(false)}>Product WAF</a></li>
          <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
          <li><a href="#architecture" onClick={() => setMenuOpen(false)}>Tech Stack</a></li>
          <li><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
        <div className={navActionsClass} id="navActions">
          {!user ? (
            <>
              <button onClick={() => { setMenuOpen(false); onOpenAuth('login'); }} className="nav-btn nav-btn--github" style={{ background: 'transparent', border: '1px solid #10B981', color: '#10B981' }}>
                <span>Log In</span>
              </button>
              <button onClick={() => { setMenuOpen(false); onOpenAuth('signup'); }} className="nav-btn nav-btn--download">
                <span>Sign Up</span>
              </button>
            </>
          ) : (
            <>
              {user.role === 'admin' && (
                <button onClick={() => { setMenuOpen(false); onOpenAuth('admin'); }} className="nav-btn" style={{ background: 'transparent', border: '1px solid #3B82F6', color: '#3B82F6', marginRight: '15px' }}>
                  <span>Admin Panel</span>
                </button>
              )}
              <span style={{ color: '#fff', marginRight: '15px' }}>Hi, {user.name.split(' ')[0]}</span>
              <button onClick={() => { setMenuOpen(false); handleLogout(); }} className="nav-btn nav-btn--github" style={{ background: 'transparent', border: '1px solid #FF5252', color: '#FF5252' }}>
                <span>Log Out</span>
              </button>
            </>
          )}
        </div>
        <button className="nav-toggle" id="navToggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span style={menuOpen ? {transform: 'rotate(45deg) translate(5px, 5px)'} : {}}></span>
          <span style={menuOpen ? {opacity: '0'} : {}}></span>
          <span style={menuOpen ? {transform: 'rotate(-45deg) translate(5px, -5px)'} : {}}></span>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
