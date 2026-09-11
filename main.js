/* =====================================================
   BEKELE SHIMELIS PORTFOLIO — MAIN.JS
   =====================================================
   HOW TO CUSTOMIZE:
   - Update PORTFOLIO_DATA object below with your real info
   - Replace placeholder email/social links
   - Add/remove projects in the HTML (index.html)
   ===================================================== */

'use strict';

// ── Preloader intro (Eyobed-style) ────────────────
(function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  function dismiss() {
    if (preloader.classList.contains('fade-out')) return;
    preloader.classList.add('fade-out');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 600);
  }

  // Show intro for ~2s then smoothly fade out
  window.addEventListener('load', () => {
    setTimeout(dismiss, 1900);
  });

  // Fallback safety
  setTimeout(dismiss, 2700);
})();

// ── Navbar scroll effect ──────────────────────────
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('back-to-top');

function onScroll() {
  const scrolled = window.scrollY > 50;
  navbar.classList.toggle('scrolled', scrolled);
  if (backToTop) {
    backToTop.hidden = !scrolled;
  }

  // Active nav link tracking
  updateActiveNavLink();
}

window.addEventListener('scroll', onScroll, { passive: true });

// ── Back to top ───────────────────────────────────
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Mobile nav toggle ─────────────────────────────
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navBackdrop = document.getElementById('nav-backdrop');

function closeMobileMenu() {
  if (!navMenu) return;
  navMenu.classList.remove('open');
  if (navToggle) {
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
  if (navBackdrop) {
    navBackdrop.classList.remove('active');
  }
  document.body.style.overflow = '';
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    if (navBackdrop) navBackdrop.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  navMenu.querySelectorAll('.nav-link, .nav-resume-btn').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close on backdrop tap
  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMobileMenu);
  }

  // Close on outside click fallback
  document.addEventListener('click', e => {
    if (!navbar.contains(e.target) && e.target !== navBackdrop && navMenu.classList.contains('open')) {
      closeMobileMenu();
    }
  });
}

// ── Active nav link on scroll ─────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
  const scrollPos = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.toggle('active-link',
          link.getAttribute('href') === `#${id}`);
      });
    }
  });
}

// ── Experience tabs ───────────────────────────────
const expTabs = document.querySelectorAll('.exp-tab');
const expPanels = document.querySelectorAll('.exp-panel');

expTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetId = tab.dataset.target;

    expTabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    expPanels.forEach(p => {
      p.classList.remove('active');
      p.hidden = true;
    });

    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    const panel = document.getElementById(targetId);
    if (panel) {
      panel.classList.add('active');
      panel.hidden = false;
    }
  });
});

// ── Contact form ──────────────────────────────────
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const submitBtn = document.getElementById('form-submit-btn');

if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();

    // Basic validation
    const name    = contactForm.querySelector('#contact-name').value.trim();
    const email   = contactForm.querySelector('#contact-email').value.trim();
    const subject = contactForm.querySelector('#contact-subject').value.trim();
    const message = contactForm.querySelector('#contact-message').value.trim();

    if (!name || !email || !subject || !message) {
      shakeForm();
      return;
    }
    if (!isValidEmail(email)) {
      contactForm.querySelector('#contact-email').focus();
      return;
    }

    // Simulate sending (replace with your real endpoint / EmailJS / Formspree)
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-text').textContent = 'Sending…';

    await sleep(1200); // simulated network delay

    contactForm.reset();
    submitBtn.disabled = false;
    submitBtn.querySelector('.btn-text').textContent = 'Send Message';

    if (formSuccess) {
      formSuccess.hidden = false;
      setTimeout(() => { formSuccess.hidden = true; }, 5000);
    }
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function shakeForm() {
  contactForm.classList.add('shake');
  setTimeout(() => contactForm.classList.remove('shake'), 500);
}

function sleep(ms) { return new Promise(res => setTimeout(res, ms)); }

// ── Scroll reveal animations ──────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

// Add reveal class and observe cards / sections
const revealTargets = [
  '.skill-card',
  '.project-card',
  '.about-text p',
  '.about-list',
  '.about-image-wrap',
  '.exp-panel',
  '.contact-text',
  '.contact-form',
  '.section-header',
];

revealTargets.forEach(selector => {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
});

// ── Eyobed-Style Starry Cosmos Generator ──────────
(function initEyobedStars() {
  function generateBoxShadows(n) {
    let val = '';
    for (let i = 0; i < n; i++) {
      const x = Math.floor(Math.random() * 2500);
      const y = Math.floor(Math.random() * 2500);
      val += `${x}px ${y}px #ffffff${i < n - 1 ? ', ' : ''}`;
    }
    return val;
  }

  const s1 = document.getElementById('stars1');
  const s2 = document.getElementById('stars2');
  const s3 = document.getElementById('stars3');

  if (s1) s1.style.boxShadow = generateBoxShadows(600);
  if (s2) s2.style.boxShadow = generateBoxShadows(180);
  if (s3) s3.style.boxShadow = generateBoxShadows(80);
})();

// ── Typing animation for hero title ──────────────
(function initTyping() {
  const titles = [
    'I build things for the web & beyond.',
    'I craft fast, scalable APIs.',
    'I ship beautiful mobile apps.',
    'I train intelligent ML models.',
  ];
  const el = document.querySelector('.hero-title');
  if (!el) return;

  let titleIdx = 0;
  let charIdx = 0;
  let deleting = false;
  let paused = false;

  function type() {
    if (paused) return;
    const current = titles[titleIdx];
    if (!deleting) {
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        paused = true;
        setTimeout(() => { paused = false; deleting = true; }, 2800);
      }
    } else {
      el.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        titleIdx = (titleIdx + 1) % titles.length;
      }
    }
  }

  // Start typing after hero animation delay
  setTimeout(() => setInterval(type, deleting ? 40 : 75), 1800);
})();

// ── Smooth scroll offset for fixed navbar ─────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 70;
    const top = target.getBoundingClientRect().top + window.scrollY - offset - 10;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ── Shake keyframe (injected) ─────────────────────
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%,100%{transform:translateX(0)}
    20%{transform:translateX(-8px)}
    40%{transform:translateX(8px)}
    60%{transform:translateX(-6px)}
    80%{transform:translateX(6px)}
  }
  .shake { animation: shake .4s ease; }
  .nav-link.active-link { color: var(--clr-accent); }
`;
document.head.appendChild(style);

// ── Theme toggle (Dark / Light mode) ──────────────
(function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  toggleBtn.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const newTheme = isLight ? 'dark' : 'light';
    if (newTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', newTheme);
  });
})();

// ── Init ──────────────────────────────────────────
onScroll(); // run once on load
