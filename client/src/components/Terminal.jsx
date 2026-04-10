import { useEffect, useRef, useState } from 'react';

const Terminal = () => {
  const terminalRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [lines, setLines] = useState([
    { prompt: '$', cmd: 'git clone https://github.com/Krish-Korat/Aegis-WAF.git', typed: '', typeIndex: 0, isCmd: true, show: false, delay: 0 },
    { output: "Cloning into 'Aegis-WAF'... done.", show: false, delay: 1800 },
    { prompt: '$', cmd: 'cd Aegis-WAF', typed: '', typeIndex: 0, isCmd: true, show: false, delay: 2100 },
    { prompt: '$', cmd: 'python aegis.py start --target http://localhost:3000', typed: '', typeIndex: 0, isCmd: true, show: false, delay: 2800 },
    { output: "Aegis WAF is now protecting your website on port 8000", isSuccess: true, show: false, delay: 4500 },
    { prompt: '$', cmd: 'curl "http://localhost:8000/?q=\' UNION SELECT * --"', typed: '', typeIndex: 0, isCmd: true, show: false, delay: 5000 },
    { output: "⛔ 403 Forbidden — SQL Injection detected and blocked", isError: true, show: false, delay: 6800 },
    { prompt: '$', hasCursor: true, show: false, delay: 7100 }
  ]);

  useEffect(() => {
    if (!terminalRef.current || started) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started) {
        setStarted(true);
        lines.forEach((line, index) => {
          setTimeout(() => {
            setLines(prev => prev.map((l, i) => i === index ? { ...l, show: true } : l));
            if (line.isCmd) {
              let charIndex = 0;
              const intv = setInterval(() => {
                charIndex++;
                setLines(prev => prev.map((l, i) => i === index ? { ...l, typed: l.cmd.slice(0, charIndex) } : l));
                if (charIndex >= line.cmd.length) clearInterval(intv);
              }, 25);
            }
          }, line.delay);
        });
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    observer.observe(terminalRef.current);
  }, [started, lines]);

  return (
    <section className="section section--deep terminal-section">
      <div className="bg-pattern bg-pattern--diag"></div>
      <div className="container">
        <div className="terminal-grid">
          <div className="terminal-info" data-animate="1">
            <span className="section-tag">QUICK START</span>
            <h2 className="section-title">DEPLOY IN<br/><span className="accent">3 COMMANDS</span></h2>
            <p>Aegis works with <strong>any</strong> web application — Node.js, Python, PHP, Java, React, or static HTML. You don't change a single line of your code.</p>
            <div className="deploy-badges">
              <span className="deploy-badge">Docker</span>
              <span className="deploy-badge">Python 3.8+</span>
              <span className="deploy-badge">Any Framework</span>
            </div>
          </div>
          <div className="terminal-window" data-animate="1">
            <div className="terminal-header">
              <div className="terminal-dots"><span></span><span></span><span></span></div>
              <span className="terminal-title">aegis — terminal</span>
            </div>
            <div className="terminal-body" id="terminalBody" ref={terminalRef}>
              {lines.map((line, idx) => (
                <div 
                  key={idx} 
                  className={`term-line ${line.output ? 'term-output' : ''} ${line.isSuccess ? 'term-success' : ''} ${line.isError ? 'term-blocked' : ''}`}
                  style={{ opacity: line.show ? 1 : 0, transform: `translateX(${line.show ? 0 : '-8px'})`, transition: 'opacity 0.3s, transform 0.3s' }}
                >
                  {line.isSuccess && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#10B981" strokeWidth="2"/></svg>
                  )}
                  {line.prompt && <span className="term-prompt">{line.prompt} </span>}
                  {line.isCmd && <span className="term-cmd">{line.typed}</span>}
                  {line.output && !line.isSuccess && !line.isError && line.output}
                  {line.isSuccess && ` ${line.output}`}
                  {line.isError && line.output}
                  {line.hasCursor && <span className="term-cursor">█</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
