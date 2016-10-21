var app = angular.module('AmyEddins', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/About', {
      templateUrl : 'templates/about.html',
      controller : 'AboutController'
    })
    .when('/Experience', {
      templateUrl : 'templates/experience.html',
      controller : 'ExperienceController'
    })
    // .when('/Portfolio', {
    //   templateUrl : 'templates/portfolio.html',
    //   controller : 'PortfolioController'
    // })
    .when('/Contact', {
      templateUrl : 'templates/contact.html',
      controller : 'ContactController'
    })
    .otherwise({
      redirectTo: '/About'
    });
}]);
