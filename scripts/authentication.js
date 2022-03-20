/** Whether or not the user is authenticated */
const authenticated =
  localStorage.getItem('username') !== null &&
  localStorage.getItem('password') !== null;

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
