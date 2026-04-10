const OpenSource = () => {
  return (
    <section id="open-source" className="section section--dark">
      <div className="bg-pattern bg-pattern--radial"></div>
      <div className="container">
        <div className="opensource-grid">
          <div className="opensource-left" data-animate="1">
            <span className="section-tag">OPEN-SOURCE PROJECT</span>
            <h2 className="section-title">AN OPEN-SOURCE<br/><span className="accent">SOLUTION</span></h2>
            <p>Aegis is a modular Web Application Firewall built with Python and Docker. The source code is entirely accessible — we advocate for open security over security through obscurity.</p>
            <ul className="opensource-list">
              <li><strong>Total Transparency:</strong> accessible source code ensures maximum trust</li>
              <li><strong>Active Community:</strong> global collaboration with developers worldwide</li>
              <li><strong>Sovereignty:</strong> keep control and ownership of your data</li>
              <li><strong>Customization:</strong> tailor rules to meet your project's needs</li>
            </ul>
            <div className="opensource-ctas">
              <a href="https://github.com/Krish-Korat/Aegis-WAF" target="_blank" rel="noreferrer" className="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GITHUB REPOSITORY
              </a>
            </div>
          </div>
          <div className="opensource-right">
            <div className="waf-banner-card" data-animate="1">
              <img src="/waf-banner.png" alt="Open Source Web Application Firewall" className="waf-banner-img" />
            </div>
            <div className="vision-card" data-animate="1">
              <div className="vision-card-header"><span className="vision-label">OUR VISION</span><div className="vision-icon-circle"><svg viewBox="0 0 24 24" fill="none" width="22" height="22"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/></svg></div></div>
              <h3>Transparency</h3>
              <p>Aegis places transparency at the core — allowing users access to clear, open code. Full visibility into every protective mechanism.</p>
            </div>
            <div className="vision-card" data-animate="1">
              <div className="vision-card-header"><span className="vision-label">OUR MISSION</span><div className="vision-icon-circle"><svg viewBox="0 0 24 24" fill="none" width="22" height="22"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div>
              <h3>Auditability</h3>
              <p>Open access to code and configurations enables regular security audits — enhancing compliance and trust.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OpenSource;
