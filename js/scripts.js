/** scripts.js */
/*
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
*/
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', {scope: 'sw-test'})
    .then(function(registration) {
        // registration worked
        console.log('Registration succeeded.');
        
        button.onclick = function() {
            registration.update();
        }    
    }).catch(function(error) {
            // registration failed
            console.log('Registration failed with ' + error);
    });
};