'use strict';

angular.module('effectiveApp.directive', [])

.directive('effectiveVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}])

.directive('effectiveLoader', ['$http', function($http) {
  return {
    restrict: 'A',
    link: function (scope, elm, attrs) {
      scope.isLoading = function () {
        return $http.pendingRequests.length > 0;
      };
      scope.$watch(scope.isLoading, function (v) {
        if(v) {
          elm.show();
        } else {
          elm.hide();
        }
      });
    }
  };
}]);
