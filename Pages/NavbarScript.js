$(document).ready(function() {
    $('a[href="#home"]').click({page: "Pages/home.html", link: "#home"}, navBarItemKlicked)
    $('a[href="#presentation"]').click({page: "Pages/pressentation.html", link: "#presentation"}, navBarItemKlicked)
});

function navBarItemKlicked(event){
    event.preventDefault();
    let newPageURL = event.data.page;

    let link =  event.data.link;
    var url = window.location.href;
    let BeforeSearch = url.split("?")[0];
    window.history.pushState({}, document.title, BeforeSearch + link);


    console.log(link);
    
    $( "#content" ).load( newPageURL);
}