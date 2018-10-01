$(document).ready(function() {
    $('a[href="#home"]').click({page: "Pages/home/home.html", link: "#home"}, navBarItemKlicked);
    $('a[href="#presentation"]').click({page: "Pages/presentation/presentation.html", link: "#presentation"}, navBarItemKlicked);
    $('a[href="#kontakt"]').click({page: "Pages/contact/contact.html", link: "#kontakt"}, navBarItemKlicked);
    $('a[href="#portfolio"]').click({page: "Pages/portfolio/portfolio.html", link: "#portfolio"}, navBarItemKlicked);
});

function navBarItemKlicked(event){
    //prevent the default browser action to handle this ourselves 
    event.preventDefault();

    //construct the new url, stripping ?member=1 in the process 
    let newPageURL = event.data.page;

    let link =  event.data.link;
    let url = window.location.href;
    let BeforeSearch = url.split("?")[0];
    BeforeSearch = BeforeSearch.split("#")[0];

    //updates the current url and enables functionality of back and forwards buttons
    window.history.pushState({}, document.title, BeforeSearch + link);

    //load html from file specified in the link data
    $( "#content" ).load( newPageURL);
}