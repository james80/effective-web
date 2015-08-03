'use strict';

angular.module('effectiveApp.version', [
  'effectiveApp.version.interpolate-filter',
  'effectiveApp.version.version-directive'
])

.value('version', '0.1-SNAPSHOT');
