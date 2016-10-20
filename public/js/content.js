var mod = angular.module('AmyEddins');

// Container for all content outside drawer
mod.directive('content', ['$rootScope', function(rootScope) {
  return {
    transclude: true,
    
    template: '<ng-transclude class="display-block inherit-height"></ng-transclude>',
    
    link: function(scope, element) {
      element.bind('click', function() {
        rootScope.$broadcast('drawer:close');
      });
    }
  };
}]);