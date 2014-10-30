'use strict';

/**
 * @ngdoc function
 * @name myAngularAppApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the myAngularAppApp
 */
angular.module('myAngularApp')
  .controller('TodoCtrl', function ($scope) {
    $scope.stuff = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
