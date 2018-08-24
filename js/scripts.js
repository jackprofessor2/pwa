/** scripts.js */

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
            
            console.log(button);
        }).catch(function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

navigator.bluetooth.requestDevice({ filters: [{ name: 'Francois robot' }] })
.then(device => {
  // Set up event listener for when device gets disconnected.
  device.addEventListener('gattserverdisconnected', onDisconnected);

  // Attempts to connect to remote GATT Server.
  return device.gatt.connect();
})
.then(server => { /* ... */ })
.catch(error => { console.log(error); });

function onDisconnected(event) {
  let device = event.target;
  console.log('Device ' + device.name + ' is disconnected.');
}
