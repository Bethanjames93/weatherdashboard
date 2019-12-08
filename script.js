$(document).ready(function() {
    $("#submit-button").on("click", function() {
        var submitValue = $("#submit-value").val();

        $("#submit-value").val("");

        searchWeather(submitValue);
    });

    function searchWeather(submitValue) {
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + submitValue,
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            console.log(response);
      
            var place = $("<h2>").addClass("card-title").text(response.place);
            var card = $("<div>").addClass("card");
            var wind = $("<p>").addClass("card-text").text("Wind Speed:" + response.wind.speed + " MPH");
            var humid = $("<p>").addClass("card-text").text("Humidity: " + response.main.humidity + "%");
            var temp = $("<p>").addClass("card-text").text("Temperature: " + response.main.temp + "C");
            var cardBody = $("<div>").addClass("card-body");
            var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png");

            place.append(img);
            cardBody.append(place, wind, humid, temp);
            card.append(cardBody);
          });
    }
});