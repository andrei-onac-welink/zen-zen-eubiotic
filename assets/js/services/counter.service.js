import { CountUp } from 'countup.js';

const counters = document.querySelectorAll('[data-countup-end]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  counters.forEach((counter, index) => {
    const endValue = Number(counter.dataset.countupEnd);

    if (!Number.isFinite(endValue)) return;

    const prefix = counter.dataset.countupPrefix ?? '';
    const suffix = counter.dataset.countupSuffix ?? '';
    const countUp = new CountUp(counter, endValue, {
      autoAnimate: true,
      autoAnimateDelay: Number(counter.dataset.countupDelay ?? index * 100),
      autoAnimateOnce: true,
      duration: Number(counter.dataset.countupDuration ?? 2.5),
      prefix,
      suffix,
      useGrouping: false,
    });

    if (countUp.error) counter.textContent = `${prefix}${endValue}${suffix}`;
  });
}
