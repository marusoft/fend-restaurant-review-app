// Register service worker only if supported
// the script checks if the browser supports service workers
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js').then(function (reg) {
        console.log("Service Worker has been registered successfully!");
    }).catch((e) => {
        console.log("Couldn't register service worker... \n", e);
    });
}
