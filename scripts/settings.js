/**
 * Settings object containing all the methods to manipulate the settings
 */
const settingsMutator = {
  /**
   * Apply the given theme to the page (used by settings page only)
   * @see applyTheme Method to call when you want to set the new theme, do not use this one
   * @param {'system'|Theme} theme Theme to apply
   */
  setTheme: (theme) => {
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
        console.debug('Applying theme:', theme);
        break;
    }
  },
  /**
   * Set the given language to the page (used by settings page only)
   * @see setLanguage Method to call when you want to set the new theme, do not use this one
   * @param {'system'|Language} language Language to set
   */
  setLanguage: (language) => {
    switch (language) {
      case 'system':
        // Remove saved language + apply system default (without saving to local storage)
        deleteSavedLanguage();
        setLanguage(getSystemLanguage());
        break;

      default:
        // Normal language handling
        setLanguage(language, true);
        break;
    }
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
