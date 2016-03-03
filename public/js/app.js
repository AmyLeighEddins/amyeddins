var app = angular.module('AmyEddins', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/Home', {
      templateUrl : 'index.html',
      controller : 'HomeController'
    })
    .when('/About', {
      templateUrl : 'about.html',
      controller : 'AboutController'
    })
    .when('/Experience', {
      templateUrl : 'experience.html',
      controller : 'ExperienceController'
    })
    .when('/Portfolio', {
      templateUrl : 'portfolio.html',
      controller : 'PortfolioController'
    })
    .when('/Contact', {
      templateUrl : 'contact.html',
      controller : 'ContactController'
    })
    .otherwise({
      redirectTo: '/Home'
    });
}]);

app.controller('MainController', ['$scope', function($scope){
  $scope.actions = [
    {"id": 1, name:"home", link: "#/Home"},
    {"id": 2, name:"about", link: "#/About"},
    {"id": 3, name:"experience and skills", link: "#/Experience"},
    {"id": 4, name:"portfolio", link: "#/Portfolio"},
    {"id": 4, name:"github", link: "https://github.com/AmyLeighEddins"},
    {"id": 4, name:"linkedin", link: "https://www.linkedin.com/in/amy-eddins-8a223571"},
    {"id": 5, name:"contact", link: "#/Contact"},
  ];
  $scope.currentAction = $scope.actions[0];
}]);

app.controller('HomeController', ['$scope', 'storage', '$location', function($scope, storage, $location){
  $scope.showPopup = false;
  $scope.setCurrentAction = function(action, id) {
    $scope.currentAction = action;
    currentId = id;
    if (action === "Delete") {
      $scope.togglePopup();
    }
    else {
      $location.path('/Detail');
    }
  };
  $scope.togglePopup = function() {
    $scope.showPopup = !$scope.showPopup;
  };
  $scope.deleteContact = function() {
    storage.removeContact(currentId);
    $scope.togglePopup();
    $scope.contacts = $scope.getContacts();
  };
  $scope.getContacts = function() {
    return storage.getAllContacts();
  };
  $scope.contacts = $scope.getContacts();
}]);

app.controller('AboutController', ['$scope', 'storage', '$location', function($scope, storage, $location){
  $scope.saveContact = function(name, address, number) {
    currentId = 0;
    while (storage.checkIfExists(currentId)) {
      currentId++;
    }
    var data = {"id": currentId, "name": name, "address": address, "phone": number};
    storage.setContact(currentId, data);
    currentId++;
    $location.path('/All');
  };
}]);

app.controller('ExperienceController', ['$scope', 'storage', function($scope, storage){
  $scope.editing = false;
  $scope.getDetails = function(id) {
    return storage.getContact(id);
  };
  $scope.contact = $scope.getDetails(currentId);
  $scope.toggleEdit = function () {
    $scope.editing = !$scope.editing;
  };
  $scope.editContact = function(id, name, address, number) {
    $scope.toggleEdit();
    storage.removeContact(id);
    var data = {"id": id, "name": name, "address": address, "phone": number};
    storage.setContact(id, data);
  };
}]);

app.controller('PortfolioController', ['$scope', 'storage', '$location', function($scope, storage, $location){
  $scope.saveContact = function(name, address, number) {
    currentId = 0;
    while (storage.checkIfExists(currentId)) {
      currentId++;
    }
    var data = {"id": currentId, "name": name, "address": address, "phone": number};
    storage.setContact(currentId, data);
    currentId++;
    $location.path('/All');
  };
}]);

app.controller('ContactController', ['$scope', 'storage', '$location', function($scope, storage, $location){
  $scope.saveContact = function(name, address, number) {
    currentId = 0;
    while (storage.checkIfExists(currentId)) {
      currentId++;
    }
    var data = {"id": currentId, "name": name, "address": address, "phone": number};
    storage.setContact(currentId, data);
    currentId++;
    $location.path('/All');
  };
}]);
