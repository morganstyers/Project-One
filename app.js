console.log("linked")

$("#start").on("click", function () {
    event.preventDefault();
    var city = "charlotte"//$("#city-input");
    var state = "north_carolina"//$("#state-input");
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


