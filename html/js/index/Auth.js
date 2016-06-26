var animation_option = { effect:'fade', duration:500 };

(function(){
var default_elements = {
		wrapper:        null
	  , id:             null
	  , password:       null
	  , id_error:       null
	  , password_error: null
	  , loading:        null
	  , submit:         null
	}
  , elements = {}
;

var Login = function ( elements ) {
	elements = elements || default_elements;

	elements.id_error.hide();
	elements.password_error.hide();

	elements.submit.click( function () {
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
				elements.id_error.hide( animation_option );
				elements.password_error.hide( animation_option );

				if ( data == 'success' )
					location.href = "http://192.168.33.10/dashboard";
				if ( data == 'invalid_id' ) {
					elements.id_error.html( 'Invalid username.' );
					elements.id_error.show( animation_option );
				}
				if ( data == 'invalid_pass' ) {
					elements.password_error.html( 'Invalid password.' );
					elements.password_error.show( animation_option );
				}
			}
		} );
	} );
}

window.Login = Login;

})();




(function(){
var confirmer = new Confirmer();
var default_elements = {
		wrapper:        null
	  , id:             null
	  , password:       null
	  , first:          null
	  , last:           null
	  , id_error:       null
	  , password_error: null
	  , loading:        null
	  , submit:         null
	}
  , elements = {}
;

var Register = function ( elements ) {
	elements = elements || default_elements;

	elements.id_error.hide();
	elements.password_error.hide();

	elements.submit.click( function () {
		var id       = elements.id.val()
		  , password = elements.password.val()
		  , first    = elements.first.val()
		  , last     = elements.last.val()
		;

		elements.id_error.hide( animation_option );
		elements.password_error.hide( animation_option );

		try {
			confirmer.userid( id );
			confirmer.password( password );
		} catch ( e ) {
			if ( e.name === 'userid' ) {
				elements.id_error.html( e.message );
				elements.id_error.show( animation_option );
			}
			if ( e.name === 'password' ) {
				elements.password_error.html( e.message );
				elements.password_error.show( animation_option );
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
				elements.id_error.hide();
				if ( data == 'success' )
					location.href = "http://192.168.33.10/dashboard";
				if ( data == 'duplicate_id' ) {
					elements.id_error.html( 'The username you entered is already in use.' );
					elements.id_error.show( animation_option );
				}
			}
		} );
	} );
}

window.Register = Register;

})();