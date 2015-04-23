'use strict';

angular.module('gulpTemplate', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'App.StuffWeSellMain', 'App.SharedDirectives', 'App.AboutUsMain'])
  
  .constant('APP_STATE', {
  	kStateMain: {
  		stateName:'main',
  		stateDefintion: {
  			url: '/',
  			templateUrl: 'app/main/main.html',
  			controller: 'MainCtrl as ctrl'
  		}
  	},
  	kStateAboutUs: {
  		stateName: 'aboutUs',
  		stateDefintion: {
  			url: '/about-us',
  			templateUrl: 'app/about-us/about-us-main.html',
  			controller: 'AboutUsCtrl as ctrl'
  		}
  	},
  	kStateStuffWeSell: {
  		stateName:'stuffWeSell',
  		stateDefintion: {
  			url: '/stuff-we-sell',
  			templateUrl: 'app/stuff-we-sell/stuff-we-sell.html',
  			controller: 'StuffWeSellCtrl'
  		}
  	},
  	kStateCEOBio: {
  		stateName:'aboutUs.ceoBio',
  		stateDefintion: {
  			url: '/ceo-bio',
  			templateUrl: 'app/about-us/ceo-bio.html'
  		}
  	},
  	kStatePresidentBio: {
  		stateName:'aboutUs.presidentBio',
  		stateDefintion: {
  			url: '/president-bio',
  			templateUrl: 'app/about-us/president-bio.html'
  		}
  	},
  	kStateFounderBio: {
  		stateName:'aboutUs.founderBio',
  		stateDefintion: {
  			url: '/founder-bio',
  			templateUrl: 'app/about-us/founder-bio.html'
  		}
  	},
  })

  .config(function ($stateProvider, $urlRouterProvider, APP_STATE) {
    $stateProvider

	.state(APP_STATE.kStateMain.stateName, APP_STATE.kStateMain.stateDefintion)
	.state(APP_STATE.kStateAboutUs.stateName, APP_STATE.kStateAboutUs.stateDefintion)
	.state(APP_STATE.kStateStuffWeSell.stateName, APP_STATE.kStateStuffWeSell.stateDefintion)
    .state(APP_STATE.kStateCEOBio.stateName, APP_STATE.kStateCEOBio.stateDefintion)
    .state(APP_STATE.kStatePresidentBio.stateName, APP_STATE.kStatePresidentBio.stateDefintion)
    .state(APP_STATE.kStateFounderBio.stateName, APP_STATE.kStateFounderBio.stateDefintion);


    $urlRouterProvider.otherwise('/');
  })
;
