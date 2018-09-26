$(document).ready(function () {

    //register event handlers
    $("#ContactSubmit").click(submit);


    $( "#fname" ).keyup(fnameValidator);
    $( "#telenr" ).keyup(telnrValidator);
    $( "#email" ).keyup(emailValidator);
});

function submit() {
}

//validation for name
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
//validation for telefone number
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
//validation for email
function emailValidator() {
    let email = $("#email");

    let value = email[0].value;
    email.removeClass("invalid");
    if(value == null){
        email.addClass("invalid");
        
    }
    if(!value.includes(".")){
        email.addClass("invalid");
        
    }
    if(!value.includes("@")){
        email.addClass("invalid");
        
    }
    
}