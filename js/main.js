$(function() {
	// $project	= $( '.project' );
	//
	// $project.on( 'mousemove', function( e ) {
	// 	var $this		= $( this ),
	// 		eX			= e.offsetX,
	// 		eY			= e.offsetY,
	// 		dim			= this.getBoundingClientRect();
	// 		w			= dim.width/2,
	// 		h			= dim.height/2,
	// 		tiltLimit	= 15,
	// 		posX		= ( h - eY ) * ( tiltLimit / h ) / 2;
	// 		posY		= ( w - eX ) * ( tiltLimit / w ) * -1;
	//
	// 	$this.css({
	// 		'transform': 'scale(1.06)' + 'translateX( ' + posX + 'px ) translateY( ' + posY + 'px )',
	// 		'z-index': '10',
	// 		'box-shadow': ( posY * -1 ) + 'px ' + ( posX + 14 ) + 'px 34px 0 rgba( 0, 0, 0, 0.4 )'
	// 	});
	//
	// });
	// $project.mouseleave( function( e ) {
	// 	var $el = $( this );
	//
	// 	$el.removeAttr( 'style' ).addClass( 'hover--ending' );
	//
	// 	setTimeout( function() {
	// 		$el.removeClass( 'hover--ending' );
	// 	}, 500 );
	// });

	$menu = $('.menu-icon-container');
	$menuLinks = $('.main-nav-full a');

	$menu.on('click',function(){
		if($(this).attr('data-click-state') == 1) {
			$(this).attr('data-click-state', 0),
			$('.primary-nav').addClass('opened-big-nav'),
	    $('body').addClass('no-scroll')
		} else {
			$(this).attr('data-click-state', 1),
			$('.primary-nav').removeClass('opened-big-nav'),
	    $('body').removeClass('no-scroll')
		}
	});

	$menuLinks.on('click',function(){
		if($menu.attr('data-click-state') == 0) {
			$menu.attr('data-click-state', 1),
			$('.primary-nav').removeClass('opened-big-nav'),
	    $('body').removeClass('no-scroll')
		} else {
			$menu.attr('data-click-state', 0),
			$('.primary-nav').addClass('opened-big-nav'),
	    $('body').addClass('no-scroll')
		}
	});



});
