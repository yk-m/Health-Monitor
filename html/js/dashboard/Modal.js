(function(){

var options = {
		origin: ["middle", "center"]
  }
  , effect = 'fade'
  , duration = 500
;

var Modal = function ( wrapper, background, close ) {
	this.wrapper      = wrapper;
	this.background   = background;

	this.open = getOpenFunction( this );
	this.close = getCloseFunction( this );

	this.opened = false;

	background.click( this.close );
}

Modal.prototype.isOpen = function () {
	return this.opened;
}

function getOpenFunction( self ) {
	return function () {
		self.opened = true;
		self.wrapper.show( effect, options, duration );
		self.background.show();
	}
}

function getCloseFunction( self ) {
	return function () {
		self.opened = false;
		self.wrapper.hide( effect, options, duration );
		self.background.hide();
	}
}

window.Modal = Modal;

})();