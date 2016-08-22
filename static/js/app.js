var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'template/home.html',
      controller: 'homeCtrl'
    })
    .when('/about', {
      templateUrl: 'template/about.html',
      controller: 'aboutCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
});

app.controller('homeCtrl', function($scope) {
  $scope.message = "This is the home page.";
});

app.controller('aboutCtrl', function($scope) {
  $scope.message = "This is the about page.";
});
