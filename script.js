$(document).ready(function() {

    let pageQuery = window.location.hash.split('#')[1];
    if(pageQuery == "home" || pageQuery == null){
        loadHome();
    }

    if(pageQuery == "pressentation"){
        loadPressentation();
    }
});


function loadHeader(){
    $("body").prepend("<header></header>");

    $( "header" ).load( "Pages/header.html" );
}
function loadHome() {
    loadHeader();
    $( "#content" ).load( "Pages/home.html" );
}

function loadPressentation() {
    loadHeader();
    $( "#content" ).load( "Pages/pressentation.html" );
}