$(document).ready(function() {
    $('a[href="#home"]').click({page: "Pages/home/home.html", link: "#home"}, navBarItemKlicked);
    $('a[href="#presentation"]').click({page: "Pages/presentation/presentation.html", link: "#presentation"}, navBarItemKlicked);
    $('a[href="#kontakt"]').click({page: "Pages/contact/contact.html", link: "#kontakt"}, navBarItemKlicked);
});

function navBarItemKlicked(event){
    event.preventDefault();
    let newPageURL = event.data.page;

    let link =  event.data.link;
    var url = window.location.href;
    let BeforeSearch = url.split("?")[0];
    BeforeSearch = BeforeSearch.split("#")[0];

    window.history.pushState({}, document.title, BeforeSearch + link);


    $( "#content" ).load( newPageURL);
}