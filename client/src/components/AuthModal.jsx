import { useState } from 'react';

const AuthModal = ({ tab, onClose, setUser }) => {
  const [activeTab, setActiveTab] = useState(tab); // 'login' or 'signup'
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (activeTab === 'signup' && formData.password.length < 8) {
      return setError('Password must be at least 8 characters');
    }

    setLoading(true);
    const endpoint = activeTab === 'signup' ? '/api/signup' : '/api/login';
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      
      if (res.ok) {
        setUser(data.user);
        onClose();
      } else {
        setError(data.error || 'Authentication failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
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
        <div className="modal-header">
          <svg width="40" height="40" viewBox="0 0 36 36" fill="none" style={{ margin: '0 auto 15px' }}>
            <path d="M18 3L5 9.5v9c0 8.28 5.54 16 13 17.5 7.46-1.5 13-9.22 13-17.5v-9L18 3z" stroke="#10B981" strokeWidth="1.5" fill="#10B981" opacity="0.15"/>
            <path d="M13 18l4 4 6-7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div style={{ display: 'flex', borderBottom: '1px solid #1E293B', marginBottom: '20px' }}>
            <button 
              style={{ flex: 1, padding: '10px', background: 'transparent', color: activeTab === 'login' ? '#10B981' : '#8B9FC0', borderBottom: activeTab === 'login' ? '2px solid #10B981' : 'none', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }}
              onClick={() => { setActiveTab('login'); setError(''); }}
            >
              Log In
            </button>
            <button 
              style={{ flex: 1, padding: '10px', background: 'transparent', color: activeTab === 'signup' ? '#10B981' : '#8B9FC0', borderBottom: activeTab === 'signup' ? '2px solid #10B981' : 'none', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }}
              onClick={() => { setActiveTab('signup'); setError(''); }}
            >
              Sign Up
            </button>
          </div>
        </div>
        
        <form className="modal-form" onSubmit={handleSubmit}>
          {activeTab === 'signup' && (
            <input 
              type="text" 
              placeholder="Full Name" 
              required 
              value={formData.name} 
              onChange={e => setFormData({...formData, name: e.target.value})} 
            />
          )}
          <input 
            type="email" 
            placeholder="Email Address" 
            required 
            value={formData.email} 
            onChange={e => setFormData({...formData, email: e.target.value})} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
            minLength={activeTab === 'signup' ? 8 : 1}
            value={formData.password} 
            onChange={e => setFormData({...formData, password: e.target.value})} 
          />
          
          {error && <p style={{ color: '#FF5252', fontSize: '0.85rem', margin: '0 0 10px 0' }}>{error}</p>}
          
          <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
            {loading ? 'Processing...' : (activeTab === 'login' ? 'Log In' : 'Sign Up')}
          </button>
        </form>
      </div>
    </div>
  );
};
export default AuthModal;
