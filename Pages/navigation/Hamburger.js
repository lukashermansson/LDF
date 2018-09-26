$(document).ready(function () {
    //register click handler
    $("#hamburger").click(clickHamburger);
});

//cklick handler for the hamburger menu icon
function clickHamburger(){
    $("ul").toggleClass("closed");
}