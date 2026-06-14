/* About page — mobile menu */
const hbgAbout = document.getElementById('hbg-about');
function toggleMenuAbout() {
    const open = document.getElementById('mob-nav-about').classList.toggle('open');
    hbgAbout.setAttribute('aria-expanded', open ? 'true' : 'false');
}
function closeMenuAbout() {
    document.getElementById('mob-nav-about').classList.remove('open');
    hbgAbout.setAttribute('aria-expanded', 'false');
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenuAbout(); });
