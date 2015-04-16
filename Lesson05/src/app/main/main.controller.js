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
  
// .controller('MainCtrl', function () {

// })





;
