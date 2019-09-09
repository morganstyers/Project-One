console.log("linked")
/*Morgan: document.ready() needs to encompass whole body. 
The ready() method is used to make a function available after 
the document is loaded. Whatever code you write inside the 
$(document ).ready() method will run once the page DOM is ready to 
execute JavaScript code.(src= jquery docu webstie)*/


$(document).ready(function () {

//Morgan: added the section scrolling function back
$("#section2").hide()

  function beerRise() {

$(document).ready(function() {
  
    //beer animation for home page
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

  }, 1700)


    $('.pour')
      .delay(2000)
      .animate({
        height: '360px'
  }, 3000)

      }, 1500)
      .delay(1700)
      .slideUp("slow", 100);

    $('#liquid')
      .delay(3400)
      .animate({
        height: '170px'
      }, 2500);


    $('.beer-foam')
      .delay(3400)
      .animate({
        bottom: '200px'
      }, 2500);

//Morgan: added the section scrolling function back

  $("#start").on("click", function() {

    $("#section2").show();

  })

  $("#getLocation").on("click", function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    }
  })


  });
});  

//end beer animation
//start js 
  
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

    var queryurl = "https://api.tomtom.com/search/2/categorySearch/company,brewery.json?key=Ab4s6zW0kUp03AlC2DusRDhwK6rkp5Ap&lat=" + latCoord + "&lon=" + longCoord + "&radius=13094&limit=5"
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
          //MORGAN:appended so the results show up not crammed into buttons
          $('#bar').append(newDiv)
        }
        
        var name = response.results[i].poi.name;
        var address = response.results[i].address.freeformAddress;
        var phone = response.results[i].poi.phone;
        var website = response.results[i].poi.url;
        var city = response.results[i].address.municipality;
        var state = response.results[i].address.countrySubdivision;
        
        if (phone === null || phone === undefined || website === null || website === undefined) {
            phone = "";
            website = "";
        } else if (!website.includes("https://")){
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
    $("getLocation").on('click', function () {
      $("#MyModal").modal();
    })
  };

});







