$(function() {

	$('.content-header').scrollex({
		// Mode: Sets Scrollex to 'middle' mode (= midpoint between top/bottom edges must fall within contact area).
						mode: 'middle',

    enter: function() {
      // Set #foobar's background color to green when we scroll into it.
        $('.menu-nav a[href="#top"]').addClass('active');
				$('.main').removeClass('darker');
    },
    leave: function() {
      // Reset #foobar's background color when we scroll out of it.
        $('.menu-nav a[href="#top"]').removeClass('active');

    }
  });

  $('.content-about').scrollex({
		// Mode: Sets Scrollex to 'middle' mode (= midpoint between top/bottom edges must fall within contact area).
						mode: 'middle',


    enter: function() {
      // Set #foobar's background color to green when we scroll into it.
        $('.menu-nav a[href="#about"]').addClass('active');
        $('.animText').addClass('animated');
				setTimeout(function() {
				  $('.creative.line-through').addClass('active');
				}, 1500);
				$('.main').addClass('darker');

    },
    leave: function() {
      // Reset #foobar's background color when we scroll out of it.
        $('.menu-nav a[href="#about"]').removeClass('active');

    }
  });
	$('.content-works').scrollex({
		// Mode: Sets Scrollex to 'middle' mode (= midpoint between top/bottom edges must fall within contact area).
						mode: 'middle',



    enter: function() {
      // Set #foobar's background color to green when we scroll into it.
        $('.menu-nav a[href="#works"]').addClass('active');

				$('.content-works-inner').addClass('animation-start');
    },
    leave: function() {
      // Reset #foobar's background color when we scroll out of it.
        $('.menu-nav a[href="#works"]').removeClass('active');

    }
  });
	$('.content-articles').scrollex({

		// Mode: Sets Scrollex to 'middle' mode (= midpoint between top/bottom edges must fall within contact area).
						mode: 'middle',


    enter: function() {
      // Set #foobar's background color to green when we scroll into it.
        $('.menu-nav a[href="#articles"]').addClass('active');
    },
    leave: function() {
      // Reset #foobar's background color when we scroll out of it.
        $('.menu-nav a[href="#articles"]').removeClass('active');

    }
  });
	$('.content-related').scrollex({
		// Mode: Sets Scrollex to 'middle' mode (= midpoint between top/bottom edges must fall within contact area).
						mode: 'middle',



    enter: function() {
      // Set #foobar's background color to green when we scroll into it.
        $('.menu-nav a[href="#getintouch"]').addClass('active');
    },
    leave: function() {
      // Reset #foobar's background color when we scroll out of it.
        $('.menu-nav a[href="#getintouch"]').removeClass('active');

    }
  });

	$('.content-top-container').scrollex({
    enter: function() {
      // Set #foobar's background color to green when we scroll into it.
        $('.logo-container').removeClass('active');
    },
    leave: function() {
      // Reset #foobar's background color when we scroll out of it.
        $('.logo-container').addClass('active');

    }
  });

	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top
	            }, 1000, 'easeInOutExpo');
	            return false;
	        }
	    }
	});

});
