const initAnimatedHeadlines = () => {
  const headlines = document.querySelectorAll('[data-animated-underline]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!headlines.length) {
    return;
  }

  const animateHeadline = headline => {
    headline.dataset.animation = 'draw';

    window.setTimeout(() => {
      headline.dataset.animation = 'hide';

      window.setTimeout(() => {
        delete headline.dataset.animation;
        window.requestAnimationFrame(() => animateHeadline(headline));
      }, 400);
    }, 9200);
  };

  if (prefersReducedMotion) {
    headlines.forEach(headline => {
      headline.dataset.animation = 'draw';
    });
    return;
  }

  if (!('IntersectionObserver' in window)) {
    headlines.forEach(animateHeadline);
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      animateHeadline(entry.target);
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.35,
  });

  headlines.forEach(headline => observer.observe(headline));
};

document.addEventListener('DOMContentLoaded', initAnimatedHeadlines);
