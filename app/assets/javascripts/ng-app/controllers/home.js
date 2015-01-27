GP_App = angular.module('AngularRails');

GP_App.controller('HomeCtrl', function ($scope) {
    $scope.things = ['Angular', 'Rails 4.1', 'Working', 'Together!!'];
  });