$(document).ready(function () {
    $("#hamburger").click(clickHamburger);
});

function clickHamburger(){
    $("ul").toggleClass("closed");
}