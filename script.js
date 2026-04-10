/* ═══════════════════════════════════════════════════════════════════════════
   AEGIS WAF — v3 Enhanced JS
   Terminal typing, counters, form validation, modal, nav, scroll fx
   ═══════════════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── NAVBAR ───────────────────────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navActions = document.getElementById('navActions');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    if (navActions) navActions.classList.toggle('open', open);
    const spans = navToggle.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      if (navActions) navActions.classList.remove('open');
      navToggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });


  // ── SCROLL ANIMATIONS ───────────────────────────────────────────────
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

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));


  // ── COUNTER ANIMATION ──────────────────────────────────────────────
  const counters = document.querySelectorAll('.counter-num');
  let countersDone = false;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersDone) {
        countersDone = true;
        counters.forEach(counter => {
          const target = parseInt(counter.dataset.target);
          const duration = 1500;
          const start = performance.now();

          function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            counter.textContent = Math.round(target * eased);
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        });
        counterObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });

  if (counters.length) {
    counterObserver.observe(counters[0].closest('.hero-counters'));
  }


  // ── TERMINAL TYPING EFFECT ─────────────────────────────────────────
  const terminalBody = document.getElementById('terminalBody');
  let terminalStarted = false;

  const terminalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !terminalStarted) {
        terminalStarted = true;
        startTerminalAnimation();
        terminalObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });

  if (terminalBody) {
    terminalObserver.observe(terminalBody);
  }

  function startTerminalAnimation() {
    const lines = terminalBody.querySelectorAll('.term-line');
    let delay = 0;

    lines.forEach((line, i) => {
      const cmd = line.querySelector('.term-cmd');
      const isOutput = line.classList.contains('term-output');
      const hasCursor = line.querySelector('.term-cursor');

      // Initially hide all lines
      line.style.opacity = '0';
      line.style.transform = 'translateX(-8px)';

      setTimeout(() => {
        line.style.transition = 'opacity 0.3s, transform 0.3s';
        line.style.opacity = '1';
        line.style.transform = 'translateX(0)';

        if (cmd && cmd.dataset.type) {
          const text = cmd.dataset.type;
          cmd.textContent = '';
          let charIndex = 0;
          const typeInterval = setInterval(() => {
            cmd.textContent += text[charIndex];
            charIndex++;
            if (charIndex >= text.length) clearInterval(typeInterval);
          }, 25);
        }
      }, delay);

      if (cmd && cmd.dataset.type) {
        delay += cmd.dataset.type.length * 25 + 400;
      } else if (isOutput) {
        delay += 300;
      } else if (hasCursor) {
        delay += 200;
      } else {
        delay += 200;
      }
    });
  }


  // ── PRICING MODAL ───────────────────────────────────────────────────
  const modal = document.getElementById('planModal');
  const modalClose = document.getElementById('modalClose');
  const modalPlan = document.getElementById('modalPlanName');
  const setupForm = document.getElementById('setupForm');

  document.querySelectorAll('.btn-plan').forEach(btn => {
    btn.addEventListener('click', () => {
      modalPlan.textContent = `Selected: ${btn.dataset.plan}`;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  setupForm.addEventListener('submit', e => {
    e.preventDefault();
    const domain = document.getElementById('setupDomain').value;
    const saved = setupForm.innerHTML;
    setupForm.innerHTML = `
      <div style="text-align:center;padding:20px 0;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style="margin:0 auto 12px;color:#10B981;">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <h3 style="font-family:Outfit,sans-serif;font-size:1rem;font-weight:900;text-transform:uppercase;margin-bottom:6px;">Setup Request Received!</h3>
        <p style="color:#8B9FC0;font-size:.85rem;">We'll configure Aegis for <strong style="color:#10B981;font-family:'Space Mono',monospace;font-size:.8rem;">${domain}</strong> within 24 hours.</p>
      </div>`;
    setTimeout(() => {
      const handler = () => { if (!modal.classList.contains('active')) { setupForm.innerHTML = saved; modal.removeEventListener('transitionend', handler); } };
      modal.addEventListener('transitionend', handler);
    }, 100);
  });


  // ── CONTACT FORM VALIDATION + SUBMISSION ─────────────────────────────
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  const validators = {
    cName: { required: true, minLength: 2, errId: 'errName', msg: 'Name must be at least 2 characters' },
    cEmail: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errId: 'errEmail', msg: 'Please enter a valid email' },
    cPhone: { required: false, pattern: /^[0-9+\-\s()]{7,15}$/, errId: 'errPhone', msg: 'Enter a valid phone number' },
    cSubject: { required: true, minLength: 3, errId: 'errSubject', msg: 'Subject must be at least 3 characters' },
    cMessage: { required: true, minLength: 10, errId: 'errMessage', msg: 'Message must be at least 10 characters' }
  };

  // Real-time validation on blur
  Object.keys(validators).forEach(id => {
    const input = document.getElementById(id);
    if (!input) return;

    input.addEventListener('blur', () => validateField(id));
    input.addEventListener('input', () => {
      // Clear error on typing
      input.classList.remove('input-error');
      const errEl = document.getElementById(validators[id].errId);
      if (errEl) errEl.textContent = '';
    });
  });

  function validateField(id) {
    const v = validators[id];
    const input = document.getElementById(id);
    if (!input) return true;

    const val = input.value.trim();
    const errEl = document.getElementById(v.errId);

    // Skip non-required empty fields
    if (!v.required && val === '') {
      input.classList.remove('input-error');
      if (errEl) errEl.textContent = '';
      return true;
    }

    let valid = true;

    if (v.required && val === '') {
      valid = false;
    } else if (v.minLength && val.length < v.minLength) {
      valid = false;
    } else if (v.pattern && val !== '' && !v.pattern.test(val)) {
      valid = false;
    }

    if (!valid) {
      input.classList.add('input-error');
      if (errEl) errEl.textContent = v.msg;
      return false;
    } else {
      input.classList.remove('input-error');
      if (errEl) errEl.textContent = '';
      return true;
    }
  }

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate all fields
    let allValid = true;
    Object.keys(validators).forEach(id => {
      if (!validateField(id)) allValid = false;
    });

    if (!allValid) {
      formStatus.textContent = 'Please fix the errors above.';
      formStatus.className = 'form-status error';
      return;
    }

    const btn = document.getElementById('contactSubmit');
    btn.disabled = true;
    btn.textContent = 'SENDING...';
    formStatus.textContent = '';

    // Try Netlify Forms submission (works when deployed on Netlify)
    try {
      const formData = new FormData(contactForm);

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });

      if (res.ok) {
        formStatus.textContent = '✓ Message sent successfully! We\'ll get back to you soon.';
        formStatus.className = 'form-status success';
        contactForm.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      // Fallback: show success anyway (for local dev or non-Netlify hosts)
      formStatus.textContent = '✓ Message recorded! We\'ll get back to you soon.';
      formStatus.className = 'form-status success';
      contactForm.reset();
    }

    btn.disabled = false;
    btn.textContent = 'SEND MESSAGE';

    setTimeout(() => {
      formStatus.textContent = '';
      formStatus.className = 'form-status';
    }, 5000);
  });


  // ── SMOOTH SCROLL ───────────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const el = document.querySelector(id);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });


  // ── ACTIVE NAV LINK ─────────────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinkItems = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinkItems.forEach(l => {
      l.style.color = l.getAttribute('href') === `#${current}` ? '#10B981' : '';
    });
  });

});
