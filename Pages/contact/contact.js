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

    let contact = new Object();
    
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
    const regularExpresson = new RegExp("^[a-zA-ZåäöÅÄÖ-]{2,}[ ][a-zA-ZåäöÅÄÖ-]{2,}$");
    if(!regularExpresson.test(value)){
        fname.addClass("invalid")
        
    }
}
//validation for telefone number
function telnrValidator() {
    let telnr = $("#telenr");

    let value = telnr[0].value;
    telnr.removeClass("invalid");
    const regularExpresson = new RegExp("^[0][7][0-9][ ][0-9]{3}[ ][0-9]{2}[ ][0-9]{2}$");
    if(!regularExpresson.test(value)){
        telnr.addClass("invalid");
    }
}
//validation for email
function emailValidator() {
    let email = $("#email");

    let value = email[0].value;
    email.removeClass("invalid");
    
    const regularExpresson = new RegExp("^[a-zA-Z-0-9\.-]{1,}[@][a-zA-Z]{1,}[\.][a-zA-Z]{1,}$");
    if(!regularExpresson.test(value)){
        email.addClass("invalid");
        
    }
    
}
