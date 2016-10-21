var mod = angular.module('AmyEddins');

// Element for storing/displaying links
mod.directive('drawer', ['$rootScope', function(rootScope) {
  return {
    templateUrl: '../../templates/sidebar.html',

    link: function(scope, element) {

      scope.actions = [
        { "id": 1, name: "about", link: "#/About" },
        { "id": 2, name: "experience and skills", link: "#/Experience" },
        // {"id": 3, name:"portfolio", link: "#/Portfolio"},
        { "id": 4, name: "github", link: "https://github.com/AmyLeighEddins" },
        { "id": 5, name: "linkedin", link: "https://www.linkedin.com/in/amy-eddins-8a223571" },
        { "id": 6, name: "contact", link: "#/Contact" },
      ];

      scope.currentAction = scope.actions[0];

      /**
       * Control display for drawer
       */
      scope.open = false;

      /**
       * Open/close drawer depending on state or input
       *
       * @param {boolean} input - Desired state of open property
       * @returns {boolean} State of drawer
       */
      scope.toggle = function(input) {
        if (angular.isDefined(input)) {
          scope.open = !!input;
        }
        else {
          scope.open = !scope.open;
        }

        return scope.open;
      };

      /**
       * Close drawer
       *
       * @param {boolean} haveCycle - Force an Angular cycle
       */
      scope.close = function(haveCycle) {
        scope.toggle(false);

        if (haveCycle) {
          scope.$apply();
        }
      };

      /**
       * Close drawer if we receive a close event from root
       */
      rootScope.$on('drawer:close', function() {
        scope.close(true);
      });
    }
  };
}]);

// Support element for closing the drawer within the drawer
mod.directive('drawerClose', ['$rootScope', function(rootScope) {

  return {
    restrict: 'EC',

    transclude: true,

    template: '<ng-transclude></ng-transclude>',

    link: function(scope, element) {

      element.bind('click', function(event) {
        scope.close(true);
      });
    }
  };
}]);
