

$(document).ready(function () {
    //link to audio file to play
    let audio = new Audio('https://upload.wikimedia.org/wikipedia/commons/6/68/Sv-Carl_von_Linn%C3%A9.ogg');

    //unbind previus click handler in case it was bound earlier 
    $("#vonlinne").unbind( "click" );

    //pass data to function about what sound
    $("#vonlinne").click({ljud: audio}, klickadKnapp);
    
    //remove picture when playback is finnished 
    audio.addEventListener("ended", function(){
        $("#linnebild").attr("src", "");
   });
});

//click hanlder for life button
function klickadKnapp(event){
    event.data.ljud.play();
    //add the picture
    $("#linnebild").attr("src", "linne.jpg");
}


