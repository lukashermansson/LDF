$(document).ready(function() {
    $('a[href="#home"]').click(klickHome);
});
function klickHome(event){
    event.preventDefault();
    var url = window.location.href;
    let BeforeSearch = url.split("?")[0];
    BeforeSearch = BeforeSearch.split("#")[0];
    window.history.pushState({}, document.title, BeforeSearch + "#home");
    loadHome();
}