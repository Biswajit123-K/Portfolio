const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const header = document.getElementById('header');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

// Active link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.navbar a, .mobile-menu a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id');
  });
  links.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

// Typewriter effect
/* ── Typewriter ── */
const roles = ['Frontend Developer', 'MERN Stack Developer',
];
let ri = 0, ci = 0, deleting = false;
const tw = document.getElementById('typewriter');

function type() {
  const cur = roles[ri];
  if (!deleting) {
    tw.textContent = cur.slice(0, ++ci);
    if (ci === cur.length) {
      deleting = true; setTimeout(type, 1800);
      return;
    }
  } else {
    tw.textContent = cur.slice(0, --ci);
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(type, deleting ? 50 : 88);
}
type();


// About section 
/* ── Tab switching ── */
function switchTab(panelId, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('panel-' + panelId).classList.add('active');
  btn.classList.add('active');
  if (panelId === 'skills') animateBars();
}

/* ── Skill bar animation ── */
function animateBars() {
  document.querySelectorAll('.skill-level-bar').forEach(bar => {
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = bar.dataset.level + '%';
    }, 80);
  });
}

/* animate bars on first load if skills tab is active */
window.addEventListener('load', () => {
  if (document.getElementById('panel-skills').classList.contains('active')) {
    animateBars();
  }
});