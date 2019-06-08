
//Initial array of TV Shows
var shows = [
    "The Golden Girls",
    "The OC",
    "The Real Housewives of Beverly Hills",
    "Vanderpump Rules",
    "Friends",
    "Happy Endings",
    "New Girl",
    "Dawson's Creek"
];

// Function that adds buttons for displaying tv show gifs
function renderButtons() {

$("#buttons-view").empty();

for (var i = 0; i < shows.length; i++) {
    var a = $("<button>");

    a.addClass("show");

    a.attr("data-name", shows[i]);

    a.text(shows[i]);

    $("#buttons-view").append(a);
    }
}

$("#add-show").on("click", function(event) {

    event.preventDefault();

    var show = $("#show-input").val().trim();

    shows.push(show);

    renderButtons();

});



renderButtons();



















var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=M75U0dUp7eywWZmYWj7yzMumhR2B0YZo";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response) {
        console.log(response);
    });