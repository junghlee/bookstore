controllers = angular.module('controllers', []);

controllers.controller('HomeController', ['$scope', '$routeParams', '$location', '$resource',
    function ($scope, $routeParams, $location, $resource) {
      var Books = $resource('/books');
      $scope.books = Books.query();
    }]
);
