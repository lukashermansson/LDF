$(document).ready(function() {
    $('a[href="#home"]').click(klickHome);
});
function klickHome(event){
    event.preventDefault();
    loadHome();
}