import Swiper from 'swiper/bundle';
// Using bundle; no explicit modules import to avoid missing features

// Configuration for each swiper
const swiperConfigurations = [
  {
    selector: '.js-swiper',
    config: {
      enabled: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      parallax: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      grabCursor: true,
      pagination: { clickable: true },
      freeMode: false,
      focusableElements: 'input, select, option, textarea, video, label',
      a11y: {
        enabled: true,
        slideRole: null
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }
    },
  },
];

class SwiperSlider {
  constructor(selector, config) {
    this.selector = selector;
    this.config = config;
    this.initSwiper();
  }

  initSwiper() {
    const swiperContainers = document.querySelectorAll(this.selector);
    swiperContainers.forEach(swiperContainer => {
      // Prevent double-initialization
      if (swiperContainer.dataset.swiperInitialized === 'true' || swiperContainer.classList.contains('swiper-initialized')) {
        return;
      }

      const swiperParent = swiperContainer.closest('.swiper-container');
      if (!swiperParent) {
        return;
      }

      // Resolve controls from data attributes first, then fall back to parent queries
      const nextElSelector = swiperContainer.getAttribute('data-swiper-next');
      const prevElSelector = swiperContainer.getAttribute('data-swiper-prev');
      const paginationSelector = swiperContainer.getAttribute('data-swiper-pagination');
      const scrollbarSelector = swiperContainer.getAttribute('data-swiper-scrollbar');

      const nextEl = nextElSelector ? document.querySelector(nextElSelector) : (swiperParent.querySelector('.swiper-button-next') || swiperContainer.querySelector('.swiper-button-next'));
      const prevEl = prevElSelector ? document.querySelector(prevElSelector) : (swiperParent.querySelector('.swiper-button-prev') || swiperContainer.querySelector('.swiper-button-prev'));
      const paginationEl = paginationSelector ? document.querySelector(paginationSelector) : (swiperParent.querySelector('.swiper-pagination') || swiperContainer.querySelector('.swiper-pagination'));
      const scrollbarEl = scrollbarSelector ? document.querySelector(scrollbarSelector) : (swiperParent.querySelector('.swiper-scrollbar') || swiperContainer.querySelector('.swiper-scrollbar'));

      const config = { ...this.config };

      // Merge navigation configuration
      config.navigation = {
        ...(this.config.navigation || {}),
        ...(nextEl || prevEl ? { nextEl, prevEl } : {}),
      };

      // Merge pagination configuration
      config.pagination = {
        ...(this.config.pagination || {}),
        ...(paginationEl ? { el: paginationEl } : {}),
        // Ensure bullets are accessible by default
        renderBullet: function (index, className) {
          return `<button class="${className}" type="button" aria-label="Go to slide ${index + 1}"></button>`;
        },
      };

      // Merge scrollbar configuration
      if (scrollbarEl) {
        config.scrollbar = { ...(this.config.scrollbar || {}), el: scrollbarEl };
      }

      // Using swiper/bundle: do NOT pass modules list; bundle includes all modules
      new Swiper(swiperContainer, config);

      // Mark as initialized to avoid re-init
      swiperContainer.dataset.swiperInitialized = 'true';
    });
  }
}

// Initialize all Swipers with the common configuration
document.addEventListener('DOMContentLoaded', () => {
  swiperConfigurations.forEach(({ selector, config }) => {
    new SwiperSlider(selector, config);
  });
});
