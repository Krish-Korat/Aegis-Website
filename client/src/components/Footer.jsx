const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#hero" className="nav-logo">
              <div className="logo-shield"><svg viewBox="0 0 36 36" fill="none"><path d="M18 3L5 9.5v9c0 8.28 5.54 16 13 17.5 7.46-1.5 13-9.22 13-17.5v-9L18 3z" fill="#10B981" opacity="0.15" stroke="#10B981" strokeWidth="1.5"/><path d="M13 18l4 4 6-7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <span className="logo-text">AEGIS</span>
            </a>
            <p>Your First Line of Defense — Shield Your Web App Without Touching a Line of Code</p>
          </div>
          <nav className="footer-nav">
            <a href="#hero">Home</a><a href="#features">Features</a><a href="#how-it-works">How It Works</a><a href="#pricing">Pricing</a><a href="#contact">Contact</a>
            <a href="https://github.com/Krish-Korat/Aegis-WAF" target="_blank" rel="noreferrer">GitHub</a>
          </nav>
        </div>
        <div className="footer-bottom"><p>&copy; {new Date().getFullYear()} Aegis WAF. Built for the open web.</p></div>
      </div>
    </footer>
  );
};
export default Footer;
