/* ============================================================
   CONFIG - edit this object to customize the whole portfolio
   ============================================================ */
const CONFIG = {
  roles: ['Aspiring Full-Stack Web Developer', 'Curious & Analytical Software Developer', 'Problem-Solving Computer Science Graduate', 'Self-Driven Technology Enthusiast',],

  // Logos come from the Devicon CDN. "inv" = icon is black, so it gets inverted in dark mode.
  tech: [
    { name: 'HTML', icon: 'html5/html5-original' }, { name: 'CSS', icon: 'css3/css3-original' },
    { name: 'JavaScript', icon: 'javascript/javascript-original' }, { name: 'Git', icon: 'git/git-original' },
    { name: 'GitHub', icon: 'github/github-original', inv: true }, { name: 'React', icon: 'react/react-original' },
    { name: 'TypeScript', icon: 'typescript/typescript-original' }, { name: 'Python', icon: 'python/python-original' },
    { name: 'Django', icon: 'django/django-plain', inv: true }, { name: 'PHP', icon: 'php/php-original' },
    { name: 'Laravel', icon: 'laravel/laravel-original' }, { name: 'MySQL', icon: 'mysql/mysql-original' },
    { name: 'PostgreSQL', icon: 'postgresql/postgresql-original' }, { name: 'Bootstrap', icon: 'bootstrap/bootstrap-original' },
    { name: 'VS Code', icon: 'vscode/vscode-original' }, { name: 'Vercel', icon: 'vercel/vercel-original', inv: true },
    { name: 'Netlify', icon: 'netlify/netlify-original' }
  ],

  // Education: newest first. Replace the placeholder names and years.
  education: [
    { level: 'College', school: 'Negros Oriental State University - Bayawan-Santa Catalina Campus', detail: 'Bachelor of Science in Computer Science - cGPA : 1.72', years: '2019 - 2022' },
    { level: 'Senior High School', school: 'Miguel L. Daclan National High School', detail: 'Academic / GAS', years: '2017 - 2018' },
    { level: 'Junior High School', school: 'Vicente Z. Badon Campus', detail: '1st Honorable Mention', years: '2013 - 2016' },
    { level: 'Elementary', school: 'Arcadio L. Vergara Elem. School', detail: 'Awarded in recognition of diligence, perseverance, and a consistent commitment to school responsibilities', years: '2009 - 2012' }
  ],
  educationHighlights: ['Computer science foundation', 'Hands-on full-stack projects', 'Self-directed learner', 'Strong problem solving', 'Team collaboration', 'Clear communication'],

  // Hobbies: add, remove or reorder freely. "wide: true" makes a card span two columns.
  hobbies: [
    { icon: '💻', title: 'Building side projects', text: 'Turning small ideas into working apps to practice new tools.', wide: true },
    { icon: '🎮', title: 'Gaming', text: 'Strategy and co-op games that sharpen teamwork and planning.' },
    { icon: '🎧', title: 'Music', text: 'My go-to focus fuel during long coding sessions.' },
    { icon: '📚', title: 'Reading tech', text: 'Docs, blogs and tutorials that keep me current.' },
    { icon: '🏸', title: 'Badminton', text: 'Staying active and learning to work in a team.' },
    { icon: '📷', title: 'Photography', text: 'Training my eye for layout, light and detail.', wide: true }
  ],

  // Skills: level is a percentage for the bar.
  skills: [
    { group: 'Frontend', items: [['HTML5', 90], ['CSS3', 85], ['JavaScript', 80], ['React', 70], ['TypeScript', 65], ['Bootstrap', 85]] },
    { group: 'Backend', items: [['Python', 70], ['Django', 65], ['PHP', 75], ['Laravel', 70]] },
    { group: 'Databases', items: [['MySQL', 75], ['PostgreSQL', 65]] },
    { group: 'Tools and deployment', items: [['Git and GitHub', 80], ['VS Code', 90], ['Vercel', 70], ['Netlify', 75]] }
  ],

  // Projects: swap in your real work. Leave a link as '' to hide it.
  projects: [
    { title: 'Portfolio Website', text: 'A professional web development portfolio showcasing my technical expertise, project accomplishments, and qualifications while establishing a credible digital presence for prospective employers and clients.', tags: ['HTML', 'CSS', 'JavaScript'], live: 'https://enriquezjoemer.github.io/Joemer-Inao-Portfolio/', code: 'https://github.com/enriquezjoemer/Joemer-Inao-Portfolio', g: 'linear-gradient(135deg,#4f5dff,#10b5a0)' },
    { title: 'Project two', text: 'Describe what you built and what you learned while making it.', tags: ['React', 'TypeScript'], live: '#', code: '#', g: 'linear-gradient(135deg,#c455ff,#4f5dff)' },
    { title: 'Project three', text: 'Add a full-stack project here, even a simple one. Finished work counts.', tags: ['Laravel', 'MySQL'], live: '', code: '#', g: 'linear-gradient(135deg,#ff7a59,#c455ff)' }
  ],

  contact: { email: 'joemerinao024@gmail.com', location: 'Brgy. Sangke, Hinoba-an, Negros Occidental, Philippines', github: 'https://github.com/enriquezjoemer', linkedin: 'https://linkedin.com/in/joemer-inao-348a303b6' }
};

