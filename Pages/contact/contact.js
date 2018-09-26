$(document).ready(function () {
    $("#ContactSubmit").click(submit);


    $( "#fname" ).keyup(fnameValidator);
    $( "#telenr" ).keyup(telnrValidator);
});

function submit() {
}

function fnameValidator() {
    let fname = $("#fname");

    let value = fname[0].value;
    fname.removeClass("invalid");
    if(value == null){
        fname.addClass("invalid");
    }
    if(value.length < 2){
        fname.addClass("invalid")
        
    }
}
function telnrValidator() {
    let telnr = $("#telenr");

    let value = telnr[0].value;
    telnr.removeClass("invalid");
    if(value == null){
        telnr.addClass("invalid");
        
    }
    if(isNaN(value)){
        telnr.addClass("invalid");
    }
    if(value.length <= 8){
        telnr.addClass("invalid");
    }
    if(value.length >= 10){
        telnr.addClass("invalid");
    }
}