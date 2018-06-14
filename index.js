// In this challenge, you need to write JavaScript that provides the 
// following experience: when a user selects one of the thumbnail images 
// using the mouse or keyboard, that image should be displayed in the 
// full-size image container at the top. Updating the image should also 
// update its alt attribute. 
// To test keyboard interactivity, you can Tab to one of the 
// thumbnails and press the Enter key.

//mouse mousedown
//keyboard event.key
'use strict';
$('.thumbnail img').click(function(pic){
  $('.hero img').attr('src', $(this).attr('src'));
  console.log($(this).attr('src'));
});

// $('.thumbnail img').keydown(function(pic){
//     $('.hero img').attr('src', $(this).attr('src'));
//     console.log($(this).attr('src'));
//   });

//$(.thumbnail').on()
