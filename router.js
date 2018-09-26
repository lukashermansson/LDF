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
    if(page == "kontakt"){
        loadContactPage();
        return;
    }
    loadMissingPage();
}

function loadHeader(){
    $("header").remove();
    $("body").prepend("<header></header>");

    $( "header" ).load( "Pages/navigation/header.html" );
}
function loadHome() {
    loadHeader();
    $( "#content" ).load( "Pages/home/home.html" );
}
function loadMissingPage() {
    $( "#content" ).load( "Pages/404/404.html" );
}
function loadContactPage() {
    loadHeader();
    $( "#content" ).load( "Pages/contact/contact.html" );
}
function loadPressentation() {
    loadHeader();
    $( "#content" ).load( "Pages/presentation/presentation.html" );
}

window.onpopstate = function(event) {
    loadPage(location.hash.split('#')[1]);
}