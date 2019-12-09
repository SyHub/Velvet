$(document).ready(function() {
  $("#more").click(function() {
    $('html, body').animate({
      scrollTop: $('#test').offset().top
    },1000); 
  });
});

$(document).ready(function() {
  $(".open-close").click(function() {
    $(this).toggleClass("open"),
    $(".off-canvas").toggleClass("show");
  });
});

// wait for all out assets to load
// good practice - obv not needed in this demo
$(document).ready( function() {
  
  $('.off-canvas a').click(function(e) {
    // take this off and see what happens
    // this stops the browser from jumping down
    e.preventDefault();
    
    // the anchor u clicked on's href corresponds
    // to the div's id we want to scroll to
    var id = $(this).attr('href');
    	console.log(id)
    
    // pass the id in as a selector to the div
    // dont prefix with #, already in href ;)
    var target = $(id);
    console.log(target)
    
    // div's pixel amount from top 
    // where we need to scroll to
    var scrollTo = target.offset().top;
    console.log(scrollTo)
    
    // how long we should take to scroll
    // in milliseconds
    var speed = 1500;
    
    $('html,body').animate({
      scrollTop: scrollTo
    }, speed);
    
  }); 
});