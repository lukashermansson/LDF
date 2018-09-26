

$(document).ready(function () {
    let audio = new Audio('https://upload.wikimedia.org/wikipedia/commons/6/68/Sv-Carl_von_Linn%C3%A9.ogg');
    $("#vonlinne").unbind( "click" );
    $("#vonlinne").click({ljud: audio}, klickadKnapp);
    

    audio.addEventListener("ended", function(){
        $("#linnebild").attr("src", "");
   });
});

function klickadKnapp(event){
    console.log("klickad");
    event.data.ljud.play();
    $("#linnebild").attr("src", "linne.jpg");
}


