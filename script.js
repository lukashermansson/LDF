$(document).ready(function() {

    let pageQuery = window.location.hash.split('#')[1];
    loadPage(pageQuery);
});
function loadPage(page){
    if(page != null){
        page = page.split("?")[0];
    }
    if(page == "home" || page == null){
        loadHome();
        return;
    }

    if(page == "presentation"){
        loadPressentation();
        return;
    }
    loadMissingPage();
}

function loadHeader(){
    $("header").remove();
    $("body").prepend("<header></header>");

    $( "header" ).load( "Pages/header.html" );
}
function loadHome() {
    loadHeader();
    $( "#content" ).load( "Pages/home.html" );
}
function loadMissingPage() {
    $( "#content" ).load( "Pages/404.html" );
}

function loadPressentation() {
    loadHeader();
    $( "#content" ).load( "Pages/pressentation.html" );
}

window.onpopstate = function(event) {
    loadPage(location.hash.split('#')[1]);
}