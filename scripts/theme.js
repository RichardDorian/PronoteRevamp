/** @typedef {'light'|'dark'} Theme */

/** @type {Theme} */
const savedTheme = localStorage.getItem('theme');

/** @type {Theme} */
let pageTheme = 'light'; // Light by default

// If the user device is in black mode
if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
)
  pageTheme = 'dark';

if (savedTheme) {
  console.info('Using user selected theme:', savedTheme);
  pageTheme = savedTheme;
} else console.info('Using system default theme if available:', pageTheme);

/**
 * Apply the given theme to the page
 * @param {Theme} theme Optional, theme to set
 * @param {boolean} saveToStorage Whether or not to save the theme to local storage
 */
function applyTheme(theme = pageTheme, saveToStorage = false) {
  console.debug('Applying theme:', theme);
  document.getElementsByTagName('html')[0].setAttribute('data-theme', theme);
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute('content', theme === 'light' ? '#ffffff' : '#000000');

  if (saveToStorage) localStorage.setItem('theme', theme);
}

/**
 * Remove the saved theme from the local storage
 */
function deleteSavedTheme() {
  localStorage.removeItem('theme');
  applyTheme();
}

applyTheme();
