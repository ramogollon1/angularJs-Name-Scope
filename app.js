'use strict';

var app = angular
  .module('angularScopesBug', []);

app.controller("WelcomeController", function ($scope, $rootScope) {
    $rootScope.name = 'Anonymous';

    $rootScope.getName = function() {
      return $rootScope.name;
    };
  });
  
app.controller("EditingController", function($scope, $rootScope) {

  $scope.$watch('name', function () {
        $rootScope.name = $scope.name;
    });

    $scope.editMode = false;
    $scope.changeName = function() {
      $scope.editMode = true;
    };
    $scope.closeEditor = function() {
      $scope.editMode = false;
    };
  });

app.directive("nameEditor", function () {
    return {
      template: 'Write your name: <input type="text" ng-model="name">'
    };
  });