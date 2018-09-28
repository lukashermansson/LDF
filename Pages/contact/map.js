
$(document).ready(function() {
    
    var mymap = L.map('map').setView([59.254276, 15.2470413], 14);
    var marker = L.marker([59.254276, 15.2470413]).addTo(mymap);
    
    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibHVrYXNoZXJtYW5zc29uIiwiYSI6ImNqbWpodmtocTAwbDkza3A5YmE0bWV3NW8ifQ.aA46X07k_MpS0jIWUnUJ5g'
    }).addTo(mymap);

});
