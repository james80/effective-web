'use strict';

angular.module('effectiveApp.service', ['ngResource'])

.factory('transactionService', function($resource) {
  return $resource('/data/transactions', {}, {
    query: { method: 'GET', params: {}, isArray: true }
  });
})

.factory('companyService', function ($resource) {
    return $resource('/data/companies', {}, {
      query: { method: 'GET', params: {}, isArray: true }
    });
})
;
