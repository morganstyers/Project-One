
$(document).ready(function () {
  $("#section2").hide();

  $("#start").on("click", function () {
    $("#section2").show()
    $("#section1").hide()
  });

  $("#back").on('click', function () {
    $("#section2").hide()
  })
  function beerRise() {
    $('.beer').addClass('fill');
    $('.head').addClass('active');
  }

  function pourBeer() {
    $('.pour').addClass('pouring');
    beerRise();
    setTimeout(function () {
      $('.pour').addClass('end');
    }, 1500);
  }

  setTimeout(function () {
    pourBeer();
  }, 2000)



  $("#getLocation").on("click", function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    }
  });

  var name; 
  var address;
  var phone;
  var website;
  var id;
  var city;
  var state;

  function showPosition(position) {
    var latCoord = position.coords.latitude;
    var longCoord = position.coords.longitude;
    var queryURL = "https://api.tomtom.com/search/2/categorySearch/company,brewery.json?key=Ab4s6zW0kUp03AlC2DusRDhwK6rkp5Ap&lat=" + latCoord + "&lon=" + longCoord + "&radius=13094&limit=5"
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      for (var i = 0; i < response.results.length; i++) {
        name = response.results[i].poi.name;
        address = response.results[i].address.freeformAddress;
        phone = response.results[i].poi.phone;
        website = response.results[i].poi.url;
        city = response.results[i].address.municipality;
        state = response.results[i].address.countrySubdivision;
      

      console.log(address);
      console.log(name);
      console.log(phone);

      var breweryData = {
        name: name,
        address:address,
        phone: phone,
        website: website.link(website),
      }
     
      console.log("Address: " + breweryData.address);
      console.log(breweryData.name);
      console.log(breweryData.phone);
      console.log(breweryData);
      
      // console.log(city);
      // console.log(state);
      var newDiv = $("<div class='response'>");
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
}
});