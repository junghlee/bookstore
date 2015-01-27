var app = angular.module('GpApps', [
    'templates',
    'ngRoute',
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

