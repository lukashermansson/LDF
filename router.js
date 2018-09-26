//handle forward and backward buttons 
window.onpopstate = function(event) {
    event.preventDefault();
    //load the requested page
    loadPage(location.hash.split('#')[1]);
}

$(document).ready(function() {
    //get the requested page
    let pageQuery = window.location.hash.split('#')[1];
    
    //load the page the user is looking for
    loadPage(pageQuery);
});
function loadPage(page){
    //split the ?member=1 from the page request
    if(page != null){
        page = page.split("?")[0];
    }
    //load home if the page is home or not specified
    if(page == "home" || page == null){
        loadHome();
        //break execution to prevent multiple pages from being loaded
        return;
    }

    //load pressentation
    if(page == "presentation"){
        loadPressentation();
        //break execution to prevent multiple pages from being loaded
        return;
    }
    //load load contact
    if(page == "kontakt"){
        loadContactPage();
        //break execution to prevent multiple pages from being loaded
        return;
    }
    //if no other page was loaded load the 404 page
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

