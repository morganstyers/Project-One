$(document).ready(function () {

  console.log("linked")

/*    var state = "”; 
   var city = "”;
  
  $("select”).change(function () { console.log(“selected”); state = $(“select option:selected”).text(); console.log(state); });
  
  $(“#search”).on(“click”, function () { event.preventDefault(); var city = “charlotte”//$(“#city-input”); var state = “north_carolina”//$(“#state-input”);
  
  var city = “charlotte”//$(“#city-input”); var state = “north_carolina”//$(“#state-input”); $(“#results”).show();
  
  city = $(“#city-input”); //state =$(“#state-input”); console.log($(“#state-input”).attr(“selected”)) var queryurl = “https://api.openbrewerydb.org/breweries?by_city=” + city + “&by_state=” + state;
  
  $.ajax({ url: queryurl, method: “GET” })
  
  .then(function (response) { var results = response; var longAnswer = []; var latAnswer = [];
  
  for (var i = 0; i < results.length; i++) 
  { // retrieve first lat/lon and push into array if (results[i].longitude === null || results[i].longitude === “”) { i++ } else { longAnswer.push(results[0].longitude); latAnswer.push(results[0].latitude); var queryurl = “https://api.tomtom.com/search/2/categorySearch/company,brewery.json?key=Ab4s6zW0kUp03AlC2DusRDhwK6rkp5Ap&lat=” + latAnswer + “&lon=” + longAnswer + “&radius=13094” $.ajax({ url: queryurl, method: “GET” }) .then(function (response) {
  
  }) }
  
  }
  
  }) $(“getLocation”).on(‘click’, function(){ $(“#MyModal”).modal(); }) });
  
  });  */

  $("#getLocation").on("click", function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {

    }
  })
  
  function showPosition(position) {
    var latCoord = position.coords.latitude; 
    var longCoord = position.coords.longitude;
    console.log(latCoord);
    console.log(longCoord);

    var queryurl = "https://api.tomtom.com/search/2/categorySearch/company,brewery.json?key=Ab4s6zW0kUp03AlC2DusRDhwK6rkp5Ap&lat=" + latCoord + "&lon=" + longCoord + "&radius=13094&limit=5"
    $.ajax({
        url: queryurl,
        method: "GET"
    }) 
    .then(function(response){
        // put into html
        for (var i = 0; i < response.results.length; i++) {

        var address = response.results[i].address.freeformAddress;
        var name = response.results[i].poi.name;
        var phone = response.results[i].poi.phone;
        console.log(address);
        console.log(name);
        console.log(phone);

        var newDiv = $("<div>");
        var newUl = $("<ul>");
        var newLi = $("<li>");

        newLi.html(address, name, phone);
        newUl.append(newLi);
        newDiv.append(newUl);

        $(".card-text").append(newDiv)

        console.log("logging brewery " + name);


     /*    var queryurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/matches?name=" + name + "&address1=" + address + "&city=charlotte" + "&state=NC" + "&country=US"
        console.log(queryurl)
        $.ajax({
            url: queryurl,
            method: "GET",
            "headers": {
                "Authorization": "Bearer 9EO74UpComrdvt4WzJLX9S6xhIZHAqqNiB4T6PaJBGWkMOKiVrGrJDBX7RHZx60BUzK2VrVgcL42klLPExym9hxFz5aYqpjfB0UJj3DLMWpRkhBuVXa4OtJ9dMN2XXYx",
            }
        })
            .then(function (response) {
                console.log(response);
                console.log(response.businesses.length);
            }); */

            var queryurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/matches?name=" + name + "&address1=" + address + "&city=charlotte" + "&state=NC" + "&country=US"
            console.log(queryurl)
            $.ajax({
                url: queryurl,
                method: "GET",
                "headers": {
                    "Authorization": "Bearer 9EO74UpComrdvt4WzJLX9S6xhIZHAqqNiB4T6PaJBGWkMOKiVrGrJDBX7RHZx60BUzK2VrVgcL42klLPExym9hxFz5aYqpjfB0UJj3DLMWpRkhBuVXa4OtJ9dMN2XXYx",
                }
            })
                .then(function (response) {
                    console.log(response);
                    console.log(response.businesses.length);
                    for (var i =0; i < response.businesses.length; i++) {
                      var id = response.businesses[i].id
                      console.log("yelp id" + id)

                      var queryurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/" + id + "/reviews"
                      console.log(queryurl)
                      $.ajax({
                          url: queryurl,
                          method: "GET",
                          "headers": {
                              "Authorization": "Bearer 9EO74UpComrdvt4WzJLX9S6xhIZHAqqNiB4T6PaJBGWkMOKiVrGrJDBX7RHZx60BUzK2VrVgcL42klLPExym9hxFz5aYqpjfB0UJj3DLMWpRkhBuVXa4OtJ9dMN2XXYx",
                          }
                      })
                          .then(function (response) {
                              console.log(response);
                              var reviewUrl = response.reviews[0].url;
                              console.log("Yelp URL " + reviewUrl);
                              
        
                          });
                    }
                });



        
        }
        

      });
    

  
  
};
});

