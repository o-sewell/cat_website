
//main page title blink
function blinker() {
  $( "h2" ).fadeOut( 500 );
  $( "h2" ).fadeIn( 500 );
}
setInterval(blinker, 800);

  $(".meow").hide().slideDown("slow");

//main page meow slide
$( "intro" ).slideDown( "slow", function() {
});

//about contact page meow blink
var el = $('strong');
setInterval(function() {
   el.toggleClass('blinking');
}, 200);

//-----mobile navigation---------------------------------------------------
//create a select
var $select = $("<select></select>");

//append select menu
$("#menu").append($select);

//cycle over menu links
$("#menu a").each(function() {
  var $anchor = $(this);
  //create an option
  var $option = $("<option></option>");
  //Deal with selected options depending on current page
  if($anchor.parent().hasClass("selected")) {
    $option.prop("selected",true);
  }
  //option's value is the href
  $option.val($anchor.attr("href"));
  //options text is the text of the link
  $option.text($anchor.text());
  //append option to selecte
  $select.append($option);
});

//Bind change listner to the select menu
$select.change(function() {
  //go to selects location
  window.location = $select.val();
});



//JQUERY LIGHTBOX ----------------------------------------------------
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

  // An image to overlay
$overlay.append($image);

  // A caption to overlay
$overlay.append($caption);

  // Add overlay
$("body").append($overlay);

$( ".cat_images a" ).click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");


// update the overlay with the image linked in the link

$image.attr("src", imageLocation);

// Show the the overlay
$overlay.show();

// Get childs alt attribute and set caption
var captionText = $(this).children("img").attr("alt");
$caption.text(captionText);

});


// When overlay is clicked

$overlay.click(function() {
  // Hide the overlay
$(this).hide();
});




//password confirmation form--------------------------------
var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//hide span hints
$('form span').hide();

function passwordEvent() {
  //find out if password is valid (is password more then 8 characters)
  if($password.val().length > 8) {
    //hide hint if valid
    $password.next().hide();
  } else {
    //else show hint
    $password.next().show();
  }
}

function confirmPasswordEvent() {
  //find out if password and confirmation match.
  if($password.val() === $confirmPassword.val()) {
    //hide hint if match
    $confirmPassword.next().hide();
  } else {
    //else show hint
    $confirmPassword.next().show();
  }
}

//when event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

//when event happens on password confirmation
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
