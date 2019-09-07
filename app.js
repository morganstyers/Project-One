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
  }, 1700)
$("#search").on("click", function () {
    event.preventDefault();
    
   
    $('.pour') //Pour Me Another Drink, Bartender!
    .delay(2000)
    .animate({
      height: '360px'
      }, 1500)
    .delay(1700)
    .slideUp("slow",100);
  
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
  });
    
    var city = $("#city-input");
    var state =$("#state-input");
    var queryurl = "https://api.openbrewerydb.org/breweries?by_city=" + city + "&by_state=" + state;
console.log(queryurl)
$.ajax({
    url: queryurl,
    method: "GET"
})

.then(function(response){
    var results = response;
    var longAnswer = [];
    var latAnswer = [];

    for (var i = 0; i < results.length; i++){
        // retrieve first lat/lon and push into array
       if (results[i].longitude === null || results[i].longitude === "") {
           i++
       } else {
            longAnswer.push(results[0].longitude)
            latAnswer.push(results[0].latitude) 
       }
     

    
    }

   

    //console.log(results[i].longitude)
    console.log("long answer" + longAnswer[0])
    console.log("lat answer" + latAnswer[0])

})
$("getLocation").on('click', function(){
    $("#MyModal").modal();
})
});







