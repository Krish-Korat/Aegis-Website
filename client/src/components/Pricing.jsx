const Pricing = ({ onPlanSelect }) => {
  return (
    <section id="pricing" className="section section--dark">
      <div className="bg-pattern bg-pattern--dots"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">PLANS</span>
          <h2 className="section-title">CHOOSE YOUR <span className="accent">PROTECTION PLAN</span></h2>
        </div>
        <div className="pricing-grid">
          <div className="pricing-card" data-animate="1">
            <div className="pricing-header"><span className="pricing-tier">STARTER</span><div className="pricing-price">Free</div><p>Perfect for personal projects and testing.</p></div>
            <ul className="pricing-list"><li>1 domain</li><li>All attack detection modules</li><li>Basic rate limiting</li><li>Attack logs (last 7 days)</li><li>Community support</li></ul>
            <button className="btn btn-outline btn-plan" onClick={() => onPlanSelect("Starter (Free)")}>Get Started Free</button>
          </div>
          <div className="pricing-card pricing-card--featured" data-animate="1">
            <div className="pricing-badge">RECOMMENDED</div>
            <div className="pricing-header"><span className="pricing-tier">PRO</span><div className="pricing-price pricing-price--soon">Coming Soon</div><p>For growing businesses needing full protection.</p></div>
            <ul className="pricing-list"><li>Up to 5 domains</li><li>Advanced rate limiting & brute force</li><li>Custom rule creation</li><li>Real-time dashboard (30 days)</li><li>Email alerts on attacks</li><li>Priority support</li></ul>
            <button className="btn btn-primary btn-plan" onClick={() => onPlanSelect("Pro (Coming Soon)")}>Notify Me</button>
          </div>
          <div className="pricing-card" data-animate="1">
            <div className="pricing-header"><span className="pricing-tier">ENTERPRISE</span><div className="pricing-price">Custom</div><p>For mission-critical applications.</p></div>
            <ul className="pricing-list"><li>Unlimited domains</li><li>Dedicated infrastructure</li><li>SLA-backed uptime</li><li>API for SIEM integration</li><li>24/7 dedicated support</li></ul>
            <button className="btn btn-outline btn-plan" onClick={() => onPlanSelect("Enterprise (Custom)")}>Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
