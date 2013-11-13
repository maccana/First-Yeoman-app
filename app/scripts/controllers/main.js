'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.addTodo = function () {
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    }
  });
