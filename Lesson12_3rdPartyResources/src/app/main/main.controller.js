'use strict';

angular.module('lesson12')


 .controller('GDToggleParentCtrl', function($scope) {
 	this.setElementToHide = function(element) {
 		$scope.elementToHide = element;
 	}
 })

 .directive('gdToggleParent', function() {
 	return {
 		controller: 'GDToggleParentCtrl',
 		scope: true,
 		link: function(scope, element) {
 			element.on('mouseenter', function() {
 				scope.elementToHide.toggleClass('hidden')
 			});

 			element.on('mouseleave', function() {
 				scope.elementToHide.toggleClass('hidden')
 			});
 		}
 	}
 })

 .directive('gdSpinner', function() {
 	return {
 		templateUrl: 'app/main/gd-spinner.html',
 		scope: {
 			isSpinning: '=gdSpinner'
 		},
 		controller: function($scope) {
 			$scope.spinnerOptions = {
 				  lines: 13, // The number of lines to draw
 				  length: 20, // The length of each line
 				  width: 5, // The line thickness
 				  radius: 30, // The radius of the inner circle
 				  corners: 1, // Corner roundness (0..1)
 				  rotate: 0, // The rotation offset
 				  direction: 1, // 1: clockwise, -1: counterclockwise
 				  color: '#000', // #rgb or #rrggbb or array of colors
 				  speed: 1, // Rounds per second
 				  trail: 60, // Afterglow percentage
 				  shadow: false, // Whether to render a shadow
 				  hwaccel: false, // Whether to use hardware acceleration
 				  className: 'spinner', // The CSS class to assign to the spinner
 				  zIndex: 2e9, // The z-index (defaults to 2000000000)
 				  top: '50%', // Top position relative to parent
 				  left: '50%' // Left position relative to parent
 			}
 		}
 	}
 })

 .directive('gdHideToggle', function() {
 	return {
 		require: '^^gd-toggle-parent',
 		link: function(scope, element, attributes, parentCtrl) {
 			parentCtrl.setElementToHide(element);
 		}
 	};
 })


 .factory('MapsAPIResource', function($resource) {
 	return $resource('http://maps.googleapis.com/maps/api/geocode/json', {}, {
 		getAddress: {
 			method: 'GET',
 			isArray: false
 		}
 	})
 })

 .controller('ModalCtrl', function($modalInstance, MapsAPIResource) {
 	var self = this;

 	self.closeModal = function() {
 		$modalInstance.close('User closed the Modal');
 	}

 	self.update = function(address) {
 		MapsAPIResource.getAddress({address: address}).$promise
 		.then(function(response) {
 			self.myData = response.results;
 		});
 	}

 	self.gridOptions = {
 		data: 'ctrl.myData',
 		columnDefs: [{
 			displayName: "Address",
 			field: 'formatted_address'
 		}, {
 			displayName: "Long",
 			field: 'geometry.location.lng'
 		}, {
 			displayName: "Lat",
 			field: 'geometry.location.lat'
 		}]
 	}
 })

  .controller('MainCtrl', function ($timeout, $scope, $modal) {

  	$scope.showModal = function() {
  		var modalObject = $modal.open({
  			templateUrl:"app/main/modalMarkup.html",
  			controller: "ModalCtrl as ctrl"
  		})

  		modalObject.result
  		.then(function(userMessage) {
  			console.log(userMessage);
  		}, function () {
  			console.log("Modal was dismissed");
  		})
  	};




  	$scope.isRequestingData = true;

  	$timeout(function() {
  		$scope.isRequestingData = false;
  		$scope.awesomeThings = [
  		  {
  		    'title': 'AngularJS',
  		    'url': 'https://angularjs.org/',
  		    'description': 'HTML enhanced for web apps!',
  		    'logo': 'angular.png'
  		  },
  		  {
  		    'title': 'BrowserSync',
  		    'url': 'http://browsersync.io/',
  		    'description': 'Time-saving synchronised browser testing.',
  		    'logo': 'browsersync.png'
  		  },
  		  {
  		    'title': 'GulpJS',
  		    'url': 'http://gulpjs.com/',
  		    'description': 'The streaming build system.',
  		    'logo': 'gulp.png'
  		  },
  		  {
  		    'title': 'Jasmine',
  		    'url': 'http://jasmine.github.io/',
  		    'description': 'Behavior-Driven JavaScript.',
  		    'logo': 'jasmine.png'
  		  },
  		  {
  		    'title': 'Karma',
  		    'url': 'http://karma-runner.github.io/',
  		    'description': 'Spectacular Test Runner for JavaScript.',
  		    'logo': 'karma.png'
  		  },
  		  {
  		    'title': 'Protractor',
  		    'url': 'https://github.com/angular/protractor',
  		    'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
  		    'logo': 'protractor.png'
  		  },
  		  {
  		    'title': 'jQuery',
  		    'url': 'http://jquery.com/',
  		    'description': 'jQuery is a fast, small, and feature-rich JavaScript library.',
  		    'logo': 'jquery.jpg'
  		  },
  		  {
  		    'title': 'Bootstrap',
  		    'url': 'http://getbootstrap.com/',
  		    'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
  		    'logo': 'bootstrap.png'
  		  },
  		  {
  		    'title': 'Angular UI Bootstrap',
  		    'url': 'http://angular-ui.github.io/bootstrap/',
  		    'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
  		    'logo': 'ui-bootstrap.png'
  		  }
  		];
  	}, 4000);




    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
