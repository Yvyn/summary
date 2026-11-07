// Fades page blocks in as they scroll into view.
// Without JavaScript, or with reduced motion, everything is simply visible.
(function () {
  var targets = document.querySelectorAll(
    '.section-title, .info p, .xp > li, .skills, .chips, .education, .page-head, .project'
  );
  var motionOff = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (motionOff || !('IntersectionObserver' in window)) {
    document.documentElement.classList.remove('js');
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      observer.unobserve(el);
      el.classList.add('is-visible');
      // Hand the element back to its own hover styles once it has arrived
      setTimeout(function () {
        el.classList.remove('reveal', 'is-visible');
      }, 700);
    });
  }, { rootMargin: '0px 0px -8% 0px' });

  targets.forEach(function (el) {
    el.classList.add('reveal');
    observer.observe(el);
  });
})();
