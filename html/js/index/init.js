$(function(){
	var animation_option = { effect:'fade', duration:500 };

	var register_form = $( '.register form' )
	  , login_form    = $( '.login form' )
	  , login_elements = {
			wrapper:        login_form
		  , id:             login_form.find( 'input[name="id"]' )
		  , password:       login_form.find( 'input[name="password"]' )
		  , submit:         login_form.find( 'input[type="button"]' )
		  , id_error:       login_form.find( 'p.id-error' )
		  , password_error: login_form.find( 'p.password-error' )
		  , loading:        login_form.find( '.loading' )
		}
	  , register_elements = {
			wrapper:        register_form
		  , id:             register_form.find( 'input[name="id"]' )
		  , password:       register_form.find( 'input[name="password"]' )
		  , first:          register_form.find( 'input[name="first"]' )
		  , last:           register_form.find( 'input[name="last"]' )
		  , submit:         register_form.find( 'input[type="button"]' )
		  , id_error:       register_form.find( 'p.id-error' )
		  , password_error: register_form.find( 'p.password-error' )
		  , loading:        register_form.find( '.loading' )
		}
	;
	new Login( login_elements );
	new Register( register_elements );


	$(".switch").click(function () {
		$(".index > .forms > section").toggle( animation_option );
	} );

	$(".login .switch").click(function () {
		register_elements.first.focus();
		history.replaceState('','','register');
		history.pushState('','','register');
		login_elements.id_error.hide();
		login_elements.password_error.hide();
	} );

	$(".register .switch").click(function () {
		login_elements.id.focus();
		history.replaceState('','','login');
		history.pushState('','','login');
		register_elements.id_error.hide();
		register_elements.password_error.hide();
	} );

	moveFocus( ".register", register_elements.submit );
	moveFocus( ".login"   , login_elements.submit );

	function moveFocus( wrapper_selector, submit ) {
		var elements_selector = wrapper_selector + " input[type=text], " + wrapper_selector + " input[type=password]"
		  , elements = $( elements_selector );
		;

		elements.keypress( function(e) {
			var c = e.which ? e.which : e.keyCode;
			if (c !== 13)
				return true;

			e.preventDefault();

			var index = elements.index( this ) + 1;
			if ( index === elements.length ) {
				submit.trigger( "click" );
				return;
			}

			elements.eq( index ).focus();
		} );
	}
});