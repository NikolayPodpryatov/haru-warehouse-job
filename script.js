(() => {
  const year = document.getElementById('year');
  const form = document.getElementById('ya-form');
  const loader = document.getElementById('form-loading');

  if (year) year.textContent = new Date().getFullYear();

  const hideLoader = () => loader?.classList.add('is-hidden');

  if (form) {
    form.addEventListener('load', hideLoader, { once: true });
    window.setTimeout(hideLoader, 5000);
  }
})();
