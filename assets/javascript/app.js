
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


// Function to search and display gifs
 function displayGifs(){

    $("#gifs-view").empty();

    // GIPHY API Info
    var APIKey = "M75U0dUp7eywWZmYWj7yzMumhR2B0YZo";
    var input = $(this).attr("data-name");
    var limit = 10;

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&limit=" + limit + "&api_key=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    //Stores all the retrieved data inside of an object called "response"

    .then(function(response) {
    // For loop to push images into #gifs-view div.

        console.log(queryURL);
        console.log(response);

        for (var i = 0; i < limit; i++) {

            var gifDiv = $("<div>");

            gifDiv.addClass("holder");

            var img = $("<img>");
            img.attr("src", response.data[i].images.original_still.url);
            img.attr("data-still", response.data[i].images.original_still.url);
            img.attr("data-animate", response.data[i].images.original.url);
            img.attr("data-state", "still");
            img.attr("class", "gif");

            gifDiv.append(img);
        
        }
    });
};

// Function that adds buttons for displaying userInput gifs
function renderButtons() {

    $("#buttons-view").empty();
    
    for (var i = 0; i < starterButtons.length; i++) {
        var a = $("<button>");
    
        a.addClass("userInput btn btn-outline-primary");
    
        a.attr("id", "input");
    
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
    
function imagePause() {
    
}
    
    
    renderButtons();

    $(document).on("click", "#input", displayGifs);

});
