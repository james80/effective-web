'use strict';

angular.module('effectiveApp.directive', [])

.directive('effectiveVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);
