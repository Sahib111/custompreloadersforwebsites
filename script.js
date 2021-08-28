document.body.classList.add('js-loading'); 
window.addEventListener("load", showPage); 
function showPage() {document.body.classList.remove('js-loading'); 
}

$(window).load(function() { 
$('.preloader').fadeOut("slow");
};
