
  $("#page").hide();
  $("#age").show();

  function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  }

  if ($('age_verify') == 'underage') {
    $("#page").hide()
  }
  var gateParam = getUrlVars()["agegate"];
  // If Cookie is found and True Show Contents of Page and Remove Age Gate modal
  if ($('age_verify') == 'legal' || gateParam == 'valid') {
    console.log('TRUE')
    $('age_verify', 'legal', { expires: 1, path: '/' });
    $('.ageWrap').removeClass('ageGateActive');
    $('.border_wrap').empty();
    $("#page").show()
  }
  else {
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
      }, 1900);
    }
  
    setTimeout(function () {
      pourBeer();
    }, 2000)
  
  });
  }
  // Calculate your age based on inputs
  $(function () {
    var day = $("#birthDay").val();
    var month = $("#birthMonth").val();
    var year = $("#birthYear").val();
    // Disallow Letters into the Age Gate Input Fields
    $('#ageGateForm input.ageInput').on('input', function () {
      this.value = this.value.replace(/[\s\D]/g, '', function () {
      });
      if ($(this).val().length == $(this).attr('maxlength')) {
        if ($('#birthDay').val() > 31 || $('#birthMonth').val() > 12 || $('#birthYear').val() > 2014) {
          $(this).val('');
        }
        if ($('html').hasClass('no-touch')) {
          $(this).parent().next().find('input.ageInput').focus();
        }
      };
    });

    $("#ageGateForm").submit(function () {
      var day = $("#birthDay").val();
      var month = $("#birthMonth").val();
      var year = $("#birthYear").val();
      var age = $("#requiredAge").val();

      // If Input Fields are left empty or not Formatted Correctly Display Message 
      if (day == "" || month == "" || year == "" || month.length < 2 || day.length < 2 || year.length < 4) {
        $('li.errors').html("Please Fill out All Fields with the correct formatting.").slideDown(300);

        return false
      }
      var mydate = new Date();
      mydate.setFullYear(year, month - 1, day);

      var currdate = new Date();
      currdate.setFullYear(currdate.getFullYear() - age);

      if ((currdate - mydate) < 0) {
        $('age_verify', 'underage', { expires: 1, path: '/' });
        $('#ageGateForm').html("<p class='message'>Sorry, only persons over the age of " + age + " may enter this site</p>");
        return false
      }
      else {
        $('age_verify', 'legal', { expires: 1, path: '/' });
        $('#ageGateForm').html("<p class='message'>Congrats you are over 21... you may enter</p>");
        $("#age").remove();
        $("#page").show();
        return false
      }
    });
  });

