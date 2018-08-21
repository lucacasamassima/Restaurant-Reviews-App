/* Verifies that browser provides service worker support
 * - if yes => register the service worker
 *		- if an error occurs => send an error message to the browser console
 * - if no => send an error message on the browser console
 */

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./swcontroller.js').then((registration) => {
		console.log('Service Worker registered successfully', registration);
	}).catch((error) => {
		console.log('Registration error: ', error);
	})
} else {
	console.log("Your browser doesn't support service workers.");
}