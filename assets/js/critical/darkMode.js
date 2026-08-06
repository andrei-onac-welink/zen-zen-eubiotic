const THEME_STORAGE_KEY = 'theme';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';
const DARK_MODE_TOGGLES = '.js-dark-mode-toggle';
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const root = document.documentElement;

function getStoredTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

function setStoredTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {}
}

function resolveTheme() {
  const storedTheme = getStoredTheme();

  if (storedTheme === DARK_THEME || storedTheme === LIGHT_THEME) {
    return storedTheme;
  }

  return prefersDarkScheme.matches ? DARK_THEME : LIGHT_THEME;
}

function updateToggleInputs(theme) {
  const isLight = theme === LIGHT_THEME;

  document.querySelectorAll(DARK_MODE_TOGGLES).forEach((toggle) => {
    if (!(toggle instanceof HTMLInputElement)) return;

    toggle.checked = isLight;
    toggle.setAttribute('aria-checked', String(isLight));
  });
}

function applyTheme(theme) {
  root.style.colorScheme = theme;
}

function setTheme(theme) {
  applyTheme(theme);
  setStoredTheme(theme);
  updateToggleInputs(theme);
}

function initDarkModeToggle() {
  const currentTheme = resolveTheme();
  applyTheme(currentTheme);
  updateToggleInputs(currentTheme);

  document.querySelectorAll(DARK_MODE_TOGGLES).forEach((toggle) => {
    if (!(toggle instanceof HTMLInputElement)) return;

    toggle.addEventListener('change', () => {
      setTheme(toggle.checked ? LIGHT_THEME : DARK_THEME);
    });
  });
}

// Apply theme before CSS to prevent refresh flashes.
applyTheme(resolveTheme());

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDarkModeToggle);
} else {
  initDarkModeToggle();
}

if (typeof prefersDarkScheme.addEventListener === 'function') {
  prefersDarkScheme.addEventListener('change', (event) => {
    if (getStoredTheme() !== null) return;

    const theme = event.matches ? DARK_THEME : LIGHT_THEME;
    applyTheme(theme);
    updateToggleInputs(theme);
  });
}
