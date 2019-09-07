console.log("linked")
// $(document).ready(function() {
//     $("#results").hide();
//     $("#MyModal").modal();
//   });

// $("#search").on("click", function () {
//     event.preventDefault();
//     var city = "charlotte"//$("#city-input");
//     var state = "north_carolina"//$("#state-input");



//     var city = "charlotte"//$("#city-input");
//     var state = "north_carolina"//$("#state-input");
//     $("#results").show();

//     var city = $("#city-input");
//     var state =$("#state-input");
//     var queryurl = "https://api.openbrewerydb.org/breweries?by_city=" + city + "&by_state=" + state;

// $.ajax({
//     url: queryurl,
//     method: "GET"
// })

// .then(function(response){
//     var results = response;
//     var longAnswer = [];
//     var latAnswer = [];

//     for (var i = 0; i < results.length; i++){
//         // retrieve first lat/lon and push into array
//        if (results[i].longitude === null || results[i].longitude === "") {
//            i++
//        } else {
//             longAnswer.push(results[0].longitude);
//             latAnswer.push(results[0].latitude);
//             var queryurl = "https://api.tomtom.com/search/2/categorySearch/company,brewery.json?key=Ab4s6zW0kUp03AlC2DusRDhwK6rkp5Ap&lat=" + latAnswer + "&lon=" + longAnswer + "&radius=13094"
//             $.ajax({
//                 url: queryurl,
//                 method: "GET"
//             }) 
//             .then(function(response){

//             })
//        }
     

    
//     }

        //    // .then(function (response) {
        //         var results = response;
        //         var longAnswer = [];
        //         var latAnswer = [];

//     //console.log(results[i].longitude)
//     console.log("long answer" + longAnswer[0])
//     console.log("lat answer" + latAnswer[0])

// })

// });

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
        
        var name = response.results[i].poi.name;
        var address = response.results[i].address.freeformAddress;
        var phone = response.results[i].poi.phone;
        var website = response.results[i].poi.url;

        if (phone === null || phone === undefined || website === null || website === undefined) {
            phone = "";
            website = "";
        }
        var breweryData = {
            name: name,
            address: address,
            phone: phone,
            website: website.link("https://" + website),
        }; 
        console.log("Address: " + breweryData.address);
        console.log(breweryData.name);
        console.log(breweryData.phone);
        console.log(breweryData);

        var newDiv = $("<div>");
        var newUl = $("<ul>");
        var newLi = $("<li>").html(breweryData.name + "<br>" + breweryData.address + "<br>" + breweryData.phone + "<br>" + breweryData.website);
        
        // newLi.html(name);
        // newLi.html(address);
        // newLi.html(phone);

        newUl.append(newLi);
        newDiv.append(newUl);

        $(".card-body").append(newDiv)
        }

           

    });

}





