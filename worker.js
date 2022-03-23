// Make the service worker update instantly
self.addEventListener('install', () => self.skipWaiting());

/**
 * Triggered when the fetch event is fired on the service worker
 * @param {FetchEvent} event Event that triggered the function
 */
function fetchCallback(event) {
  // console.log(event);
}

self.addEventListener('fetch', fetchCallback);

// self.addEventListener('push', () => {});
