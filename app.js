console.log("linked")

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

        if (phone === null || phone === undefined) {
            phone = "";
        }
        var breweryData = {
            name: name,
            address: address,
            phone: phone,
        }; 
        console.log("Address: " + breweryData.address);
        console.log(breweryData.name);
        console.log(breweryData.phone);
        console.log(breweryData);

        var newDiv = $("<div>");
        var newUl = $("<ul>");
        var newLi = $("<li>").html(breweryData.name + "<br>" + breweryData.address + "<br>" + breweryData.phone);
        
        // newLi.html(name);
        // newLi.html(address);
        // newLi.html(phone);

        newUl.append(newLi);
        newDiv.append(newUl);

        $(".card-body").append(newDiv)
        }

           

    });

}





