$("#submit-button").on("click", function () {

    var city = "charlotte"//$("#city-input");
    var state = "north carolina"//$("#state-input");
    var queryurl = "https:api.openbrewerydb.org/breweries?by_city=" + city + "&by_state=" + state;
console.log(queryurl)

});