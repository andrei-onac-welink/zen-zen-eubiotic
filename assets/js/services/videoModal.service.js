const modalTriggers = document.querySelectorAll('[data-video-modal-open]');

modalTriggers.forEach((trigger) => {
  const modalId = trigger.dataset.videoModalOpen;
  const modal = document.getElementById(modalId);

  if (!(modal instanceof HTMLDialogElement)) return;

  const video = modal.querySelector('video');
  const iframe = modal.querySelector('iframe[data-video-src]');
  const closeButton = modal.querySelector('[data-video-modal-close]');

  const closeModal = () => modal.close();

  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    modal.showModal();

    if (iframe) iframe.src = iframe.dataset.videoSrc;

    if (video) {
      video.play().catch(() => {
        // Browser autoplay policies may require the visitor to start playback.
      });
    }
  });

  closeButton?.addEventListener('click', closeModal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });

  modal.addEventListener('close', () => {
    if (iframe) iframe.removeAttribute('src');

    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  });
});
