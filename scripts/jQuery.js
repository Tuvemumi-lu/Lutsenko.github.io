$(document).ready(function() {

	//sticky-nav
	var waypoint = new Waypoint({
	  element: document.getElementById('logo'),
	  handler: function(direction) {
  		if (direction == "down") {
  			$("nav").attr("id", "sticky-nav");

  	} else {
  		$("nav").removeAttr("id");
  	}
  },

  offset: 50 
});

	//buttons click
	$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      	var target = $(this.hash);
      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      	if (target.length) {
        	$('html, body').animate({
          		scrollTop: target.offset().top
        	}, 1000);
        	return false;
      	}
    }
  });
});

  //mobile-nav 

  $(".mobile-nav-icon").click(function() {

  		var icon = $(".mobile-nav-icon i");

  		if (icon.hasClass("fa-solid fa-bars")) {
  			icon.removeClass("fa-solid fa-bars");
  			icon.addClass("fa-solid fa-xmark");
  			$("nav").animate({height: "300px"}, 500);
  		} else {
  			icon.removeClass("fa-solid fa-xmark");
  			icon.addClass("fa-solid fa-bars");
  			$("nav").animate({height: "60px"}, 500);

  		}

        $("#main-nav").slideToggle(500);
        
  });

})