/* ============================================================ */
const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];
const root = document.documentElement;
root.classList.add('js');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = t => String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* 1. THEME */
const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
root.dataset.theme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
$('#theme-toggle').addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next; localStorage.setItem('theme', next);
});

/* 2. MOBILE MENU */
const menuBtn = $('#menu-toggle'), navLinks = $('#nav-links');
const setMenu = open => { navLinks.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', open); menuBtn.textContent = open ? '✕' : '☰'; };
menuBtn.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
$$('a', navLinks).forEach(a => a.addEventListener('click', () => setMenu(false)));
$('#year').textContent = new Date().getFullYear();

/* 3. RENDER SECTIONS FROM CONFIG */
const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/';
const techHTML = CONFIG.tech.map(t => `<div class="tech"><img class="${t.inv ? 'inv' : ''}" src="${CDN}${t.icon}.svg" alt="" loading="lazy">${esc(t.name)}</div>`).join('');
$('#marquee').innerHTML = techHTML + techHTML; // doubled for a seamless loop

$('#edu-list').innerHTML = CONFIG.education.map((e, i) => `<li class="edu-item reveal" style="--i:${i}"><span class="edu-level">${esc(e.level)} | ${esc(e.years)}</span><h4>${esc(e.school)}</h4><p>${esc(e.detail)}</p></li>`).join('');
$('#edu-highlights').innerHTML = CONFIG.educationHighlights.map(h => `<li>${esc(h)}</li>`).join('');
$('#hobby-grid').innerHTML = CONFIG.hobbies.map((h, i) => `<article class="hobby spot reveal ${h.wide ? 'wide' : ''}" style="--i:${i}"><span class="ico">${h.icon}</span><h4>${esc(h.title)}</h4><p>${esc(h.text)}</p></article>`).join('');
$('#skill-grid').innerHTML = CONFIG.skills.map((g, i) => `<article class="skill-card spot reveal" style="--i:${i}"><h3>${esc(g.group)}</h3>${g.items.map(([n, v]) => `<div class="bar"><div class="bar-top"><span>${esc(n)}</span><span>${v}%</span></div><div class="bar-track"><span class="bar-fill" style="--w:${v}%"></span></div></div>`).join('')}</article>`).join('');
$('#project-grid').innerHTML = CONFIG.projects.map((p, i) => `<article class="card spot reveal" style="--i:${i}"><div class="card-thumb-wrap"><div class="card-thumb" style="--g:${p.g}">${esc(p.title.charAt(0))}</div></div><div class="card-body"><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p><ul class="tags">${p.tags.map(t => `<li>${esc(t)}</li>`).join('')}</ul><div class="card-links">${p.live ? `<a class="card-link" href="${p.live}">Live demo</a>` : ''}${p.code ? `<a class="card-link" href="${p.code}">Source code</a>` : ''}</div></div></article>`).join('');
const c = CONFIG.contact;
$('#contact-info').innerHTML = [['✉', 'Email', c.email, 'mailto:' + c.email], ['📍', 'Location', c.location], ['⌥', 'GitHub', c.github.replace('https://', ''), c.github], ['in', 'LinkedIn', c.linkedin.replace('https://', ''), c.linkedin]]
  .map(([i, l, v, h]) => `<${h ? `a href="${h}"` : 'div'} class="spot"><span class="ico">${i}</span><span><small>${l}</small>${esc(v)}</span></${h ? 'a' : 'div'}>`).join('');

/* 4. HERO: split-letter name + typing roles */
const h1 = $('.split');
h1.innerHTML = [...h1.dataset.text].map((ch, i) => ch === ' ' ? ' ' : `<span class="ch" style="--i:${i}">${ch}</span>`).join('');
h1.setAttribute('aria-label', h1.dataset.text);
const typed = $('#typed'); let ri = 0, ci = 0, del = false;
(function type() {
  const w = CONFIG.roles[ri]; typed.textContent = w.slice(0, ci);
  if (!del && ci < w.length) { ci++; return setTimeout(type, 90); }
  if (!del) { del = true; return setTimeout(type, 1400); }
  if (ci > 0) { ci--; return setTimeout(type, 45); }
  del = false; ri = (ri + 1) % CONFIG.roles.length; setTimeout(type, 300);
})();
if (reduced) typed.textContent = CONFIG.roles[0];

/* 5. CUSTOM CURSOR (fine pointers only) */
if (matchMedia('(pointer: fine)').matches && !reduced) {
  root.classList.add('has-cursor');
  const dot = $('.cursor-dot'), ring = $('.cursor-ring');
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px,${my}px)`; });
  (function loop() { rx += (mx - rx) * .16; ry += (my - ry) * .16; ring.style.transform = `translate(${rx}px,${ry}px)`; requestAnimationFrame(loop); })();
  document.addEventListener('mouseover', e => ring.classList.toggle('hover', !!e.target.closest('a,button,input,textarea,.spot,.tech')));
  addEventListener('mousedown', () => ring.classList.add('down'));
  addEventListener('mouseup', () => ring.classList.remove('down'));
}

/* 6. SCROLL: progress bar, header border, steps line, spy */
const header = $('.header'), progress = $('#progress'), steps = $('#steps'), fill = $('#steps-fill');
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  header.classList.toggle('scrolled', scrollY > 10);
  const r = steps.getBoundingClientRect(), mid = innerHeight * .55;
  fill.style.height = Math.max(0, Math.min(r.height, mid - r.top)) + 'px';
}
addEventListener('scroll', onScroll, { passive: true }); onScroll();

const countUp = (el, to) => { // animates 00 -> 01, 02, 03
  if (reduced || el.dataset.done) { el.textContent = '0' + to; return; }
  el.dataset.done = 1; let n = 0;
  const t = setInterval(() => { el.textContent = '0' + (++n); if (n >= to) clearInterval(t); }, 220);
};
const stepObs = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('active'); countUp($('b', e.target), +$('b', e.target).dataset.n);
}), { rootMargin: '-35% 0px -45% 0px' });
$$('.step').forEach(s => stepObs.observe(s));

const revealObs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
}), { threshold: .15 });
$$('.reveal').forEach(el => revealObs.observe(el));

const spy = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  $$('.nav-links a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach(s => spy.observe(s));

/* 7. POINTER EFFECTS: card spotlight, magnetic buttons, 3D photo tilt */
document.addEventListener('mousemove', e => {
  const s = e.target.closest('.spot'); if (!s) return;
  const r = s.getBoundingClientRect(); s.style.setProperty('--mx', e.clientX - r.left + 'px'); s.style.setProperty('--my', e.clientY - r.top + 'px');
});
if (!reduced) {
  $$('.magnetic').forEach(b => {
    b.addEventListener('mousemove', e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .22}px,${(e.clientY - r.top - r.height / 2) * .35}px)`; });
    b.addEventListener('mouseleave', () => b.style.transform = '');
  });
  const stage = $('#photo-stage'), pimg = $('img', stage);
  stage.addEventListener('mousemove', e => {
    const r = stage.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    stage.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
    pimg.style.transform = `translateZ(40px) translate(${x * -14}px,${y * -10}px) scale(1.04)`;
  });
  stage.addEventListener('mouseleave', () => { stage.style.transform = ''; pimg.style.transform = ''; });
}

