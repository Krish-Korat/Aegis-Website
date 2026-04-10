const Features = () => {
  return (
    <section id="features" className="section section--navy">
      <div className="bg-pattern bg-pattern--cross"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">PROTECTION MODULES</span>
          <h2 className="section-title">KEY FEATURES <span className="accent">OF AEGIS WAF</span></h2>
        </div>
        <div className="features-grid">
          <div className="feature-card" data-animate="1">
            <div className="feature-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M8 14h32M8 14v20a4 4 0 004 4h24a4 4 0 004-4V14M16 24h.02M24 24h.02M32 24h.02" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div>
            <h3>SQL Injection Detection</h3>
            <p>Detect and block malicious SQL queries injected via input fields, preventing database takeover.</p>
            <span className="feature-badge">SQLi</span>
          </div>
          <div className="feature-card" data-animate="1">
            <div className="feature-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M32 36l12-12-12-12M16 12L4 24l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M28 8L20 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div>
            <h3>Cross-Site Scripting (XSS)</h3>
            <p>Stop malicious scripts from executing in users' browsers — prevent session hijacking and theft.</p>
            <span className="feature-badge">XSS</span>
          </div>
          <div className="feature-card" data-animate="1">
            <div className="feature-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L4 14l20 10 20-10L24 4zM4 34l20 10 20-10M4 24l20 10 20-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <h3>Template Injection (SSTI)</h3>
            <p>Prevent exploitation of server-side template engines like Jinja2 through crafted payloads.</p>
            <span className="feature-badge">SSTI</span>
          </div>
          <div className="feature-card" data-animate="1">
            <div className="feature-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M28 4H12a4 4 0 00-4 4v32a4 4 0 004 4h24a4 4 0 004-4V16l-12-12z" stroke="currentColor" strokeWidth="2"/><path d="M28 4v12h12M18 26h12M18 34h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div>
            <h3>File Inclusion (LFI/RFI)</h3>
            <p>Block unauthorized local and remote file access — prevent reading /etc/passwd or loading shells.</p>
            <span className="feature-badge">LFI / RFI</span>
          </div>
          <div className="feature-card" data-animate="1">
            <div className="feature-icon"><svg viewBox="0 0 48 48" fill="none"><rect x="6" y="6" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M14 16h.02M14 24h20M14 32h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div>
            <h3>Command Injection</h3>
            <p>Detect OS-level attack patterns — shell commands, path traversals, system file enumeration.</p>
            <span className="feature-badge">CMDi</span>
          </div>
          <div className="feature-card" data-animate="1">
            <div className="feature-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4v16l12 8M24 20L12 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/></svg></div>
            <h3>Rate Limiting</h3>
            <p>Auto-block IPs sending too many requests — stops DDoS attacks and brute-force login attempts.</p>
            <span className="feature-badge">DDoS</span>
          </div>
        </div>
        <div className="key-features-list" data-animate="1">
          <h3>MORE CAPABILITIES</h3>
          <div className="kf-grid">
            <div className="kf-item"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M12 2v4m0 12v4m-10-10h4m12 0h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg><div><strong>Real-time threat detection:</strong> pattern matching on every request</div></div>
            <div className="kf-item"><svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5"/></svg><div><strong>Intrusion detection:</strong> detect and block malicious activities</div></div>
            <div className="kf-item"><svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/><path d="M3 9h18M9 3v18" stroke="currentColor" strokeWidth="1.5"/></svg><div><strong>Rule-based filtering:</strong> customizable Python detection rules</div></div>
            <div className="kf-item"><svg viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg><div><strong>Rate limiting:</strong> configurable per-IP request thresholds</div></div>
            <div className="kf-item"><svg viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.5"/><path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.5"/></svg><div><strong>Attack logging:</strong> with real-time <span className="mono">--follow</span> mode</div></div>
            <div className="kf-item"><svg viewBox="0 0 24 24" fill="none"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg><div><strong>Zero code changes:</strong> transparent proxy — your app stays untouched</div></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
