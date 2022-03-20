if ('serviceWorker' in navigator) navigator.serviceWorker.register('worker.js');
else console.warn('Service workers not supported (not HTTPS or old browser?)');
