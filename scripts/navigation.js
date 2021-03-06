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

/**
 * Show the given page to the screen while hiding the others
 * @param {HTMLElement} page HTMLElement of the page to show
 * @param {boolean} addToHistory Add new page to history
 * @param {boolean} transition Whether or not to display the transition
 */
function showPage(page, addToHistory = true, transition = true) {
  if (!page.classList.contains('page'))
    return console.error("Can't show a non-page element");

  /**
   * Update the DOM
   */
  function updateDOM() {
    for (const key in pages)
      if (Object.hasOwnProperty.call(pages, key))
        pages[key].style.display = 'none';

    page.style.display = 'block';

    // Handling back button
    if (addToHistory)
      window.history.pushState(
        {},
        '',
        page.id.includes('main-menu-page')
          ? '/?page=mainMenu'
          : `/?page=${page.id.replace('-page', '')}`
      );

    console.debug('Showing page', page);
  }

  // Start the transition (since it's a very new API we need to make sure it exists in the user's browser)
  if (
    document.createDocumentTransition &&
    transition &&
    localStorage.getItem('reducedMotion') !== 'true'
  ) {
    const transition = document.createDocumentTransition();
    transition
      .start(() => updateDOM())
      .then(() => {
        // Using then instead of the async/await syntax because it's better if the showPage function is synchronous
        if (page.id === 'main-menu-page')
          document
            .querySelector('html')
            .setAttribute('data-transition-type', 'forward');
        else
          document
            .querySelector('html')
            .setAttribute('data-transition-type', 'backward');
      });
  } else updateDOM();
}

// Show the authentication form if the user is not authenticated
if (!authenticated) {
  const loginPage = document.getElementById('login-page');
  loginPage.style.display = 'block';
  console.debug('User is not authenticated, showing login page');
} else {
  showPage(pages.mainMenu, false, false);
}

/**
 * Show the page corresponding to the current URL query
 * @param {boolean} addToHistory Add new page to history
 */
function showQueryPage(addToHistory = true) {
  const parsedQuery = new URLSearchParams(window.location.search);
  const pageQuery = parsedQuery.get('page');
  if (pageQuery && authenticated) {
    const page = pages[pageQuery];
    if (page) showPage(page, addToHistory, false);
    else console.warn('Unknown page query', pageQuery);
  } else if (authenticated) showPage(pages.mainMenu, false, false);
}

// Show screen corresponding to the query string
// Not adding to history by default because the browser already do it for us
showQueryPage(false);

/**
 * Triggered when user is pressing the back button while without leaving the app
 */
window.onpopstate = () => {
  showQueryPage(false);
};
