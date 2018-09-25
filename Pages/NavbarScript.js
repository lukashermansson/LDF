$(document).ready(function() {
    $('a[href="#home"]').click({page: "Pages/home.html"}, navBarItemKlicked)
    $('a[href="#presentation"]').click({page: "Pages/pressentation.html"}, navBarItemKlicked)
});

function navBarItemKlicked(event){
    let newPageURL = event.data.page;
    //console.log(newPageURL);

    $( "#content" ).load( newPageURL);
}