const header = document.querySelector('.site-header');

if (header) {
  const updateHeaderState = () => {
    header.dataset.scrolled = window.scrollY > 24 ? 'true' : 'false';
  };

  let isTicking = false;

  const handleScroll = () => {
    if (isTicking) return;

    isTicking = true;
    window.requestAnimationFrame(() => {
      updateHeaderState();
      isTicking = false;
    });
  };

  updateHeaderState();
  window.addEventListener('scroll', handleScroll, { passive: true });
}
