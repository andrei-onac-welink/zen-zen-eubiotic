const backToTop = document.querySelector('[data-back-to-top]');

if (backToTop) {
  const scrollThreshold = 240;

  const updateBackToTop = () => {
    const isVisible = window.scrollY > scrollThreshold;

    backToTop.setAttribute('aria-hidden', (!isVisible).toString());
    backToTop.tabIndex = isVisible ? 0 : -1;
    backToTop.style.opacity = isVisible ? '1' : '0';
    backToTop.style.transform = isVisible ? 'translateY(0)' : 'translateY(0.75rem)';
    backToTop.style.pointerEvents = isVisible ? 'auto' : 'none';
  };

  let isTicking = false;

  const handleScroll = () => {
    if (isTicking) return;

    isTicking = true;
    window.requestAnimationFrame(() => {
      updateBackToTop();
      isTicking = false;
    });
  };

  updateBackToTop();
  window.addEventListener('scroll', handleScroll, { passive: true });
}
