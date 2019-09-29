$(function() {
    populate(searchArray, "search-input", "#buttons");
    console.log("page loaded")
});

var searchArray = ["Garnet", "Amethyst", "And Pearl", "And Steven!"];

function populate(searchArray, classToAdd, areaToAddTo) {
    //emoty the area otherwise we will end up adding copies or repeated buttons
    $(areaToAddTo).empty();
    for(var i=0; i<searchArray.length; i++) {
        var button =$("<button>");
        button.addClass(classToAdd);
        button.attr("data-type", searchArray[i]);
        button.text(searchArray[i]);
        $(areaToAddTo).append(button);

    }
}

$(document).on("click", ".search-input", function(){
    var type = $(this).data("type");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +type+ "&apikey=MdlvCuWIdcqkMC7LAAZjaV5GvzPGPTHt&limit=10";
    $.ajax({url:queryURL, method: "GET"})
        .done(function(response){
            for(var i=0; i<response.data.length; i++){
                var searchDiv = $("<div class ='search-term'>");
                var rating = response.data[i].rating;
                var ratingText = $("<p>").text("Rating: "+rating);
                var animated = response.data[i].images.fixed_height.url;
                var still = response.data[i].images.fixed_height_still.url;
                var image = $("<img>");
                image.attr("src", still);
                image.attr("data-still", still);
                image.attr("data-animated", animated);
                image.attr("data-state", "still");
                image.addClass("searchImage");
                searchDiv.append(ratingText);
                searchDiv.append(image);
                $("#searches").append(searchDiv);
            }
        })

})