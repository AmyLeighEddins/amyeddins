var app = angular.module('AmyEddins', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/About', {
      templateUrl : 'about.html',
      controller : 'AboutController'
    })
    .when('/Experience', {
      templateUrl : 'experience.html',
      controller : 'ExperienceController'
    })
    // .when('/Portfolio', {
    //   templateUrl : 'portfolio.html',
    //   controller : 'PortfolioController'
    // })
    .when('/Contact', {
      templateUrl : 'contact.html',
      controller : 'ContactController'
    })
    .otherwise({
      redirectTo: '/About'
    });
}]);

app.controller('MainController', ['$scope', function($scope){

}]);

app.controller('AboutController', ['$scope', '$location', function($scope, $location){

}]);

app.controller('ExperienceController', ['$scope', '$location', function($scope, $location){

}]);

// app.controller('PortfolioController', ['$scope', '$location', function($scope, $location){
//
// }]);

app.controller('ContactController', ['$scope', '$location', function($scope, $location){

}]);
