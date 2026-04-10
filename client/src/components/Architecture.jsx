const Architecture = () => {
  return (
    <section id="architecture" className="section section--navy">
      <div className="bg-pattern bg-pattern--scan"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">TECHNOLOGY</span>
          <h2 className="section-title">BUILT ON <span className="accent">PROVEN TECHNOLOGY</span></h2>
          <p className="section-desc">Engineered with battle-tested open-source components — FastAPI for blazing-fast request analysis, Nginx for reverse proxying, and Docker for one-command deployment.</p>
        </div>
        <div className="tech-grid">
          <div className="tech-item" data-animate="1"><div className="tech-icon"><svg viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5"/></svg></div><div className="tech-label">Reverse Proxy</div><div className="tech-name">Nginx</div></div>
          <div className="tech-item" data-animate="1"><div className="tech-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div><div className="tech-label">WAF Engine</div><div className="tech-name">FastAPI</div></div>
          <div className="tech-item" data-animate="1"><div className="tech-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div><div className="tech-label">Language</div><div className="tech-name">Python</div></div>
          <div className="tech-item" data-animate="1"><div className="tech-icon"><svg viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/><rect x="2" y="14" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="6" cy="6" r="1" fill="currentColor"/><circle cx="6" cy="18" r="1" fill="currentColor"/></svg></div><div className="tech-label">Containerization</div><div className="tech-name">Docker</div></div>
          <div className="tech-item" data-animate="1"><div className="tech-icon"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="1.5"/></svg></div><div className="tech-label">Infrastructure</div><div className="tech-name">Linux</div></div>
          <div className="tech-item" data-animate="1"><div className="tech-icon"><svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 8h.01M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg></div><div className="tech-label">CLI Tool</div><div className="tech-name">aegis.py</div></div>
        </div>
      </div>
    </section>
  );
};
export default Architecture;
