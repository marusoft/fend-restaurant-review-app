// Register service worker only if supported
// the script checks if the browser supports service workers
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js').then(function (reg) {
        console.log("Service Worker has been registered successfully!");
    }).catch((e) => {
        console.log("Couldn't register service worker... \n", e);
    });
}


// if('serviceWorker' in navigator){
//   window.addEventListener("load", () => {
//   navigator.serviceWorker.register('/Restaurant-Review-App/sw.js')
//   .then((res) => {
//     console.log(res);
//   console.log( "Registration successful");
// })
//   .catch((err) => {
//     console.log(err);
//     console.log("Registration not successful");
//   })
//    });
// }