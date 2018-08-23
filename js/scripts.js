if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }).catch(function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
}

button = document.getElementById('bluetooth');

/** ações */
navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
        .then(device => { console.log('Funciona'); })
        .catch(error => { console.log(error); });