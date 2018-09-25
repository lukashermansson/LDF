$(document).ready(function () {
    let urlParams = new URLSearchParams(window.location.search);
    let memberSearch = urlParams.get('member');
    //console.log(urlParams);
    if(memberSearch != null){
        loadMemberPage(memberSearch);
        return; 

    }

    //render the overall layout
    $.getJSON("Medlemmar.json", function( data ) {
        $.each(data.members, function (index, value){
            let medlemsruta = $("<div></div>");
            medlemsruta.append("<h2>" + value.name + "</h2>");
            let button = $("<div class='button'>Gå till sida</div>");
            button.click({"member": index}, buttonClicked)
            medlemsruta.append(button);
            
            $("#content").append(medlemsruta);
        });
    });
});

function buttonClicked(event){
    let member = event.data.member;
    //console.log(member);
    let URL = document.location;
    window.history.pushState( {} , '', URL + '?member=' + member );
    loadMemberPage(member);
}
function loadMemberPage(memberID){
    $.getJSON("Medlemmar.json", function( data ) {
        let member = data.members[memberID];
        //console.log(member);
        let memberDiv = $("<div id='member'></div>");
        memberDiv.append("<h2>" +member.name + "</h2>");
        memberDiv.append("<h2>" +member.about + "</h2>");

        let skillsDiv = $("<div id='skills'></div>");
        //console.log(member.skills.length);
        for(let i = 0; i < member.skills.length; i++){
            let skillDiv = $("<div id='skill'></div>");
            let keys = Object.keys(member.skills[i]);
            let skill = keys[0];
            let skillNameSpan = $("<span>" + skill + ":</span>");
            skillDiv.append(skillNameSpan);
            let circles = 10;
            for(let u = 0; u < Object.values(member.skills[i])[0]; u++){
                circles--;
                let dot = $("<span class='dot coloredDot'></span>");
                skillDiv.append(dot);
            }
            //console.log(circles);
            while(circles > 0){
                
                circles--;
                let dot = $("<span class='dot'></span>");
                skillDiv.append(dot);
            }
            skillsDiv.append(skillDiv);
        }
        memberDiv.append(skillsDiv);

        $("#content").html(memberDiv);
    });
}