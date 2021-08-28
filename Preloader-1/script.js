import url('https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js');
$(document).ready(function() {
//Preloader
preloaderFadeOutTime = 1000;
function hidePreloader() {
var preloader = $(&#39;.spinner-wrapper&#39;);
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});
