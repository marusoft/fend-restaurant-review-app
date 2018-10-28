// Register service worker only if supported
// the script checks if the browser supports service workers
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js').then(function (reg) {
        console.log("Service Worker has been registered successfully!");
    }).catch((e) => {
        console.log("Couldn't register service worker... \n", e);
    });
}

/** Hijack fetch requests and respond accordingly */
self.addEventListener('fetch', function(event) {

    // Default behavior: respond with cached elements, if any, falling back to network.
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });