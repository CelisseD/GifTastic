
$(document).ready(function() {

//Initial array of TV starterButtons
var starterButtons = [
    "The Golden Girls",
    "The OC",
    "The Real Housewives of Beverly Hills",
    "Vanderpump Rules",
    "Friends",
    "Happy Endings",
    "New Girl",
    "Dawson's Creek"
];

// Function that adds buttons for displaying tv userInput gifs
function renderButtons() {

$("#buttons-view").empty();

for (var i = 0; i < starterButtons.length; i++) {
    var a = $("<button>");

    a.addClass("userInput");

    a.attr("data-name", starterButtons[i]);

    a.text(starterButtons[i]);

    $("#buttons-view").append(a);
    }
}

$("#add-show").on("click", function(event) {

    event.preventDefault();

    var userInput = $("#show-input").val().trim();

    starterButtons.push(userInput);

    renderButtons();

});



renderButtons();


// Function to search and display gifs
function displayGifs(){

    $("#gifs-view").empty();


    // GIPHY API Info
    var APIKey = "M75U0dUp7eywWZmYWj7yzMumhR2B0YZo";
    var input = $(this).attr("userInput");
    var limit = 10;

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&limit=" + limit + "&api_key=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    });

    

}













var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=M75U0dUp7eywWZmYWj7yzMumhR2B0YZo";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response) {
        console.log(response);
    });


})