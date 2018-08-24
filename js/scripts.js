/** scripts.js */
/*
button.addEventListener('pointerup', function(event) {
    navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
    .then(device => device.gatt.connect())
    .then(server => {
    // Getting Battery Service...
    return server.getPrimaryService('battery_service');
    })
    .then(service => {
    // Getting Battery Level Characteristic...
    return service.getCharacteristic('battery_level');
    })
    .then(characteristic => {
    // Reading Battery Level...
    return characteristic.readValue();
    })
    .then(value => {
    console.log('Battery percentage is ' + value.getUint8(0));
    })
    .catch(error => { console.log(error); });
});
*/

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js').then(function(registration) {
        // Registration was successful

        var button = document.getElementById('bluetooth');

        button.addEventListener('click', function(r) {
            window.alert('Evento disparado', r.responseText);
        });

        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }).catch(function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
}