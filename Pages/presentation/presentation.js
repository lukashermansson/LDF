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


    renderGithub();
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


function renderGithub(){
    let repositoriesDiv = $("<div class='repositories'></div>");
    let fordjupning = $("<h2>Vi fördjupar oss nu innom</h2>");
    repositoriesDiv.append(fordjupning);
    $("#presentation").append(repositoriesDiv);
    $.getJSON( "https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc", function( data ) {
        let allRepos = data.items;
        let repos = allRepos.slice(0, 5);  
    
        $.each(repos, function( index, value ) {
            let container = $("<div class='repo gitHubItem'></div>");
            let ownerName = $("<span class='RepoOwnerName'><a href='http://github.com/" + value.owner.login + "'>" + value.owner.login + "</a></span>");
            container.append(ownerName);
            let repoName = $("<span class='RepoName'><a href='http://github.com/" + value.owner.login + "/" + value.name+ "'>" + value.name + "</a></span>");
            container.append(repoName);

            let stars = $("<span class='RepoStars'><i class='fas fa-star'></i>" + value.stargazers_count + "</span>");
            container.append(stars);
            let showMoreContent = $("<div class='showMoreContent'></div>");
            let button = $("<div class='button'>Visa mer</div>");
            button.click({div: showMoreContent, owner: value.owner.login,  repo: value.name}, loadContributers);
            container.append(button);
            
            container.append(showMoreContent);


            repositoriesDiv.append(container);
        });
        
        
    });
}

function loadContributers(event) {
    let div = event.data.div;
    let owner = event.data.owner;
    let repo = event.data.repo;

    if(div.children().length > 0){
        div.empty();
        return;
    }
    
    $.getJSON( "https://api.github.com/repos/" + owner + "/" + repo + "/stats/contributors", function( contributers ) {

        $.each(contributers, function( index, value ) {
            let contributor = $("<div class='contributor'></div>");
            contributor.append("<img src='" + value.author.avatar_url + "'/>");
            contributor.append("<h3>"+ value.author.login + "</h3>");
            div.append(contributor);
        }); 
        
    });
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