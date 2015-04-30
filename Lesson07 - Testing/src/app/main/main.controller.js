'use strict';

angular.module('gulpTemplate')


.service('Calc', function() {
	this.calculateTheAge = function(yearBorn) {
		return 2015 - yearBorn;
	};
})

.factory('PersonDTO', function() {
	function PersonDTO(config) {
		this.firstName = "George";
		this.lastName = "Dagher";

		angular.extend(this, config);
	}

	return PersonDTO;
})
  
.controller('MainCtrl', function ($scope, Calc) {
  // $scope.name = 'George';

  // var self = this;

  $scope.myObj = {
    name: 'George',
    lastName: 'dagher'
  };

  $scope.onAdd = function() {
  	$scope.myObj.name = 'Tom'
  };
});
