import url("https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js");
$(document).ready(function() {
//Preloader
preloaderFadeOutTime = 6000;
function hidePreloader() {
var preloader = $(&#39;.spinner-wrapper&#39;);
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});
