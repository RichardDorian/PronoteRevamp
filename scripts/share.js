// Checking if Share API is supported
if (!'share' in navigator) {
  document
    .querySelectorAll('[data-share]')
    .forEach((element) => element.remove());
  console.warn('Share API is not supported, removing share buttons');
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
