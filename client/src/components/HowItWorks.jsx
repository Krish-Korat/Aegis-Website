const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section section--deep">
      <div className="bg-pattern bg-pattern--grid"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">ARCHITECTURE</span>
          <h2 className="section-title">THE AEGIS <span className="accent">PIPELINE</span></h2>
          <p className="section-desc">Aegis sits seamlessly in front of your web application, acting as a fortified gateway. Every request is parsed and scored against threat modules in real-time before reaching your backend.</p>
        </div>

        <div className="pipeline-wrapper" data-animate="1">
          <div className="pipeline-track"></div>
          
          <div className="pipeline-nodes">
            {/* Step 1: Request */}
            <div className="pipe-node">
              <div className="pipe-icon-wrap">
                <svg className="pipe-icon" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/></svg>
              </div>
              <div className="pipe-content">
                <span className="pipe-mono">01. INITIATION</span>
                <h3>Client Request</h3>
                <p>User sends HTTP/S traffic to your public domain.</p>
              </div>
            </div>

            {/* Step 2: Proxy */}
            <div className="pipe-node">
              <div className="pipe-icon-wrap">
                <svg className="pipe-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
              </div>
              <div className="pipe-content">
                <span className="pipe-mono">02. INTERCEPTION</span>
                <h3>Reverse Proxy</h3>
                <p>Nginx receives traffic, handles SSL, and buffers payloads.</p>
              </div>
            </div>

            {/* Step 3: Engine (Active) */}
            <div className="pipe-node pipe-node--active">
              <div className="pipe-icon-wrap">
                <div className="pipe-ping"></div>
                <svg className="pipe-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="pipe-content">
                <span className="pipe-mono text-green">03. INSPECTION</span>
                <h3>Aegis Engine</h3>
                <p>Signatures & behaviors are scanned strictly for OWASP threats.</p>
              </div>
            </div>
            
            {/* Step 4: Decisions */}
            <div className="pipe-decision">
              <div className="decision-branch decision-branch--block">
                <div className="branch-line"></div>
                <div className="branch-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
                  <div>
                    <h4>403 Blocked</h4>
                    <span>Malicious Payload</span>
                  </div>
                </div>
              </div>
              <div className="decision-branch decision-branch--allow">
                <div className="branch-line"></div>
                <div className="branch-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><circle cx="6" cy="6" r="1" fill="currentColor"/><circle cx="6" cy="18" r="1" fill="currentColor"/></svg>
                  <div>
                    <h4>App Server</h4>
                    <span>Clean Traffic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
