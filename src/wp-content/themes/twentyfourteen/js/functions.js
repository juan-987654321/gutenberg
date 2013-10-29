( function( $ ) {
	var body    = $( 'body' ),
	    _window = $( window );

	// Enable menu toggle for small screens.
	( function() {
		var nav = $( '#primary-navigation' ), button, menu;
		if ( ! nav )
			return;

		button = nav.find( '.menu-toggle' );
		if ( ! button )
			return;

		// Hide button if menu is missing or empty.
		menu = nav.find( '.nav-menu' );
		if ( ! menu || ! menu.children().length ) {
			button.hide();
			return;
		}

		$( '.menu-toggle' ).on( 'click.twentyfourteen', function() {
			nav.toggleClass( 'toggled-on' );
		} );
	} )();

	/*
	 * Makes "skip to content" link work correctly in IE9 and Chrome for better
	 * accessibility.
	 *
	 * @link http://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/
	 */
	_window.on( 'hashchange.twentyfourteen', function() {
		var element = document.getElementById( location.hash.substring( 1 ) );

		if ( element ) {
			if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) )
				element.tabIndex = -1;

			element.focus();
		};
	} );

	$( function() {
		// Search toggle.
		$( '.search-toggle' ).on( 'click.twentyfourteen', function() {
			var that    = $( this ),
			    wrapper = $( '.search-box-wrapper' );

			that.toggleClass( 'active' );
			wrapper.toggleClass( 'hide' );

			if ( that.is( '.active' ) )
				wrapper.find( '.search-field' ).focus();
		} );

		/*
		 * Fixed navbar.
		 *
		 * The callback on the scroll event is only added if there is a header
		 * image and we are not on mobile.
		 */
		if ( body.is( '.header-image' ) && _window.width() > 781 ) {
			var toolbarOffset  = body.is( '.admin-bar' ) ? $( '#wpadminbar' ).height() : 0,
			    mastheadOffset = $( '#masthead' ).offset().top - toolbarOffset;

			_window.on( 'scroll.twentyfourteen', function() {
				if ( window.scrollY > mastheadOffset )
					body.addClass( 'masthead-fixed' );
				else
					body.removeClass( 'masthead-fixed' );
			} );
		}

		// Focus styles for primary menu.
		$( '.primary-navigation' ).find( 'a' ).on( 'focus.twentyfourteen blur.twentyfourteen', function() {
			$( this ).parents().toggleClass( 'focus' );
		} );
	} );

	// Arrange footer widgets vertically.
	if ( $.isFunction( $.fn.masonry ) ) {
		$( '#footer-sidebar' ).masonry( {
			itemSelector: '.widget',
			columnWidth: function( containerWidth ) {
				return containerWidth / 4;
			},
			gutterWidth: 0,
			isResizable: true,
			isRTL: $( 'body' ).is( '.rtl' )
		} );
	};

	// Initialize Featured Content slider.
	_window.load( function() {
		if ( body.is( '.slider' ) ) {
			$( '.featured-content' ).featuredslider( {
				selector:  '.featured-content-inner > article',
				controlsContainer: '.featured-content'
			} );
		}
	} );
} )( jQuery );
