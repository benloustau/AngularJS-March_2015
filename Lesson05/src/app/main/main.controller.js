'use strict';

angular.module('gulpTemplate')

.directive('gdWelcome', function() {
  return {
    template: '<div style="width:200px; line-height: 200px; background-color:red; text-align:center;">Hello My Name is George</div>'
  };
})

.directive('gdContactCard', function() {
  return {
    templateUrl: 'app/partials/gd-contact-card.html',
    restrict: 'A'
  };
})

.directive ('gdBackgroundChange', function() {
  return {
    templateUrl: 'app/partials/gd-background-change.html',
    controller: 'GDBackgroundChangeCtrl',
    controllerAs: 'bgCtrl',
    link: function (scope, element) {
    	scope.onFade = function() {
    		$(element).animate({opacity:'0.0'}, 800);
    	}
    }
  };
})
  
.controller('GDBackgroundChangeCtrl', function () {
  var self = this;
  self.isOn = true;
})

.directive('gdPersonDisplay', function() {
  return {
    templateUrl: 'app/partials/gd-person-display.html',
    scope: false
  };
})

.directive('gdPersonValue', function() {
  return {
    templateUrl: 'app/partials/gd-person-value.html',
    scope: {
      firstName: '@',
      lastName: '@'
    }
  };
})

.directive('gdPersonReference', function () {
  return {
    templateUrl: 'app/partials/gd-person-reference.html',
    scope: {
      person: '=',
      onRemove: '&'
    },
    controller:'PCtrl as ctrl',
    bindToController: true
  };
})
.controller('PCtrl', function() {

})

.directive('gdPersonNameSpace', function() {
	return {
		templateUrl: 'app/partials/gd-person-name-space.html',
		scope: {
			person: '=gdPersonNameSpace'
		}
	}
})

.directive('gdTranscludeExample', function() { 
	return {
		templateUrl: 'app/partials/gd-transclude-example.html',
		transclude: true
	}
})

.controller('MainCtrl', function() {
  var self = this;

  self.person1 = {
    fname: 'Frank',
    lname: 'Sinatra'
  };
  self.person2 = {
    fname: 'Bill',
    lname: 'Clinton'
  };
  self.person3 = {
    fname: 'Snoop',
    lname: 'Doggy Dogg'
  };

  self.removePerson = function(person) {
  	var index = self.persons.indexOf(person);
  	if (index >= 0) {
  		self.persons.splice(index, 1);
  	}
  }

  self.persons = [self.person1, self.person2, self.person3];
});
