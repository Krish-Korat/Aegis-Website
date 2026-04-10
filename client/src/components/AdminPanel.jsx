import { useState, useEffect } from 'react';

const AdminPanel = ({ onClose }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/admin/users')
      .then(res => {
        if (!res.ok) throw new Error('Unauthorized or network error');
        return res.json();
      })
      .then(data => {
        if (data.error) setError(data.error);
        else setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="section section--dark" style={{ minHeight: '100vh', paddingTop: '120px' }}>
      <div className="bg-pattern bg-pattern--scan"></div>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <span className="section-tag" style={{ margin: 0 }}>DASHBOARD</span>
            <h2 className="section-title" style={{ margin: 0 }}>AEGIS <span className="accent">ADMIN PANEL</span></h2>
          </div>
          <button 
            onClick={onClose} 
            className="btn btn-outline" 
            style={{ padding: '8px 16px' }}
          >
            Close Dashboard
          </button>
        </div>

        {loading ? (
          <div style={{ color: '#8B9FC0', textAlign: 'center', padding: '40px' }}>Loading integration data...</div>
        ) : error ? (
          <div style={{ color: '#FF5252', background: '#FF525215', padding: '15px', borderRadius: '8px', border: '1px solid #FF525230' }}>
            {error}
          </div>
        ) : (
          <div style={{ background: '#0F172A', borderRadius: '12px', border: '1px solid #1E293B', overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #1E293B', background: '#131C30' }}>
                    <th style={{ padding: '16px', color: '#8B9FC0', fontWeight: 600 }}>User</th>
                    <th style={{ padding: '16px', color: '#8B9FC0', fontWeight: 600 }}>Joined</th>
                    <th style={{ padding: '16px', color: '#8B9FC0', fontWeight: 600 }}>Integration Status</th>
                    <th style={{ padding: '16px', color: '#8B9FC0', fontWeight: 600 }}>Plan</th>
                    <th style={{ padding: '16px', color: '#8B9FC0', fontWeight: 600 }}>Target Domain</th>
                    <th style={{ padding: '16px', color: '#8B9FC0', fontWeight: 600 }}>Server Type</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => {
                    const integrated = Boolean(user.integration);
                    return (
                      <tr key={user._id} style={{ borderBottom: '1px solid #1E293B' }}>
                        <td style={{ padding: '16px' }}>
                          <strong style={{ color: '#FFF', display: 'block' }}>{user.name}</strong>
                          <span style={{ color: '#8B9FC0', fontSize: '0.8rem' }}>{user.email}</span>
                          {user.role === 'admin' && <span style={{ marginLeft: '8px', background: '#3B82F630', color: '#3B82F6', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px' }}>Admin</span>}
                        </td>
                        <td style={{ padding: '16px', color: '#8B9FC0' }}>
                          {new Date(user.createdAt).toLocaleDateString()}
                        </td>
                        <td style={{ padding: '16px' }}>
                          {integrated ? (
                            <span style={{ display: 'inline-flex', alignItems: 'center', background: '#10B98115', color: '#10B981', padding: '4px 8px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 500 }}>
                              <span style={{ width: 6, height: 6, background: '#10B981', borderRadius: '50%', marginRight: 6 }}></span>
                              {user.integration.status || 'Active'}
                            </span>
                          ) : (
                            <span style={{ color: '#8B9FC0', fontSize: '0.8rem' }}>Pending</span>
                          )}
                        </td>
                        <td style={{ padding: '16px', color: '#FFF', fontWeight: 500 }}>
                          {integrated ? user.integration.plan : '-'}
                        </td>
                        <td style={{ padding: '16px', color: integrated ? '#3B82F6' : '#8B9FC0' }}>
                          {integrated ? <a href={user.integration.domain} target="_blank" rel="noreferrer">{user.integration.domain}</a> : '-'}
                        </td>
                        <td style={{ padding: '16px', color: '#8B9FC0' }}>
                          {integrated ? user.integration.serverType : '-'}
                        </td>
                      </tr>
                    );
                  })}
                  
                  {users.length === 0 && (
                    <tr>
                      <td colSpan="6" style={{ padding: '40px', textAlign: 'center', color: '#8B9FC0' }}>
                        No users registered yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default AdminPanel;
