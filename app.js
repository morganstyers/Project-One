console.log("linked")

$(document).ready(function() {
    
 

function beerRise() {
    $('.beer').addClass('fill');
    $('.head').addClass('active');
  }

    function pourBeer() {
    $('.pour').addClass('pouring');
    beerRise();
    setTimeout(function() {
      $('.pour').addClass('end');
    }, 1500);
  }
  

  setTimeout(function() {
    pourBeer();
  }, 3000)


$("#search").on("click", function () {
    event.preventDefault();
    
   
    $('.pour') //Pour Me Another Drink, Bartender!
    .delay(2000)
    .animate({
      height: '360px'
      }, 1500)
    .delay(1600)
    .slideUp(500);
  
  $('#liquid') // I Said Fill 'Er Up!
    .delay(3400)
    .animate({
      height: '170px'
    }, 2500);
  
  $('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
    .delay(3400)
    .animate({
      bottom: '200px'
      }, 2500);
  });
});
  
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


})

$("getLocation").on('click', function(){
    $("#MyModal").modal();
})
}