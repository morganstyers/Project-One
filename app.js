console.log("linked")

$("submit-button").on("click", function () {
    event.preventDefault();
    var city = "charlotte"//$("#city-input");
    var state = "north_carolina"//$("#state-input");
    var queryurl = "https://api.openbrewerydb.org/breweries?by_city=" + city + "&by_state=" + state;
console.log(queryurl)
.ajax({
    url: queryurl,
    method: "GET"
})

.then(function(response){
    var results = response;
    for (var i = 0; i < results.length; i++){
        // retrieve first lat/lon and return into variable
       if (results.longitude === null || results.longitude === "") {
           i++
       } else {
           return(i)
       }
        // 
    }
})
});


