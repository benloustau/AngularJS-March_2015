'use strict';

angular.module('lesson08')

.controller('MainCtrl', function ($scope) {
	var self = this;

	self.submitForm = function() {
		if (self.signUpForm.$valid) {
			console.log("Success")
		}
	}

	$scope.$watch('ctrl.email', function(newEmailValue) {
		console.log(newEmailValue);
	})
});
