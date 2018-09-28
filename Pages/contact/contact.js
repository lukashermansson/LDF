$(document).ready(function () {

    //register event handlers
    $("#ContactSubmit").click(submit);


    $( "#fname" ).keyup({ field: "fname" },keyupValidator);
    $( "#telenr" ).keyup({ field: "telenr" },keyupValidator);
    $( "#email" ).keyup({ field: "email" },keyupValidator);
    $( "#message" ).keyup({ field: "message" },keyupValidator);


    //load local storage 
    let contactString = localStorage.getItem("contact");

    if(contactString != null){
        let contact =  JSON.parse(contactString);
        $( "#fname" )[0].value = contact.fname;
        $( "#telenr" )[0].value = contact.telnr;
        $( "#email" )[0].value = contact.email;
        $( "#message" )[0].value = contact.message;
    }


    //validate all 
    fnameValidator();
    telnrValidator();
    emailValidator();
});

function submit() {
}

function keyupValidator(event) {
    let field = event.data.field;

    var contact = new Object();
    
    contact.fname = $( "#fname" )[0].value;
    contact.telnr = $( "#telenr" )[0].value;
    contact.email = $( "#email" )[0].value;
    contact.message = $( "#message" )[0].value;

    localStorage.setItem("contact", JSON.stringify(contact));


    if(field == "fname"){
        fnameValidator();
        
    }
    if(field == "telenr"){
        telnrValidator();
           
    }
    if(field == "email"){
        emailValidator();
          
    }
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