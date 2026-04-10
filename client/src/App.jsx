import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Terminal from './components/Terminal';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import OpenSource from './components/OpenSource';
import Architecture from './components/Architecture';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import PlanModal from './components/PlanModal';
import AdminPanel from './components/AdminPanel';

function App() {
  const [user, setUser] = useState(null);
  const [authModalTab, setAuthModalTab] = useState(null); // 'login' or 'signup', null means closed
  const [planModalData, setPlanModalData] = useState(null);

  // Re-run the global animations and sessions.
  useEffect(() => {
    // Session fetch
    fetch('/api/me', { credentials: 'omit' }) // wait, we need include
      .catch(() => {})
      .then(res => {
         if (res && res.ok) return res.json();
      })
      .then(data => {
         if (data && data.user) setUser(data.user);
      });
  }, []);
  
  // Re-run the global observe mechanics directly inside App or components
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const siblings = entry.target.parentElement.querySelectorAll('[data-animate]');
          const idx = Array.from(siblings).indexOf(entry.target);
          setTimeout(() => entry.target.classList.add('visible'), idx * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    
    setTimeout(() => {
      document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    }, 100);

    // Smooth scroll
    const smoothScroll = (e) => {
      if(e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        const id = e.target.getAttribute('href');
        if (id === '#') return;
        const el = document.querySelector(id);
        if (el) { 
          e.preventDefault(); 
          el.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
        }
      }
    };
    document.addEventListener('click', smoothScroll);
    return () => {
      document.removeEventListener('click', smoothScroll);
    };
  }, []);

  // Update fetch to always use include
  useEffect(() => {
    const originalFetch = window.fetch;
    window.fetch = function() {
      if (arguments[1] == null) {
          arguments[1] = {};
      }
      arguments[1].credentials = 'include';
      return originalFetch.apply(this, arguments);
    };
  }, []);

  return (
    <>
      <Navbar 
        user={user} 
        setUser={setUser} 
        onOpenAuth={(tab) => setAuthModalTab(tab)} 
      />
      {authModalTab === 'admin' ? (
        <AdminPanel onClose={() => setAuthModalTab(null)} />
      ) : (
        <>
          <Hero />
          <Terminal />
          <HowItWorks />
          <Features />
          <OpenSource />
          <Architecture />
          <Pricing onPlanSelect={setPlanModalData} />
          <Contact />
        </>
      )}
      
      <Footer />
      
      {(authModalTab === 'login' || authModalTab === 'signup') && (
        <AuthModal 
          tab={authModalTab} 
          onClose={() => setAuthModalTab(null)} 
          setUser={setUser} 
        />
      )}
      
      {planModalData && (
        <PlanModal 
          planData={planModalData} 
          onClose={() => setPlanModalData(null)} 
        />
      )}
    </>
  );
}

export default App;
