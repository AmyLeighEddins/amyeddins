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
  $scope.actions = [
    {"id": 1, name:"about", link: "#/About"},
    {"id": 2, name:"experience and skills", link: "#/Experience"},
    // {"id": 3, name:"portfolio", link: "#/Portfolio"},
    {"id": 4, name:"github", link: "https://github.com/AmyLeighEddins"},
    {"id": 5, name:"linkedin", link: "https://www.linkedin.com/in/amy-eddins-8a223571"},
    {"id": 6, name:"contact", link: "#/Contact"},
  ];
  $scope.currentAction = $scope.actions[0];
  $scope.toggleLinks = function() {
    var x = document.getElementById("links");
    if (x.className === "toggle-links") {
        x.className += ".open";
    } else {
        x.className = "toggle-links";
    }
  };
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
