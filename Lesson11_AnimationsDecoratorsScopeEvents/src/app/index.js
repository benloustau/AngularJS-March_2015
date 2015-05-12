'use strict';

angular.module('lesson11', ['ngAnimate', 'ngResource', 'ui.router', 'ui.bootstrap'])

.config(function ($stateProvider, $urlRouterProvider, $provide, GlobalSettingsProvider) {
$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'app/main/main.html',
		controller: 'MainCtrl as ctrl'
	});

	$urlRouterProvider.otherwise('/');

	$provide.decorator('$log', function($delegate) {
		var placeholder = $delegate.debug;

		$delegate.debug = function() {
			var args = arguments;
			if (GlobalSettingsProvider.isDebug) {
				placeholder.apply(null, args);
			}
		};

		$delegate.debugTime = function() {
			var arg = arguments[0];
			arg = arg + new Date();
			placeholder.apply(null, [arg]);
		};

		return $delegate;
	})


})


;
