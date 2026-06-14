/* Home page behaviour: mobile menu, active-nav highlight, article filter + load more.
   (Reading time is rendered server-side into each card by Eleventy.) */

/* Mobile menu */
const hbg = document.getElementById('hbg');
function toggleMenu() {
    const open = document.getElementById('mob-nav').classList.toggle('open');
    hbg.classList.toggle('open', open);
    hbg.setAttribute('aria-expanded', open ? 'true' : 'false');
}
function closeMenu() {
    document.getElementById('mob-nav').classList.remove('open');
    hbg.classList.remove('open');
    hbg.setAttribute('aria-expanded', 'false');
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

/* Active nav highlight */
const navAs = document.querySelectorAll('.nav-links a:not(.cta)');
const secs  = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let cur = '';
    secs.forEach(s => { if (window.scrollY >= s.offsetTop - 100) cur = s.id; });
    navAs.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${cur}`);
    });
}, { passive: true });

/* Article filter + Load More */
const BATCH = 6;
const FILTER_MAP = {
    finance:  ['cat-econ', 'cat-comp', 'cat-red'],
    data:     ['cat-data', 'cat-amber'],
    product:  ['cat-prod', 'cat-agile', 'cat-purple', 'cat-green', 'cat-indigo', 'cat-fuchsia', 'cat-pink'],
    strategy: ['cat-cyan', 'cat-sky', 'cat-teal', 'cat-lime', 'cat-blue', 'cat-emerald'],
};
const filterBtns  = document.querySelectorAll('.art-filter-btn');
const artCards     = Array.from(document.querySelectorAll('.articles-grid .article-card'));
const loadMoreBtn  = document.getElementById('load-more-btn');
const loadMoreWrap = loadMoreBtn.parentElement;

let currentFilter = 'all';
let visibleCount  = BATCH;

function getFilteredCards() {
    if (currentFilter === 'all') return artCards;
    const cats = FILTER_MAP[currentFilter] || [];
    return artCards.filter(c => cats.some(cat => c.classList.contains(cat)));
}

function applyVisibility() {
    const filtered = getFilteredCards();
    artCards.forEach(card => {
        const idx = filtered.indexOf(card);
        if (idx === -1) {
            card.style.display = 'none';
            card.classList.remove('art-hidden');
        } else if (idx < visibleCount) {
            card.style.display = '';
            card.classList.remove('art-hidden');
        } else {
            card.style.display = '';
            card.classList.add('art-hidden');
        }
    });
    loadMoreWrap.style.display = filtered.length > visibleCount ? '' : 'none';
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        currentFilter = btn.dataset.filter;
        visibleCount  = BATCH;
        applyVisibility();
    });
});

loadMoreBtn.addEventListener('click', () => {
    visibleCount = Infinity;
    applyVisibility();
});

applyVisibility();
