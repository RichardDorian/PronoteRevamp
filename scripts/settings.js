/**
 * Settings object containing all the methods to manipulate the settings
 */
const settingsMutator = {
  /**
   * Apply the given theme to the page (used by settings page only)
   * @see applyTheme Method to call when you want to set the new theme, do not use this one
   * @param {'system'|Theme} theme Theme to apply
   */
  setTheme(theme) {
    switch (theme) {
      case 'system':
        // Remove saved theme + apply system default (without saving to local storage)
        deleteSavedTheme();
        applyTheme(getUserDeviceTheme());
        console.debug('Applying system default theme');
        break;
      default:
        // Normal theme handling
        applyTheme(theme, true);
        break;
    }
  },
  /**
   * Set the given language to the page (used by settings page only)
   * @see setLanguage Method to call when you want to set the new theme, do not use this one
   * @param {'system'|Language} lang Language to set
   */
  setLanguage(lang) {
    switch (lang) {
      case 'system':
        // Remove saved language + apply system default (without saving to local storage)
        language.deleteSavedLanguage();
        language.setLanguage(getSystemLanguage());
        break;

      default:
        // Normal language handling
        language.setLanguage(lang, true);
        break;
    }
  },
  /**
   * Toggle the share buttons visibility (hide/show them depending on the current state)
   */
  toggleShareButtonVisibility() {
    const savedState = localStorage.getItem('disableShareButtons') === 'true';
    const newState = !savedState;

    localStorage.setItem('disableShareButtons', newState);

    setShareButtonsVisibility(newState);
  },
  /**
   * Toggle the reduced motion mode (disables animations)
   */
  toggleReducedMotion() {
    const savedState = localStorage.getItem('reducedMotion') === 'true';
    const newState = !savedState;

    localStorage.setItem('reducedMotion', newState);
  },
};

// Loading all the settings

// Theme
if (savedTheme) {
  document
    .querySelector(
      `#settings-application-theme > select[name="settings-theme"] > option[value="${savedTheme}"]`
    )
    .setAttribute('selected', true);
}

// Language
if (overrideLanguage) {
  document
    .querySelector(
      `#settings-application-language > select[name="settings-language"] > option[value="${overrideLanguage}"]`
    )
    .setAttribute('selected', true);
}

// Share buttons
if (localStorage.getItem('disableShareButtons') === 'true') {
  document
    .querySelector('#settings-application-share-buttons > input[type=checkbox]')
    .setAttribute('checked', true);
  setShareButtonsVisibility(true);
}

// Force reduce mode if new api isn't available
if (!document.createDocumentTransition) {
  const element = document.querySelector(
    '#settings-application-reduced-motion > input[type=checkbox]'
  );
  element.setAttribute('checked', true);
  element.setAttribute('disabled', true);
}

if (localStorage.getItem('reducedMotion') === 'true') {
  document
    .querySelector(
      '#settings-application-reduced-motion > input[type=checkbox]'
    )
    .setAttribute('checked', true);
}
