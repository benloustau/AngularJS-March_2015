'use strict';

angular.module('lesson10')
  .controller('MainCtrl', function ($scope, $q, VAL, UserResource, UserFriendsResource, MapsAPIResource) {
    $scope.awesomeThings = VAL;

    var self = this;

    self.promise = undefined;

    // UserResource.getUsers({}, function onSuccess(response) {
    // 	self.users = response;
    // }, function onError(error) {
    // 	// error handling function
    // });

	UserResource.getUsers({}).$promise
	.then(function onSuccess(response) {
		self.users = response;
	}, function onError(error) {
		// error handling function
	});


	self.getFriendForUser = function(user) {
		UserFriendsResource.getFriends({
			userId: user._id
		}).$promise
		.then(function (response) {
			user.friends = response;
		}, function (error) {
			// TODO: handle error
		})


		// UserFriendsResource.getFriends({
		// 	userId: user._id
		// }, function (response) {
		// 	user.friends = response;
		// }, function (error) {
		// 	// TODO: handle error
		// })
	}

	self.updateAddress = function() {
		MapsAPIResource.getAddress({
			address: self.info.address
		}).$promise
		.then(function(response) {
			self.addresses = response.results;
		})
	}

    self.showModal = function() {
    	self.defferedObject = $q.defer();
    	$('#myModal').css("display", "block").animate({opacity: 1.0}, 500);
    	$('#background').css("display", "block").animate({opacity: .60}, 500);
    
    	self.defferedObject.promise
    	.then(function onConfirm() {
    		$('#myModal').animate({opacity: 0.0}, 500, function() {
    			$(this).css("display", "none");
    		});
    		$('#background').animate({opacity: 0.0}, 500, function(){
    			$(this).css("display", "none");
    		});
    	}, function onDeny() {
    		window.location.href = "http://www.google.com";
    	});

    };
  })

  .factory('UserResource', function($resource) {
  	return $resource('app/json/sampleData.json', {}, {
  		getUsers: {
  			method: 'GET',
  			isArray: true
  		}
  	})
  })

  .factory('UserFriendsResource', function($resource) {
  	return $resource('app/json/:userId/profile.json', {
  		userId: '@userId'
  	}, {
  		getFriends: {
  			method: 'GET',
  			isArray: true
  		}
  	})
  })

  .factory('MapsAPIResource', function($resource) {
  	return $resource('http://maps.googleapis.com/maps/api/geocode/json', {}, {
  		getAddress: {
  			method: 'GET',
  			isArray: false
  		}
  	})
  })

  .directive('gdModalDisplay', function() { 
  	return {
  		templateUrl: 'app/main/gd-modal-display.html',
  		controller: 'GDModalCtrl as ctrl',
  		scope: {
  			deffered: "="
  		},
  		bindToController: true
  	}
  })

  .controller('GDModalCtrl', function() {
  	var self = this;

  	self.confirm = function() {
  		self.deffered.resolve();
  	};

  	self.deny = function() {
  		self.deffered.reject();
  	};
  })

  .value("VAL", [
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
      }
    ]);
