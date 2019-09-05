console.log("linked")
$(document).ready(function() {
    $("#results").hide();
    $("#MyModal").modal();
  });

$("#search").on("click", function () {
    event.preventDefault();
    $("#results").show();

    var city = $("#city-input");
    var state =$("#state-input");
    var queryurl = "https://api.openbrewerydb.org/breweries?by_city=" + city + "&by_state=" + state;
console.log(queryurl)
$.ajax({
    url: queryurl,
    method: "GET"
})

.then(function(response){
    var results = response;
    var answer = [];

    for (var i = 0; i < results.length; i++){
        // retrieve first lat/lon and push into array
       if (results[i].longitude === null || results[i].longitude === "") {
           i++
       } else {
            answer.push(results[i].longitude)
       }
       console.log(results[i].longitude)
       console.log(answer)
        // 
    }
   
})

});






