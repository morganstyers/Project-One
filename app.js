
console.log("linked")

$(document).ready(function () {
  var reviewUrl = ""
  $("#getLocation").on("click", function getLocation() {
    
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    }

  });

  function showPosition(position) {
    var latCoord = position.coords.latitude;
    var longCoord = position.coords.longitude;
    console.log(latCoord);
    console.log(longCoord);

    var queryurl = "https://api.tomtom.com/search/2/categorySearch/company,brewery.json?key=Ab4s6zW0kUp03AlC2DusRDhwK6rkp5Ap&lat=" + latCoord + "&lon=" + longCoord + "&radius=32186&limit=5"
    $.ajax({
      url: queryurl,
      method: "GET"
    })
      .then(function (response) {
        // put into html
        for (var i = 0; i < response.results.length; i++) {
          var name = response.results[i].poi.name;
          var address = response.results[i].address.freeformAddress;
          var phone = response.results[i].poi.phone;
          var website = response.results[i].poi.url;
          var city = response.results[i].address.municipality;
          var state = response.results[i].address.countrySubdivision;


          console.log(address);
          console.log(name);
          console.log(phone);

          var newDiv = $("<div>");
          var newUl = $("<ul>");
          var newLi = $("<li>");

          newLi.html(address, name, phone);
          newUl.append(newLi);
          newDiv.append(newUl);

          $('#r').show();
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

          console.log(response);
          console.log(address);
          console.log(name);
          console.log(phone);
          console.log(city);
          console.log(state);

<<<<<<< HEAD
//pat review stuff 
          var queryurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/matches?name=" + name + "&address1=" + address + "&city=charlotte" + "&state=NC" + "&country=US"
=======

          var queryurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/matches?name=" + name + "&address1=" + address + "&city=" + city + "&state=" + state + "&country=US"
>>>>>>> 827e9304e7fc3a7eacfdff85f21336b1a8aa3a08
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
              for (var i = 0; i < response.businesses.length; i++) {
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
                    // for (var i = 0; i < response.reviews.length; i++) {
                    reviewUrl = response.reviews[0].url;
                    console.log("Yelp URL " + reviewUrl);

                    $("#review").on('click', function () {
                   
                      $(".response").hide();
                      $(".review").show();

                    });
                    var reviewLink = reviewUrl.link(reviewUrl)
                    var reviewDiv = $("<div class=review>");
                    var reviewUl = $("<ul>");
                    var reviewLi = $("<li>").html(name + "<br>" +reviewLink);
                    console.log(reviewUrl + "review")

                    reviewUl.append(reviewLi);
                    reviewDiv.append(reviewUl);

                    $("#r").append(reviewDiv)

                  });


              }

            });



          if (phone === null || phone === undefined || website === null || website === undefined) {
            phone = "";
            website = "";
          } else if (!website.includes("https://")) {
            website = "https://" + website
          }

          var breweryData = {
            name: name,
            address: address,
            phone: phone,
            website: website.link(website),
          };
          console.log("Address: " + breweryData.address);
          console.log(breweryData.name);
          console.log(breweryData.phone);
          console.log(breweryData);
          // console.log(city);
          // console.log(state);
          var newDiv = $("<div class=response>");
          var newUl = $("<ul>");
          var newLi = $("<li>").html(breweryData.name + "<br>" + breweryData.address + "<br>" + breweryData.phone + "<br>" + breweryData.website);

          // newLi.html(name);
          // newLi.html(address);
          // newLi.html(phone);

          newUl.append(newLi);
          newDiv.append(newUl);

          $("#r").append(newDiv);
        }
      });
  
