
(function(){

var Confirmer = function () {
}

Confirmer.prototype.userid = function ( user_id ) {
	if ( !user_id.match(/^[0-9a-z]+$/) ) {
		var e = new Error( 'Username can only contain lower case letters and numbers.' );
		e.name = 'userid';
		throw e;
	}

	if ( !user_id.match(/^.{4,30}$/) ) {
		var e = new Error( 'Username must be between 4 and 30 characters long.' );
		e.name = 'userid';
		throw e;
	}
}

Confirmer.prototype.password = function ( pass ) {
	if ( !pass.match(/^.{6,}$/) ) {
		var e =  Error( 'Password must be at least 6 characters long.' );
		e.name = 'password';
		throw e;
	}
}

Confirmer.prototype.weight = function ( weight_num ) {
	if ( !weight_num ) {
		var e = Error( 'You did not fill out the weight field.' );
		e.name = 'weight';
		throw e;
	}

	if ( isNaN( weight_num ) ) {
		var e =  Error( 'Weight must be a number.' );
		e.name = 'weight';
		throw e;
	}

	if ( parseFloat( weight_num ) <= 0 ) {
		var e = Error( 'Weight must be greater than zero.' );
		e.name = 'weight';
		throw e;
	}
}

window.Confirmer = Confirmer;

})();