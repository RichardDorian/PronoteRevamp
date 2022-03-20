// TODO: Make separate file for translations
const translations = {
  en: {
    // Login page
    'login-text-description':
      'It’s like the default Pronote app, but cooler :D\nPlease login using your credentials:',
    'login-placeholder-username': 'Username',
    'login-placeholder-password': 'Password',
    'login-value-sign-in': 'Sign In',
    'login-text-credits': 'Coded and maintained\nby RichardDorian',
    // Main Menu
    'mainmenu-text-main-menu': 'Main Menu',
    'mainmenu-value-timetable': 'Timetable',
    'mainmenu-value-homework': 'Homework',
    'mainmenu-value-grades': 'Grades',
    'mainmenu-value-menu': 'Menu',
    'mainmenu-value-teachers': 'Teachers',
  },
  fr: {
    'login-text-description':
      'C’est comme l’application Pronote par défaut, mais plus cool :D\nVeuillez vous connecter avec vos identifiants:',
    'login-placeholder-username': 'Nom d’utilisateur',
    'login-placeholder-password': 'Mot de passe',
    'login-value-sign-in': 'Se connecter',
    'login-text-credits': 'Codé et maintenu\npar RichardDorian',
    'mainmenu-text-main-menu': 'Menu principal',
    'mainmenu-value-timetable': 'E.D.T.',
    'mainmenu-value-homework': 'Devoirs',
    'mainmenu-value-grades': 'Notes',
    'mainmenu-value-menu': 'Menu',
    'mainmenu-value-teachers': 'Enseignants',
  },
  es: {
    'login-text-description':
      'Es como la aplicación Pronote por defecto, pero más cool :D\nInicie sesión con sus credenciales:',
    'login-placeholder-username': 'Nombre de usuario',
    'login-placeholder-password': 'Contraseña',
    'login-value-sign-in': 'Iniciar sesión',
    'login-text-credits': 'Codificado y mantenido\npor RichardDorian',
    'mainmenu-text-main-menu': 'Menú principal',
    'mainmenu-value-timetable': 'Horario',
    'mainmenu-value-homework': 'Tareas',
    'mainmenu-value-grades': 'Notas',
    'mainmenu-value-menu': 'Menú',
    'mainmenu-value-teachers': 'Profesores',
  },
};

/** @typedef {'en'|'fr'|'es'} Language */

/** @type {Language} */
let language = 'en';

// Get user device language
['en', 'fr', 'es'].forEach((l) => {
  if (navigator.language.includes(l)) language = l;
});

// Get language from local storage
/** @type {Language} */
const overrideLanguage = localStorage.getItem('language');
if (overrideLanguage) language = overrideLanguage;
document.getElementsByTagName('html')[0].lang = language;

console.info('User language:', language);

/**
 * Set a new language
 * @param {Language} lang Language to set
 */
function setLanguage(lang) {
  language = lang;
  document.getElementsByTagName('html')[0].lang = language;
  localStorage.setItem('language', language);
  translatePage();
}

/**
 * Translate all elements with the data-lang attribute
 */
function translatePage() {
  console.debug('Translating page...');
  document.querySelectorAll('[data-lang]').forEach((e) => translateElement(e));
}

/**
 * Translate the given element to the current language
 * @param {HTMLElement} element Element to translate
 */
function translateElement(element) {
  const key = element.getAttribute('data-lang');
  const property = /\-[a-z]*\-/.exec(key)[0].replace(/\-/g, '');

  if (property === 'text') element.innerText = translations[language][key];
  else element.setAttribute(property, translations[language][key]);
}

translatePage();