/* 8. DIPLOMA LIGHTBOX */
const lb = $('#lightbox');
$('#diploma-btn').addEventListener('click', () => {
  const img = $('#diploma-img'); if (!img) return;
  $('#lb-img').src = img.src; lb.showModal();
});
$('#lb-close').addEventListener('click', () => lb.close());
lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });

/* 9. CONTACT FORM (validates, then opens the visitor's email app) */
const form = $('#contact-form'), status = $('#form-status');
const rules = {
  name: v => v.trim().length >= 2 || 'Enter your name.',
  email: v => /^\S+@\S+\.\S+$/.test(v) || 'Enter a valid email address.',
  message: v => v.trim().length >= 10 || 'Write at least 10 characters.'
};
form.addEventListener('submit', e => {
  e.preventDefault(); let ok = true;
  for (const [f, check] of Object.entries(rules)) {
    const input = form.elements[f], res = check(input.value);
    $('#' + f + '-error').textContent = res === true ? '' : res;
    input.setAttribute('aria-invalid', res !== true); if (res !== true) ok = false;
  }
  if (!ok) { status.textContent = ''; return; }
  const d = new FormData(form);
  location.href = `mailto:${CONFIG.contact.email}?subject=${encodeURIComponent('Portfolio message from ' + d.get('name'))}&body=${encodeURIComponent(d.get('message') + '\n\nReply to: ' + d.get('email'))}`;
  status.textContent = 'Opening your email app. To receive messages directly, connect a service like Formspree.';
  form.reset();
});

