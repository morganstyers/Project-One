$(document).ready(function () {

console.log("linked")

var state ="";
var city ="";

$("select").change(function() {
    console.log("selected");
  state=$("select option:selected").text();
  console.log(state);
});

$("#search").on("click", function () {
    event.preventDefault();

    city = $("#city-input");
    //state =$("#state-input");
    console.log($("#state-input").attr("selected"))
    var queryurl = "https://api.openbrewerydb.org/breweries?by_city=" + city + "&by_state=" + state;
console.log(queryurl)
$.ajax({
    url: queryurl,
    method: "GET"
})

.then(function(response){
    var results = response;
    var longAnswer = [];
    var latAnswer = [];

    for (var i = 0; i < results.length; i++){
        // retrieve first lat/lon and push into array
       if (results[i].longitude === null || results[i].longitude === "") {
           i++
       } else {
            longAnswer.push(results[0].longitude)
            latAnswer.push(results[0].latitude) 
       }
     

    
    }
    //console.log(results[i].longitude)
    console.log("long answer" + longAnswer[0])
    console.log("lat answer" + latAnswer[0])
})

});

});
