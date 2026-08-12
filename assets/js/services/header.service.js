const header = document.querySelector('.site-header');

if (header) {
  const navigationToggle = header.querySelector('.nav-toggle');
  const navigationLabel = header.querySelector('[data-navigation-label]');
  const desktopMenus = header.querySelectorAll('[data-desktop-menu]');
  const desktopMedia = window.matchMedia('(min-width: 62rem)');

  const updateHeaderState = () => {
    header.dataset.scrolled = window.scrollY > 24 ? 'true' : 'false';
  };

  const updateNavigationState = () => {
    if (!navigationToggle) return;

    navigationToggle.setAttribute('aria-expanded', navigationToggle.checked.toString());

    if (navigationLabel) {
      navigationLabel.textContent = navigationToggle.checked ? 'Închide meniul' : 'Deschide meniul';
    }
  };

  const closeNavigation = () => {
    if (!navigationToggle?.checked) return;

    navigationToggle.checked = false;
    updateNavigationState();
  };

  header.querySelectorAll('summary a').forEach((link) => {
    link.addEventListener('click', (event) => event.stopPropagation());
  });

  desktopMenus.forEach((menu) => {
    menu.addEventListener('mouseenter', () => {
      if (desktopMedia.matches) menu.open = true;
    });

    menu.addEventListener('mouseleave', () => {
      if (desktopMedia.matches) menu.open = false;
    });
  });

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
  updateNavigationState();
  window.addEventListener('scroll', handleScroll, { passive: true });
  navigationToggle?.addEventListener('change', updateNavigationState);
  window.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;

    closeNavigation();
    desktopMenus.forEach((menu) => {
      menu.open = false;
    });
  });
  desktopMedia.addEventListener('change', (event) => {
    if (event.matches) closeNavigation();
  });
}
