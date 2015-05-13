angular.module('myApp', [])


.value('COLORS', {
	kRed: {
		cssOverride:'red',
	},
	kBlue: {
		cssOverride:'blue',
	},
	kYellow: {
		cssOverride:'yellow',
	},
	kGreen: {
		cssOverride:'green',
	},
})

.controller('myController', function($scope, COLORS) {
	var self = this;
	self.COLORS = COLORS;

	self.currentSelection = {};
	self.highlightBox = function(color) {
		self.currentSelection = color;
	};

	self.deselectCurrent = function() {
		self.currentSelection = null;
	}

	self.shouldHighlightBox = function(desired, actual) {
		if (desired == actual) {
			return desired.cssOverride;
		}
	};

});

