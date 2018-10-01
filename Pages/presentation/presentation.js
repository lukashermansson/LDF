let slidePlaying = true;
let images = [];
$(document).ready(function () {

    //get specific user from url
    let params = (new URL(document.location)).searchParams;
    let memberSearch = params.get("member");
    //render individual user
    if(memberSearch != null){
        loadMemberPage(memberSearch);
        return; 

    }
   

    let slideShowPlayButton = $("<div id='slideShowPlayButton' class='button'>Växla spela</div>");
    slideShowPlayButton.click(toggleSlide);
    $("#presentation").prepend(slideShowPlayButton);
    let slideShow = $("<img id='slideShow' />");
    $("#presentation").prepend(slideShow);
    //if no user is selected render members
    $.getJSON("Medlemmar.json", function( data ) {
        
         //slideshow 
    
        //add image urls to array
        $.each(data.members, function (index, value){
            images.push(value.ImageURL);
        });
        slide();
        
        let medlemmar = $("<div id='medlemmar'></div>");
        $.each(data.members, function (index, value){
            let medlemsruta = $("<div></div>");
            let namn = $("<h2>" + value.name + "</h2>");
            namn.click({"member": index}, buttonClicked)
            medlemsruta.append(namn);
            
            medlemmar.append(medlemsruta)
            
        });
        $("#presentation").append(medlemmar);
    });

    $("#medlemsknapp").click(medlemsknapp);
});

function toggleSlide(){
    slidePlaying = !slidePlaying;
    slide();
}

function slide() {
    let slideElem = $("#slideShow");
    if(!slidePlaying){
        slideElem.css("display", "block");
       return;
       
    }
    let index = slideElem.attr("index");

    if(index == null){
        slideElem.attr("index", "0");
        index=0;
    }else{
        index++;
        slideElem.attr("index", index);
    }
    
    

    if(index > images.length -1){

    
        index = 0;
        slideElem.attr("index", index);
        
    }
    slideElem.fadeIn("slow").delay( 2000 ).fadeOut( "slow", function (){
            slide();
    });
    slideElem.attr("src", images[index]);

}

function medlemsknapp() {
    $("#medlemmar").toggleClass("shown");

}


//specific member button clicked
function buttonClicked(event){
    let member = event.data.member;

    var URL = document.location;
    window.history.pushState( {} , '', '?member=' + member + "#presentation");
    loadMemberPage(event.data.member);
}

//individual user load
function loadMemberPage(memberID){
    $.getJSON("Medlemmar.json", function( data ) {
        let member = data.members[memberID];
        //construct html
        let memberDiv = $("<div id='member'></div>");
        memberDiv.append("<img src='" + member.ImageURL + "'/>");
        memberDiv.append("<h2>" +member.name + "</h2>");
        memberDiv.append("<h2>" +member.about + "</h2>");

        let skillsDiv = $("<div id='skills'></div>");
        //loop over all the skills and create an div for it with information about that skill
        for(let i = 0; i < member.skills.length; i++){
            let skillDiv = $("<div id='skill'></div>");
            let keys = Object.keys(member.skills[i]);
            let skill = keys[0];
            let skillNameSpan = $("<span>" + skill + ":</span>");
            skillDiv.append(skillNameSpan);

            let percent = Object.values(member.skills[i])[0] + "%";
            let skillOuter = $("<span class='skillOuter'></span>");
            let skillInner = $("<span class='skillInner' data='" + percent + "'>" + percent + "</span>");

            //construct the html from the variables
            skillOuter.append(skillInner);
            
            skillDiv.append(skillOuter);
            skillsDiv.append(skillDiv);
            
        }
        //add all the skills to the specific member listing
        memberDiv.append(skillsDiv);

        //render the html
        $("#presentation").html(memberDiv);

        //update the width, this is needed for the css animation
        $(".skillInner").each(function () {
            $(this).css("width", $(this).attr("data"));
        });
    });
}