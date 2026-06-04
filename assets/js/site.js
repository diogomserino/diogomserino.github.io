/* Shared site behaviour for every page:
   - scroll progress bar (.progress)
   - sticky-nav shadow (toggles .scrolled on the page's <nav>)
   - fade-up reveal on scroll, with optional per-sibling stagger
     enabled via <body data-stagger="70">.
   Page-specific logic (mobile menu, article filter, reading time, …)
   stays inline on each page. */
(function () {
    var prog = document.querySelector('.progress');
    var nav  = document.querySelector('nav');

    if (prog || nav) {
        window.addEventListener('scroll', function () {
            var y = window.scrollY;
            if (nav) nav.classList.toggle('scrolled', y > 20);
            if (prog) {
                var h = document.documentElement.scrollHeight - window.innerHeight;
                prog.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
            }
        }, { passive: true });
    }

    var stagger = parseInt(document.body.getAttribute('data-stagger') || '0', 10);
    var els = document.querySelectorAll('.fade-up');
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
        els.forEach(function (el) { el.classList.add('in'); }); // no IO: just show
        return;
    }

    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
            if (!en.isIntersecting) return;
            var el = en.target;
            if (stagger) {
                var sibs = Array.prototype.slice.call(el.parentElement.querySelectorAll('.fade-up'));
                el.style.animationDelay = (sibs.indexOf(el) * stagger) + 'ms';
            }
            el.classList.add('in');
            io.unobserve(el);
        });
    }, { threshold: 0.06, rootMargin: '0px 0px -24px 0px' });

    els.forEach(function (el) { io.observe(el); });
})();
