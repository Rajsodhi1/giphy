$(function() {
    populate(searchArray, "search-input", "#buttons");
    console.log("page loaded")
});

var searchArray = ["Garnet", "Amethyst", "And Pearl", "And Steven!"];

function populate(searchArray, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();
    for(var i=0; i<searchArray.length; i++) {
        var button =$("<button>");
        button.addClass(classToAdd);
        button.attr("data-type", searchArray[i]);
        button.text(searchArray[i]);
        $(areaToAddTo).append(button);

    }
}