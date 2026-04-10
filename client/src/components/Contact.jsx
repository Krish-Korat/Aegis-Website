import { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState({ text: '', type: '' });
  const [formData, setFormData] = useState({
    name: '', company: '', phone: '', email: '', subject: '', message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        setFormStatus({ text: '✓ Message sent successfully! We\'ll get back to you soon.', type: 'success' });
        setFormData({ name: '', company: '', phone: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus({ text: data.error || 'Failed to send message', type: 'error' });
      }
    } catch (err) {
      setFormStatus({ text: 'Failed to send message', type: 'error' });
    }
    setLoading(false);
    setTimeout(() => setFormStatus({ text: '', type: '' }), 5000);
  };

  const attr = (name) => ({
    name,
    value: formData[name],
    onChange: (e) => setFormData({...formData, [name]: e.target.value})
  });

  return (
    <section id="contact" className="section section--navy">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info" data-animate="1">
            <span className="section-tag">GET IN TOUCH</span>
            <h2 className="section-title">CONTACT THE<br/><span className="accent">AEGIS TEAM</span></h2>
            <p>Whether you're looking for support, more information, or just want to connect, the Aegis Team is ready to assist. Let's secure the web together!</p>
            <div className="contact-detail">
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5"/><path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5"/></svg>
              <span>contact@aegiswaf.io</span>
            </div>
          </div>
          <div className="contact-form-wrap" data-animate="1">
            <h3>SEND US A MESSAGE</h3>
            <p className="contact-form-sub">Feel free to send us any questions, feedback or suggestions you might have.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Name *" required minLength="2" {...attr('name')} />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Company" {...attr('company')} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="tel" placeholder="Phone" pattern="[0-9+\-\s()]{7,15}" {...attr('phone')} />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email *" required {...attr('email')} />
                </div>
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject *" required minLength="3" {...attr('subject')} />
              </div>
              <div className="form-group">
                <textarea placeholder="Message *" rows="5" required minLength="10" {...attr('message')}></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
                {loading ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
              {formStatus.text && <p className={`form-status ${formStatus.type}`}>{formStatus.text}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
