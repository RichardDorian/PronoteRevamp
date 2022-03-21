/** @typedef {'light'|'dark'|'oled'} Theme */

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
  document.querySelector('html').setAttribute('data-theme', theme);

  /**
   * Convert the given rgb color to a hex color
   * @see https://stackoverflow.com/a/5624139
   * @param {number} r Red value
   * @param {number} g Green value
   * @param {number} b Blue value
   * @returns {string} Hex color
   */
  function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  const backgroundColor = getComputedStyle(document.body).getPropertyValue(
    'background-color'
  );

  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute(
      'content',
      rgbToHex(...backgroundColor.match(/\d+/g).map(Number))
    );

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
