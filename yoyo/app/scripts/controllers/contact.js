'use strict';

/**
 * @ngdoc function
 * @name yoyoApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the yoyoApp
 */
angular.module('yoyoApp')
  .controller('ContactCtrl', function ($scope) {
    
    $scope.awesomeThings = [
      'Here',
      'is',
      'the',
      'Contact',
      'page',
      'list'

    ];
    $scope.string = 'this is a string';

  });
