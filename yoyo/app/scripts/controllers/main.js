'use strict';

/**
 * @ngdoc function
 * @name yoyoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoyoApp
 */
angular.module('yoyoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karm'
    ];
  });
