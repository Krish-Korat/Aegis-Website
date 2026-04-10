const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section section--dark">
      <div className="bg-pattern bg-pattern--circuit"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">HOW DOES A WAF WORK?</span>
          <h2 className="section-title">HOW AEGIS <span className="accent">PROTECTS YOU</span></h2>
          <p className="section-desc">Aegis operates as a reverse proxy, intercepting all incoming traffic. It analyzes each request against predefined security rules. Malicious requests are blocked — clean ones pass through.</p>
        </div>
        <div className="how-flow">
          <div className="how-step" data-animate="1">
            <div className="how-step-num">01</div>
            <div className="how-step-icon"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2"/><path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2"/></svg></div>
            <h3>User Sends Request</h3>
            <p>A user sends an HTTP/HTTPS request to your application.</p>
          </div>
          <div className="how-arrow"><svg viewBox="0 0 48 24"><path d="M0 12h40M34 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <div className="how-step" data-animate="1">
            <div className="how-step-num">02</div>
            <div className="how-step-icon icon-shield"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L8 12v12c0 11 7 21 16 23 9-2 16-12 16-23V12L24 4z" stroke="currentColor" strokeWidth="2"/><path d="M18 24l4 4 8-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <h3>Aegis Intercepts</h3>
            <p>Aegis reverse proxy intercepts the request before your backend.</p>
          </div>
          <div className="how-arrow"><svg viewBox="0 0 48 24"><path d="M0 12h40M34 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <div className="how-step" data-animate="1">
            <div className="how-step-num">03</div>
            <div className="how-step-icon"><svg viewBox="0 0 48 48" fill="none"><rect x="6" y="6" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M6 18h36M18 6v36" stroke="currentColor" strokeWidth="2"/><path d="M24 28l4 4 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <h3>Rule-Based Analysis</h3>
            <p>The WAF engine scans for SQLi, XSS, SSTI, LFI, RFI, and CMDi patterns.</p>
          </div>
          <div className="how-arrow"><svg viewBox="0 0 48 24"><path d="M0 12h40M34 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <div className="how-step" data-animate="1">
            <div className="how-step-num">04</div>
            <div className="how-step-verdict">
              <div className="verdict-blocked"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg><span>403 Blocked</span></div>
              <div className="verdict-allowed"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Forwarded</span></div>
            </div>
            <h3>Verdict</h3>
            <p>Malicious? → <span className="mono text-red">403 Blocked</span>. Clean? → <span className="mono text-green">Forwarded</span>.</p>
          </div>
        </div>
        <div className="arch-flow" data-animate="1">
          <div className="arch-flow-box"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/></svg>User<br/><span>(Browser)</span></div>
          <div className="arch-flow-arrow">→</div>
          <div className="arch-flow-box"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5"/></svg>Nginx<br/><span>(Port 8000)</span></div>
          <div className="arch-flow-arrow">→</div>
          <div className="arch-flow-box arch-flow-box--accent"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5"/></svg>Aegis WAF<br/><span>(FastAPI)</span></div>
          <div className="arch-flow-arrow">→</div>
          <div className="arch-flow-box"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/><rect x="2" y="14" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="6" cy="6" r="1" fill="currentColor"/><circle cx="6" cy="18" r="1" fill="currentColor"/></svg>Your App<br/><span>(Any Stack)</span></div>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
