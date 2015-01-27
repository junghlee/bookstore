controllers = angular.module('controllers', []);

controllers.controller('HomeController', ['$scope', function ($scope) {
    $scope.things = ['Angular', 'Rails 4.1', 'Working', 'Together!!'];
  }]
);
