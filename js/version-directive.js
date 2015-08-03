'use strict';

angular.module('effectiveApp.version.version-directive', [])

.directive('effectiveVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);
