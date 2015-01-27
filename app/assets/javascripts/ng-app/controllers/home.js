var gp_app = angular.module('AngularRails');

gp_app.controller('HomeCtrl', function ($scope) {
    $scope.things = ['Angular', 'Rails 4.1', 'Working', 'Together!!'];
  });