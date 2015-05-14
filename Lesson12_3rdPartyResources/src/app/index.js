'use strict';

angular.module('lesson12', ['ngResource', 'ui.router', 'ui.bootstrap', 'ngGrid', 'angularSpinner'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl as ctrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
