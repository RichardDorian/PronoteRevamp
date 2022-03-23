// Checking if Share API is supported
if (!'share' in navigator) {
  // Force removing all share buttons
  document
    .querySelectorAll('[data-share]')
    .forEach((element) => element.remove());

  // Disabling "Disable share" setting
  document
    .querySelector('#settings-application-share-buttons > input[type=checkbox]')
    .setAttribute('disabled', true);

  console.warn('Share API is not supported, removing share buttons');
}

/**
 * Set the new visibility of the share buttons
 * @param {boolean} hidden State to set
 */
function setShareButtonsVisibility(hidden) {
  document.querySelectorAll('[data-share]').forEach((element) => {
    if (hidden) return element.classList.add('hidden');
    element.classList.remove('hidden');
  });
}

/**
 * Share the application using the ShareAPI
 */
async function shareApplication() {
  const data = {
    title: 'Pronote Revamp',
    text: translations[language]['share-application-description'],
    url: 'https://pronote.ml/?source=share',
  };

  if (!navigator.canShare(data))
    return console.warn("Can't share data: ", data);

  await navigator
    .share(data)
    .catch((error) => console.error('Error sharing: ', error));
}
