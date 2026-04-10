import { useState } from 'react';

const PlanModal = ({ planData, onClose }) => {
  const [success, setSuccess] = useState(false);
  const [domain, setDomain] = useState('');

  const [serverType, setServerType] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/integrate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: planData, domain, serverType })
      });
      if (res.ok) setSuccess(true);
    } catch(err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="modal-overlay active" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        {!success ? (
          <>
            <div className="modal-header">
              <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
                <path d="M18 3L5 9.5v9c0 8.28 5.54 16 13 17.5 7.46-1.5 13-9.22 13-17.5v-9L18 3z" stroke="#10B981" strokeWidth="1.5" fill="#10B981" opacity="0.15"/>
                <path d="M13 18l4 4 6-7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h2>Integrate Aegis with Your Website</h2>
              <p className="modal-plan">Selected: {planData}</p>
            </div>
            <form className="modal-form" onSubmit={handleSubmit}>
              <input type="url" placeholder="https://yoursite.com" required value={domain} onChange={e => setDomain(e.target.value)} />
              <select required value={serverType} onChange={e => setServerType(e.target.value)}>
                <option value="" disabled>Select your server type</option>
                <option>Nginx</option>
                <option>Apache</option>
                <option>Other</option>
              </select>
              <label className="checkbox-label"><input type="checkbox" required /> I agree to the <a href="#">Terms of Service</a></label>
              <button type="submit" className="btn btn-primary btn-full" disabled={loading}>{loading ? 'Integrating...' : 'Proceed to Setup'}</button>
              <p className="modal-note">Our team will configure Aegis as a reverse proxy in front of your application within 24 hours.</p>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto 12px', color: '#10B981' }}>
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '1rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '6px' }}>Setup Request Received!</h3>
            <p style={{ color: '#8B9FC0', fontSize: '.85rem' }}>We'll configure Aegis for <strong style={{ color: '#10B981', fontFamily: '"Space Mono",monospace', fontSize: '.8rem' }}>{domain}</strong> within 24 hours.</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default PlanModal;
