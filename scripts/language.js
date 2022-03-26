/** @typedef {'en'|'fr'|'es'} Language */

const translations = {};

/**
 * Language object containing all the methods and fields to manipulate the app language
 */
const language = {
  /** @type {Language} */
  language: 'en',
  /**
   * Get user device language
   * @returns {Language} User device language (defaults to `en`)
   */
  getSystemLanguage() {
    let lang = 'en';
    ['en', 'fr', 'es'].forEach((l) => {
      if (navigator.language.includes(l)) lang = l;
    });
    return lang;
  },
  /**
   * Fetch a language file
   * @param {Language} lang Lang to fetch
   */
  async fetchTranslation(lang) {
    console.debug(`Fetching ${lang} translation...`);
    const file = await fetch(`/lang/${lang}.json`);
    const data = await file.json();
    translations[lang] = data;
  },
  /**
   * Translate the given element to the current language
   * @param {HTMLElement} element Element to translate
   */
  translateElement(element) {
    const key = element.getAttribute('data-lang');
    const property = key.split('-')[1];

    if (property === 'text')
      element.innerText = translations[language.language][key];
    else element.setAttribute(property, translations[language.language][key]);
  },
  /**
   * Translate all elements with the data-lang attribute
   */
  translatePage() {
    console.debug('Translating page...');
    document
      .querySelectorAll('[data-lang]')
      .forEach((e) => language.translateElement(e));
  },
  /**
   * Set a new language
   * @param {Language} lang Language to set
   * @param {boolean} saveToStorage Whether or not to save the language to local storage
   */
  async setLanguage(lang, saveToStorage = false) {
    if (!Object.prototype.hasOwnProperty.call(translations, lang))
      await language.fetchTranslation(lang);

    language.language = lang;
    document.getElementsByTagName('html')[0].lang = language.language;
    if (saveToStorage) localStorage.setItem('language', language.language);
    language.translatePage();
  },
  /**
   * Remove the saved language from the local storage
   */
  deleteSavedLanguage() {
    localStorage.removeItem('language');
    language.translatePage();
  },
};

language.language = language.getSystemLanguage();

// Get language from local storage
/** @type {Language} */
const overrideLanguage = localStorage.getItem('language');
if (overrideLanguage) language.language = overrideLanguage;
document.getElementsByTagName('html')[0].lang = language.language;

console.info('User language:', language.language);

(async () => {
  // Fetching default language
  await language.fetchTranslation(language.language);

  language.translatePage();
})();
