import AOS from 'aos';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 2500,
    easing: 'ease-out-quart',
    once: true,
  });
});

window.addEventListener('load', () => {
  AOS.refreshHard();
});
