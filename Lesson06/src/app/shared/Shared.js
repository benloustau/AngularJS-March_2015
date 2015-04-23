(function (app) {

	app.directive('gdTopNavigation', function() {
		return {
			templateUrl: 'app/shared/gd-top-navigation.html',
			controller: 'GDTopNavigationCtrl as ctrl'
		};
	})

	.controller('GDTopNavigationCtrl', function(APP_STATE) {
		var self = this;
		self.stateOptions = APP_STATE;
	});

})(angular.module('App.SharedDirectives', []))