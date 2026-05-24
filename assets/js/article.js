const nav = document.getElementById('main-nav');
const prog = document.querySelector('.progress');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    prog.style.width = pct + '%';
}, { passive: true });

const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
