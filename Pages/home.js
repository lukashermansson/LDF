
let audio = new Audio('https://upload.wikimedia.org/wikipedia/commons/6/68/Sv-Carl_von_Linn%C3%A9.ogg');

$(document).ready(function () {
    $("#vonlinne").click(klickadKnapp);
    console.log("laddad");

    audio.addEventListener("ended", function(){
        $("#linnebild").attr("src", "");
   });
});

function klickadKnapp(){
    console.log("klickad");
    audio.play();
    $("#linnebild").attr("src", "linne.jpg");
}


