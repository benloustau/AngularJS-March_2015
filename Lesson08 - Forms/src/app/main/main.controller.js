'use strict';

angular.module('lesson08')

.value('SimpleArray', [
	"Frank Sinatra",
	"Tom Ford", 
	"Bill Clinton"
])

.value('STATES', [{
		abbr: 'CA',
		displayName: 'California'
	}, {
		abbr: 'FL',
		displayName: 'Florida'
	}, {
		abbr: 'OR',
		displayName: 'Oregon'
}])

.value('STATE_OBJECTS', {
	kCA: {
		abbr: 'CA',
		displayName: 'California'
	},
	kFL: {
		abbr: 'FL',
		displayName: 'Florida'
	},
	kOR: {
		abbr: 'OR',
		displayName: 'Oregon'
	}
})

.controller('MainCtrl', function ($scope, SimpleArray, STATES, STATE_OBJECTS) {
	var self = this;

	self.selectOptions = STATE_OBJECTS;

	self.isFirstNameRequired = true;

	self.submitForm = function() {
		if (self.signUpForm.$valid) {
			console.log("Success")
		}
	}

	self.logFname = function(name) {
		console.log(name);
	}

	$scope.$watch('ctrl.email', function(newEmailValue) {
		console.log(newEmailValue);
	})
});
