'use strict';

angular.module('lesson09Filters', ['ui.router'])
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
