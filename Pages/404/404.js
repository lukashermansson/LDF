$(document).ready(function() {
    //register click handler
    $('a[href="#home"]').click(klickHome);
});

// handle click
function klickHome(event){
    //prevent default to handle this ourselves
    event.preventDefault();
    //prepare url to be pused to the url bar stripping ?member=1 in the process 
    let url = window.location.href;
    let BeforeSearch = url.split("?")[0];
    BeforeSearch = BeforeSearch.split("#")[0];
    //push the url to the url bar and history to enable forwards and backwards handeling
    window.history.pushState({}, document.title, BeforeSearch + "#home");

    //load the homepage defined in router.js
    loadHome();
}