import scrollSpy from 'simple-scrollspy';

document.addEventListener('DOMContentLoaded', () => {
  const tableOfContents = document.querySelector('[data-blog-toc]');
  const articleContent = document.querySelector('[data-blog-content]');

  if (!tableOfContents || !articleContent) {
    return;
  }

  const tocEntries = [...tableOfContents.querySelectorAll('a[href^="#"]')]
    .map((link) => ({
      heading: document.getElementById(link.getAttribute('href').slice(1)),
      link,
    }))
    .filter(({ heading }) => heading);

  if (!tocEntries.length) {
    return;
  }

  const trackingSections = tocEntries.map(({ link }, index) => {
    const section = document.createElement('span');
    section.id = `blog-scrollspy-${index}`;
    section.className = 'js-blog-scrollspy-section absolute left-0 block w-px';
    section.setAttribute('aria-hidden', 'true');
    section.style.position = 'absolute';
    section.style.left = '0';
    section.style.width = '1px';
    section.style.pointerEvents = 'none';
    document.body.append(section);

    link.dataset.scrollspyTarget = `#${section.id}`;

    return section;
  });

  const spy = scrollSpy(tableOfContents, {
    sectionClass: '.js-blog-scrollspy-section',
    menuActiveTarget: 'a[data-scrollspy-target]',
    hrefAttribute: 'data-scrollspy-target',
    activeClass: 'text-primary-500',
    offset: 240,
    smoothScroll: false,
  });

  const updateTrackingSections = () => {
    const headingPositions = tocEntries.map(
      ({ heading }) => heading.getBoundingClientRect().top + window.scrollY
    );
    const footer = document.querySelector('.site-footer');
    const contentEnd = footer
      ? footer.getBoundingClientRect().top + window.scrollY
      : document.documentElement.scrollHeight;

    trackingSections.forEach((section, index) => {
      const start = headingPositions[index];
      const end = headingPositions[index + 1] ?? contentEnd;

      section.style.top = `${start}px`;
      section.style.height = `${Math.max(end - start, 1)}px`;
    });

    spy.onScroll();
  };

  updateTrackingSections();
  window.addEventListener('load', updateTrackingSections, { once: true });
  window.addEventListener('resize', updateTrackingSections, { passive: true });

  if ('ResizeObserver' in window) {
    new ResizeObserver(updateTrackingSections).observe(articleContent);
  }
});
