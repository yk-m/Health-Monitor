$(function(){
	var confirmer = new Confirmer();
	var Register = function ( form ) {
		var elements = {
			form:     form
		  , id:       form.find( 'input[name="id"]' )
		  , password: form.find( 'input[name="password"]' )
		  , first:    form.find( 'input[name="first"]' )
		  , last:     form.find( 'input[name="last"]' )
		  , id_error: form.find( 'p.id-error' )
		  , password_error: form.find( 'p.password-error' )
		  , loading:  form.find( '.loading' )
		};

		elements.id_error.hide();
		elements.password_error.hide();

		console.log( elements );

		elements.form.find( 'input[type="button"]' ).click( function () {
			var self = this;
			elements.loading.show();

			var id       = elements.id.val()
			  , password = elements.password.val()
			  , first    = elements.first.val()
			  , last     = elements.last.val()
			;

			elements.id_error.hide( 'fade', {}, 500 );
			elements.password_error.hide( 'fade', {}, 500 );

			try {
				confirmer.userid( id );
				confirmer.password( password );
			} catch ( e ) {
				if ( e.name === 'userid' ) {
					elements.id_error.html( e.message );
					elements.id_error.show( 'fade', {}, 500 );
				}
				if ( e.name === 'password' ) {
					elements.password_error.html( e.message );
					elements.password_error.show( 'fade', {}, 500 );
				}
				return;
			}

			$.ajax( {
				type: "POST"
			  , url:  "/register"
			  , data: {
					'id':       id
				  , 'password': password
				  , first:      first
				  , last:       last
				}
			  , success: function ( data ) {
					console.log( data );

					elements.id_error.hide();
					if ( data == 'success' )
						location.href = "http://192.168.33.10/dashboard";
					if ( data == 'duplicate_id' ) {
						elements.id_error.html( 'The username you entered is already in use.' );
						elements.id_error.show( 'fade', {}, 500 );
					}
				}
			  , complete: function () {
					self.show( 'fade', {}, 500 );
					elements.loading.hide();
			  }
			} );
		} );
	}

	var Login = function ( form ) {
		var elements = {
			form:     form
		  , id:       form.find( 'input[name="id"]' )
		  , password: form.find( 'input[name="password"]' )
		  , id_error: form.find( 'p.id-error' )
		  , password_error: form.find( 'p.password-error' )
		};

		elements.id_error.hide();
		elements.password_error.hide();

		elements.form.find( 'input[type="button"]' ).click( function () {
			var id       = elements.id.val()
			  , password = elements.password.val()
			;

			$.ajax( {
				type: "POST"
			  , url:  "/login"
			  , data: {
					'id': id
				  , 'password': password
				}
			  , success: function ( data ) {
					console.log( data );

					elements.id_error.hide();
					elements.password_error.hide();
					if ( data == 'success' )
						location.href = "/dashboard";
					if ( data == 'invalid_id' ) {
						elements.id_error.html( 'Invalid username.' );
						elements.id_error.show( 'fade', {}, 500 );
					}
					if ( data == 'invalid_pass' ) {
						elements.password_error.html( 'Invalid password.' );
						elements.password_error.show( 'fade', {}, 500 );
					}
				}
			} );
		} );
	}


	new Login( $( '.login form' ) );
	new Register( $( '.register form' ) );
});