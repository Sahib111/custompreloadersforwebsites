$(document).ready(function() {
//Preloader
preloaderFadeOutTime = 2000;
function hidePreloader() {
var preloader = $(&#39;.spinner-wrapper&#39;);
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});
