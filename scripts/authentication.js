/** Whether or not the user is authenticated */
const authenticated =
  localStorage.getItem('username') !== null &&
  localStorage.getItem('password') !== null;

// Show the authentication form if the user is not authenticated
const loginPage = document.getElementById('login-page');
if (!authenticated) {
  loginPage.style.display = 'block';
  console.debug('User is not authenticated, showing login page');
} else console.debug('User is already authenticated, skipping login page');

/**
 * Sign In using the given credentials
 * @param {SubmitEvent} event Event that triggered the function
 */
function signIn(event) {
  event.preventDefault();

  /** @type {string} */
  const username = document.getElementById('login-username').value;
  /** @type {string} */
  const password = document.getElementById('login-password').value;

  // Check if username is present
  if (!username) {
    return alert('Please enter a username');
  }

  // Check if password is present
  if (!password) {
    return alert('Please enter a password');
  }

  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  window.location.reload();
}
