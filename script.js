$(document).ready(function() {

    let pageQuery = window.location.hash.split('#')[1];
    if(pageQuery != null){
        pageQuery = pageQuery.split("?")[0];
    }
    if(pageQuery == "home" || pageQuery == null){
        loadHome();
        return;
    }

    if(pageQuery == "presentation"){
        loadPressentation();
        return;
    }
    loadMissingPage();
});


function loadHeader(){
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