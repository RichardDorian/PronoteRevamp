/**
 * Show the given page to the screen while hiding the others
 * @param {HTMLElement} page HTMLElement of the page to show
 */
function showPage(page) {
  if (!page.classList.contains('page'))
    return console.error("Can't show a non-page element");

  for (const key in pages) {
    /** @type {HTMLElement} */
    const page = pages[key];
    page.style.display = 'none';
  }
  page.style.display = 'block';

  console.debug('Showing page', page);
}

const pages = {
  login: document.getElementById('login-page'),
  mainMenu: document.getElementById('main-menu-page'),
  settings: document.getElementById('settings-page'),
  timetable: document.getElementById('timetable-page'),
  homework: document.getElementById('homework-page'),
  grades: document.getElementById('grades-page'),
  menu: document.getElementById('menu-page'),
  teachers: document.getElementById('teachers-page'),
};

// Show the authentication form if the user is not authenticated
if (!authenticated) {
  const loginPage = document.getElementById('login-page');
  loginPage.style.display = 'block';
  console.debug('User is not authenticated, showing login page');
} else {
  showPage(pages.mainMenu);
}
