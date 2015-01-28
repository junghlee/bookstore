var app = angular.module('GpApps', [
    'templates',
    'ngRoute',
    'ngResource',
    'controllers'
  ]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'HomeController'
      });
  }]
);

