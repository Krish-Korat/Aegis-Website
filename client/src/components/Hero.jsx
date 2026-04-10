import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const counterRef = useRef(null);
  const [countersDone, setCountersDone] = useState(false);
  const [counts, setCounts] = useState({c1: 0, c2: 0, c3: 0});

  useEffect(() => {
    if(!counterRef.current || countersDone) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersDone) {
          setCountersDone(true);
          const duration = 1500;
          const start = performance.now();
          const target1 = 7, target2 = 100, target3 = 0;
          function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCounts({
              c1: Math.round(target1 * eased),
              c2: Math.round(target2 * eased),
              c3: Math.round(target3 * eased)
            });
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });
    observer.observe(counterRef.current);
  }, [countersDone]);

  return (
    <section id="hero" className="hero">
      <div className="bg-pattern bg-pattern--hex"></div>
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-eyebrow"><span className="eyebrow-dot"></span> AEGIS, THE OPEN-SOURCE WEB APPLICATION FIREWALL (WAF)</p>
          <h1 className="hero-headline">MAKE YOUR<br/>WEB SERVICES<br/><span className="hero-headline-accent">SECURE BY DEFAULT</span></h1>
          <p className="hero-sub">Fool attackers and protect your web services with our open-source Web Application Firewall. Aegis acts as a shield in front of your web services — it blocks attacks before they can hit and guarantees confidentiality, integrity, and availability of your data.</p>
          <div className="hero-ctas">
            <a href="https://github.com/Krish-Korat/Aegis-WAF" target="_blank" rel="noreferrer" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="2"/>
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              READ THE DOCS
            </a>
            <a href="#how-it-works" className="btn btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><polygon points="5,3 19,12 5,21" fill="currentColor"/></svg>
              SEE HOW IT WORKS
            </a>
          </div>
          {/* Stats counters */}
          <div className="hero-counters" ref={counterRef}>
            <div className="counter-item">
              <div className="counter-row"><span className="counter-num">{counts.c1}</span></div>
              <span className="counter-label">Attack Modules</span>
            </div>
            <div className="counter-item">
              <div className="counter-row"><span className="counter-num">{counts.c2}</span><span className="counter-suffix">%</span></div>
              <span className="counter-label">Open Source</span>
            </div>
            <div className="counter-item">
              <div className="counter-row"><span className="counter-num">{counts.c3}</span></div>
              <span className="counter-label">Code Changes</span>
            </div>
          </div>
        </div>
        {/* Hero WAF Diagram — BunkerWeb-style infographic */}
        <div className="hero-diagram" id="heroDiagram">
          <img src="/waf-diagram.png" alt="Aegis WAF Architecture Diagram" className="diagram-img" data-animate="blur-in" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
